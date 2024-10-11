const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');

const homeRoute = require('./routes/home');
const authRoute = require('./routes/auth');
const dashboardRoute = require('./routes/dashboard');

const app = express();


const dbUrl = "mongodb://localhost:27017/mydb";


mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser()); // Use cookie-parser middleware
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', homeRoute);
app.use('/auth', authRoute);
app.use('/dashboard', dashboardRoute);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
