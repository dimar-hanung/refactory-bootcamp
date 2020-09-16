/* 
    To use pagination:
    (*) Accepted parameter is object with value limit, page, count
    (*) To use in Controller, insert limit from query.limit, page from query.page and count from related models.count()
*/

const pagination = (data) => {
    const limit = data.limit ? parseInt(data.limit) : 10
    const offset = !data.page || data.page <= 1 ? 0 : data.page * limit - limit

    const totalItems = data.count
    const totalPages = data.count == 0 ? 0 : Math.ceil(totalItems / limit)
    const currentPage = offset >= 1 ? data.page : 1
    return {    
        limit, offset, totalItems, totalPages, currentPage
    }
}

module.exports = pagination