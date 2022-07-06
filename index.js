require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index');
const errorsMiddleware = require('./middlewares/errors-middleware');
const sequelize = require('./utils/database');


const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);
app.use(errorsMiddleware);

const start = async () => {
  try {
    await sequelize.sync({ force: false });
    // await mongoose.connect(process.env.DB_URL, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    app.listen(PORT, () => console.log(`Server started on the port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
} 

start()