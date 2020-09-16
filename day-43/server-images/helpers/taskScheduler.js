require("dotenv").config()
const createPdf = require("../helpers/createPdf")
const transporter = require("../config/mailConfig")
const models = require("../models")
const cron = require("node-cron")
const sequelize = require("sequelize")

module.exports = () => {
    const task = cron.schedule("0 0 1 * * *", async () => {
        const month = new Date().getMonth() //7
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const { count: count_admin, rows:rows_admin } = await models.User.findAndCountAll({ where: { role: "admin" } })
        const name = "Product Activity Monthly Report";
        const { count: count_in, rows: rows_in } = await models.Product_In.findAndCountAll( { 
            where: sequelize.where(sequelize.fn("month", sequelize.col("date")), month),
            include: models.Product
        })
        const { count: count_out, rows: rows_out } = await models.Product_Out.findAndCountAll( { 
            where: sequelize.where(sequelize.fn("month", sequelize.col("date")), month),
            include: models.Product
        })
        createPdf({ 
            count_in, 
            rows_in, 
            count_out, 
            rows_out, 
            name: name, 
            month: monthNames[(month - 1)],
            type: "all",
            note: true
        })
        for (let i = 0; i < count_admin; i++) {
            const mailOptions = {
                from: process.env.GMAIL_USERNAME,
                to: rows_admin[i].email,
                subject: `[Monthly Notification] of ${monthNames[month]}`,
                attachments: [{
                    filename: "Monthly Report",
                    path: `././asset/pdf/${monthNames[(month - 1)].toLowerCase()}-${name.toLowerCase()}.pdf`,
                    contentType: "application/pdf"
                }]
            }
            transporter.sendMail(mailOptions)
        }
    })
    task.start()
}