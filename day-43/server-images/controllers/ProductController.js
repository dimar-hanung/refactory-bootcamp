require('dotenv').config()
const cloudinary = require('cloudinary').v2
const cloudConfig = require('../config/cloudinaryConfig')
cloudinary.config(cloudConfig)

const { Product, User } = require("../models")
const response = require('../helpers/response')
const pagination = require('../helpers/pagination')

const attProduct = ['id', 'name', 'photo_url', 'stock', 'price']
const attUser = ['full_name', 'username', 'email', 'phone_number', 'role']

class ProductController {
  // uji coba routes berjalan dengan baik
  static async home(req, res) {
    return res.status(200).json(response("Success", "Sukses akses!", "Hai from Product Controller"))
  }

  static async getProduct(req, res) {
    const {
      id
    } = req.params

    const productget = await Product.findByPk(
      id, {
        attributes: attProduct,
        include: [{
          model: User,
          as: "supplier",
          attributes: attUser
        }]
      }
    )

    try {
      if (productget) {
        return res.status(200).json(response("Success", "Data product ditemukan!", productget))
      } else {
        return res.status(400).json(response("Failed!", "Data product tidak ditemukan!", ''))
      }
    } catch (error) {
      return res.status(404).json(response("Failed", error.message, ''))
    }
  }

  static async saveProduct(req, res){
    try {
      const {
        name,
        stock,
        price,
      } = req.body

      const user_id = req.user_id

      // ambil file dari body request
      const uploadFile = req.files.photo

      // upload pakai cloudinary
      const image = await cloudinary.uploader.upload(uploadFile.tempFilePath, (err, result) => {
        console.log(result, err);
      })

      // tambah product
      const saveProduct = await Product.create({
        name,
        stock,
        price,
        user_id: user_id,
        // ambil id dan url dari variabel image
        photo_id: image.public_id,
        photo_url: image.secure_url,
      })

      const datas = {
        'Nama Product': saveProduct.name,
        stock: saveProduct.stock,
        photo_id: saveProduct.photo_id,
        photo_url: saveProduct.photo_url,
        price: saveProduct.price,
        user_id: saveProduct.user_id
      }

      res.status(201).json(response("Success", "Berhasil tambah data product", datas))
    } catch (error) {
      res.status(404).json(response("Failed", error.message))
    }
  }

  static async getProducts(req, res){
    try {
      const count = await Product.count()

      const page = pagination({
        limit: req.query.limit,
        page: parseInt(req.query.page),
        count: count
      })

      const show = await Product.findAll({
        limit: page.limit,
        offset: page.offset,
        attributes: attProduct,
        include: [{
          model: User,
          as: "supplier",
          attributes: attUser,
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
      return res.status(400).json(response("Failed", err))
    }
  }

  static async updateProduct(req, res){
    const {
      id
    } = req.params

    const {
      name,
      stock,
      price,
      user_id
    } = req.body.data;

    const productUpdate = await Product.update({
      name,
      stock,
      price,
      user_id
    }, {
      where: {
        id: id
      }
    })

    const showProduct = await Product.findByPk(
      id, {
        attributes: attProduct,
        include: [{
          model: User,
          as: "supplier",
          attributes: attUser
        }]
      }
    )

    try {
      if (productUpdate) {
        return res.status(200).json(response("Success", "Sukses update data produk!", showProduct))
      } else {
        return res.status(400).json(response("Failed!", "Data data produk tidak ada!", "Kosong"))
      }
    } catch (error) {
      return res.status(400).json(response("Failed", error.message, "Kosong"))
    }
  }

  static async deleteProduct(req, res){
    const {
      id
    } = req.params

    const delProduct = await Product.destroy({
      where: {
        id: id
      }
    })

    try {
      if (delProduct) {
        return res.status(200).json(response("Success", "Sukses hapus data produk!", `ID : ${id}`))
      } else {
        return res.status(400).json(response("Failed", "Data produk tidak ada!", `ID : ${id}`))
      }
    } catch (error) {
      return res.status(400).json(response("Failed", error.message, "Kosong"))
    }
  }
}

module.exports = ProductController