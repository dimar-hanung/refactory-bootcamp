require('dotenv').config()

const {
  Product,
  Product_In,
  User
} = require("../models")
const response = require('../helpers/response')
const pagination = require("../helpers/pagination")

const attProductIn = ['date', 'total',]
const attProduct = ['id', 'name', 'photo_url', 'stock', 'price']
const attUser = ['full_name', 'username', 'email', 'phone_number']

class ProductInController {
  // uji coba routes berjalan dengan baik
  static async home(req, res){
    return res.status(200).json(response("Success", "Sukses akses!", "Hai from ProductIn Controller"))
  }

  static async getAll(req, res){
    try {
      const count = await Product_In.count()

      const page = pagination({
        limit: req.query.limit,
        page: parseInt(req.query.page),
        count: count
      })

      const show = await Product_In.findAll({
        limit: page.limit,
        offset: page.offset,
        attributes: attProductIn,
        include: [{
          model: Product,
          attributes: attProduct,
          include: [{
            model: User,
            as: "supplier",
            attributes: attUser
          }]
        }]
      })

      const datas = {
        data: show,
        totalItems: page.totalItems,
        totalPages: page.totalPages,
        currentPage: page.currentPage
      }
      res.status(200).json(response("Success", "Berhasil tampil data", datas))
    } catch (err) {
      return res.status(400).json(response("Failed", err.message))
    }
  }

  static async get(req, res){
    const {
      id
    } = req.params
    const productinget = await Product_In.findByPk(
      id, {
        attributes: attProductIn,
        include: [{
          model: Product,
          attributes: attProduct,
          include: [{
            model: User,
            as: "supplier",
            attributes: attUser
          }]
        }]
      }
    )

    try {
      if (productinget) {
        return res.status(200).json(response("Success", "Data product ditemukan!", productinget))
      } else {
        return res.status(400).json(response("Failed!", "Data product tidak ditemukan!", ''))
      }
    } catch (error) {
      return res.status(404).json(response("Failed", error.message, ''))
    }
  }

  static async save(req, res){
    try {
      const { total, product_id } = req.body.data

      const findProduct = await Product.findByPk(product_id)

      const saveIn = await Product_In.create({
        product_id,
        date: new Date(),
        total
      })

      const datas = {
        product_id: saveIn.product_id,
        date: saveIn.date,
        total: saveIn.total
      }
      
      if (findProduct) {
        await Product.update({
          stock: findProduct.stock + total
        }, {
          where: { id: findProduct.id }
        })
        res.status(201).json(response("Success", "Berhasil tambah data", datas))
      } else {
        res.status(400).json(response("Failed!", "Id tidak ditemukan!"))
      }
    } catch (error) {
      res.status(404).json(response("Failed!", error.message))
    }
  }

  static async update(req, res){
    const { id } = req.params
    const { product_id, total } = req.body.data

    const inUpdate = await Product_In.update({
      product_id,
      date: new Date(),
      total
    }, {
      where: { id: id }
    })

    const showIn = await Product_In.findByPk(
      id, {
        attributes: attProductIn,
        include: [{
          model: Product,
          attributes: attProduct,
          include: [{
            model: User,
            as: "supplier",
            attributes: attUser
          }]
        }]
      }
    )

    try {
      if (inUpdate) {
        return res.status(200).json(response("Success", "Sukses update data masuk!", showIn))
      } else {
        return res.status(400).json(response("Failed!", "Data masuk tidak ada!", "Kosong"))
      }
    } catch (error) {
      return res.status(400).json(response("Failed", error.message, "Kosong"))
    }
  }

  static async delete(req, res){
    // mengambil param
    const { id } = req.params

    // hapus data
    const delIn = await Product_In.destroy({
      where: { id: id }
    })

    try {
      if (delIn) {
        return res.status(200).json(response("Success", "Sukses hapus data produk in!", `ID : ${id}`))
      } else {
        return res.status(400).json(response("Failed", "Data produk in tidak ada!", `ID : ${id}`))
      }
    } catch (error) {
      return res.status(400).json(response("Failed", error.message, "Kosong"))
    }
  }
}

module.exports = ProductInController