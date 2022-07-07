const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require('./Routes/auth')
const postRoutes = require('./Routes/posts')

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)

const CONNECTION_URL = "mongodb+srv://Garvit:Garvit18@cluster0.wva2c.mongodb.net/Superrr?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running to port ${PORT}`);
    })
  )
  .catch((error) => console.log(error.message));
