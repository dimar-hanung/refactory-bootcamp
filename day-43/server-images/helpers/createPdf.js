const ejs = require("ejs")
const path = require("path")
const pdf = require("html-pdf")
const response = require("../helpers/response")

module.exports = (data) => {
    ejs.renderFile(path.join(__dirname, "../helpers/report-template.ejs"), {
        data: data
    }, (err, result) => {
        if (!err) {
            const options = {
                "height": "11.25in",
                "width": "8.5in",
                "header": {
                     "height": "20mm",
                },
                "footer": {
                    "height": "20mm",
                },
            }
            pdf.create(result, options).toFile(path.join(__dirname, `../asset/pdf/${data.month.toLowerCase()}-${data.name.toLowerCase()}.pdf`), function(err, val) {
                if (!err) {
                    if (!data.note) {
                        data.res.download(path.join(__dirname, `../asset/pdf/${data.month.toLowerCase()}-${data.name.toLowerCase()}.pdf`))
                    }
                } else if (err) {
                    res.status(400).json(response("Fail", error))
                }
            })
        } else {
            console.log(err)
        }
    })

}