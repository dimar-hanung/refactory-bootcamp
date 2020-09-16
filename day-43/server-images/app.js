require("dotenv").config();

const express = require("express");
const cors = require("cors");
// untuk upload ke cloudinary
const fileUpload = require("express-fileupload");

const app = express();

const port = process.env.PORT | 3000;

const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const productInRoute = require("./routes/product_in");
const authRoute = require("./routes/auth");
const productOutRoute = require("./routes/product_out");
const reportRoute = require("./routes/print");
const auth = require("./middleware/AuthMiddleware");
const taskScheduler = require("./helpers/taskScheduler");

//cors
app.use(cors());
// untuk cloudinary
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", auth, userRoute);
app.use("/api/v1/product", auth, productRoute);
app.use("/api/v1/in", auth, productInRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/out", auth, productOutRoute);
app.use("/api/v1/print", auth, reportRoute);

taskScheduler();

app.listen(port, () => console.log("Listened on port " + port));
