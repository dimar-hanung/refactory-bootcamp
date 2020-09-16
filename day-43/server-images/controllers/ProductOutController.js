require('dotenv').config()
const models = require("../models")
const response = require('../helpers/response')
const pagination = require('../helpers/pagination')
const ReportController = require("../controllers/ReportController")

const attProductOut = ['date', 'total',]
const attProduct = ['id', 'name', 'photo_url', 'stock', 'price']
const attUser = ['full_name', 'username', 'email', 'phone_number']

class Controller {
    static async create (req, res) {
        try {
            // Get product data by the given product_id
            console.log(req.body.data.product_id)
            const products = await models.Product.findByPk(req.body.data.product_id)
            
            // Check if stocks product is enough
            if (req.body.data.total > products.stock) {
               return res.status(422).json(response("Fail", "Can't afford to check-out due to stock insufficient"))
            }

            // Create new Chekout data
            const out = await models.Product_Out.create({
                product_id: req.body.data.product_id,
                date: new Date(),
                total: req.body.data.total
            })

            // Update stock product after checkout
            await models.Product.update({ stock: products.stock - req.body.data.total }, { where: { id: products.id } })

            if ((req.body.data.total - products.stock) == 0) {
                // Send empty stock email notification to admin
                ReportController.emptyNotification(products.name, out.date)
            }

            return res.status(200).json(response("Success", "Check out receipt is created", out))

        } catch (error) {
            res.status(400).json(response("Fail", error.message))
        }
    }

    static async show (req, res) {
        try {
            // Count every data in product_out table
            const count = await models.Product_Out.count()

            // Get offset and limit from pagination helper
            const page = pagination({
                limit: req.query.limit,
                page: parseInt(req.query.page),
                count: count
            })

            // Get all data in product_out table
            const show = await models.Product_Out.findAll({
                limit: page.limit,
                offset: page.offset,
                attributes: attProductOut,
                include: [{
                    model: models.Product,
                    attributes: attProduct,
                    include: [{
                        model: models.User,
                        as: "supplier",
                        attributes: attUser
                    }]
                }]
            })

            // Data yang akan ditampikan di response
            const data = {
                data: show,
                totalItems: page.totalItems,
                totalPages: page.totalPages,
                currentPages: page.currentPage
            }

            res.status(200).json(response("Success", "Data retrieved", data))

        } catch (error) {
            res.status(500).json(response("Fail", error.message))
        }
    }

    static async find (req, res) {
        try {
            // Mengambil data dari model product_out berdasarkan parameter id
            const find = await models.Product_Out.findByPk(req.params.id)
            
            // Return fail jika find nya kosong
            if (!find) {
                return res.status(422).json(response("Fail", "Check-out data doesn't exist", find))
            }

            res.status(200).json(response("Success", "Check-out data has been retrieved", find))

        } catch (error) {
            res.status(500).json(response("Fail", error.message))
        }
    }

    static async update (req, res) {
        try {
            // Mengambil data dari model product_out berdasarkan parameter id
            const find = await models.Product_Out.findByPk(req.params.id)
            
            // Return fail jika find nya kosong
            if (!find) {
                return res.status(422).json(response("Fail", "Check-out data doesn't exist", find))
            }

            // Update model product_out dengan id yang sesuai
            await models.Product_Out.update(req.body.data, {
                where: {
                    id: req.params.id
                }
            })

            // Data yang akan ditampilkan di response
            const data = {
                "Old data": find,
                "New data": req.body.data
            }

            res.status(200).json(response("Success", "Checkout data is updated", data))

        } catch (error) {
            res.status(500).json(response("Fail", error.message))
        }
    }

    static async delete (req, res) {
        try {
            // Mengambil data dari model product_out berdasarkan parameter id
            const find = await models.Product_Out.findByPk(req.params.id)
            
            // Return fail jika find nya kosong
            if (!find) {
                return res.status(422).json(response("Fail", "Check-out data doesn't exist", find))
            }

            // Menghapus data dari model product_out dengan id yang sesuai
            await models.Product_Out.destroy({
                where: {
                    id: req.params.id
                }
            })
            
            res.status(200).json(response("Success", "Checkout data is deleted"))

        } catch (error) {
            res.status(500).json(response("Fail", error.message))
        }
    }
}

module.exports = Controller