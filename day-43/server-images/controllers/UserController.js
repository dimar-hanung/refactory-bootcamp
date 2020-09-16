require('dotenv').config()
const bcrypt = require("bcrypt");
const { User } = require("../models")
const pagination = require("../helpers/pagination")

// memanggil validasi data user required field maka error di login, register, maupun post user
const {
  registerValidation
} = require("../helpers/validation");
const response = require('../helpers/response')

// atrributes tertentu yang ditampilkan di postman
const attUser = ['id', 'full_name', 'username', 'email', 'phone_number', 'role']

class UserController {
  // uji coba routes berjalan dengan baik
  static async home(req, res) {
    return res.status(200).json(response("Success", "Sukses akses!", "Hai from User Controller"))
  }

  // Ambil semua user
  static async getUsers(req, res) {
    try {
      const count = await User.count()

      const page = pagination({
        limit: req.query.limit,
        page: parseInt(req.query.page),
        count: count
      })

      const show = await User.findAll({
        limit: page.limit,
        offset: page.offset,
        attributes: attUser
      })

      const datas = {
        data: show,
        totalItems: page.totalItems,
        totalPages: page.totalPages,
        currentPage: page.currentPage
      }
      res.status(200).json(response("Success", "Berhasil tampil data", datas))
    } catch (err) {
      return res.status(400).json(response("Failed", err.message, datas))
    }
  }

  // Ambil semua user by id
  static async getUser(req, res) {
    const {
      id
    } = req.params

    const userget = await User.findByPk(
      id, {
        attributes: attUser
      }
    )

    try {
      if (userget) {
        return res.status(200).json(response("Success", "Data supplier ditemukan!", userget))
      } else {
        return res.status(400).json(response("Failed!", "Data suplier tidak ditemukan!", 'Kosong'))
      }
    } catch (error) {
      return res.status(404).json(response("Failed", error.message, 'Kosong!'))
    }
  }

  static async saveUser(req, res) {
    const {
      full_name,
      username,
      password,
      email,
      phone_number,
      role
    } = req.body.data

    // Validasi user
    const {
      error
    } = registerValidation(req.body.data)
    if (error) return res.status(400).json(response("Failed!", error.details[0].message, ""))

    // cek apakah alamat email, username, dan phone_number sudah ada
    const emailExist = await User.findOne({
      where: {
        email: email
      }
    })
    const usernameExist = await User.findOne({
      where: {
        username: username
      }
    })
    const phoneExist = await User.findOne({
      where: {
        phone_number: phone_number
      }
    })

    // Hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt)

    try {
      if (usernameExist) return res.status(404).json(response("Failed!", "Username sudah terdaftar!", ""))
      else if (emailExist) return res.status(404).json(response("Failed!", "Email sudah terdaftar!", ""))
      else if (phoneExist) return res.status(404).json(response("Failed!", "No. Telp sudah terdaftar!", ""))
      else {
        // simpan data user
        const savedUser = await User.create({
          full_name,
          username,
          password: hashedPassword,
          salt,
          email,
          phone_number,
          role: "user"
        })

        // tampilkan data yang ditambahkan
        const datas = {
          full_name: savedUser.full_name,
          username: savedUser.username,
          email: savedUser.email,
          phone_number: savedUser.phone_number,
          role: savedUser.role
        }

        res.status(201).json(response("Success", "Berhasil tambah data user", datas))
      }
    } catch (error) {
      return res.status(500).json(response("Failed", error.message, ""))
    }
  }

  static async updateUser(req, res) {
    const {
      id
    } = req.params

    const {
      full_name,
      username,
      email,
      phone_number,
      password
    } = req.body.data;

    const userUpdate = await User.update({
      full_name,
      username,
      email,
      phone_number
    }, {
      where: {
        id: id
      }
    })

    const showUser = await User.findByPk(
      id, {
        attributes: attUser
      }
    )

    try {
      if (password) {
        return res.status(400).json(response("Failed", "Update password hanya bisa oleh Admin!", "Kosong"))
      } else if (userUpdate) {
        return res.status(200).json(response("Success", "Sukses update user!", showUser))
      } else {
        return res.status(400).json(response("Failed!", "Data user tidak ada!", "Kosong"))
      }
    } catch (error) {
      return res.status(400).json(response("Failed", error.message, "Kosong"))
    }
  }

  static async deleteUser(req, res) {
    const {
      id
    } = req.params

    const delUser = await User.destroy({
      where: {
        id: id
      }
    })

    try {
      if (delUser) {
        return res.status(200).json(response("Success", "Sukses hapus data user!", `ID : ${id}`))
      } else {
        return res.status(400).json(response("Failed", "Data tidak user tidak ada!", `ID : ${id}`))
      }
    } catch (error) {
      return res.status(400).json(response("Failed", error.message, "Kosong"))
    }
  }
}

module.exports = UserController