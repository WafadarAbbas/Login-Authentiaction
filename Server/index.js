const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const userController = require('./controller/user');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const DB = 'mongodb://127.0.0.1:27017/Authusers';

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Database Connected');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

  app.post('/submit-form', (req, res) => {
    const formData = req.body;
  
    // Read existing data from data.json (if any)
    let existingData = [];
    try {
      existingData = JSON.parse(fs.readFileSync('data.json'));
    } catch (error) {
      console.error('Error reading data.json:', error);
      return res.status(500).send('Error reading existing data.');
    }
  
    // Add new form data
    existingData.push(formData);
  
    // Save updated data to data.json
    const jsonData = JSON.stringify(existingData, null, 2);
    fs.writeFile('data.json', jsonData, (err) => {
      if (err) {
        console.error('Error writing to data.json:', err);
        return res.status(500).send('Error saving form data.');
      }
  
      console.log('Form data saved to data.json:', formData);
      res.status(200).send('Form data saved successfully.');
    });
  });
  
  app.get('/get-form-data', (req, res) => {
    try {
      const dataFileContent = fs.readFileSync('data.json', 'utf-8');
      const formDataList = JSON.parse(dataFileContent);
      res.status(200).json(formDataList);
    } catch (error) {
      console.error('Error reading data.json:', error);
      res.status(500).send('Error fetching form data.');
    }
  });
  


app.post('/signup', userController.signup);
app.post('/signin', userController.signin);
app.post('/submit-otp', userController.submitotp);
app.post('/send-otp', userController.sendotp);

app.listen(5000, () => {
  console.log(`Backend Running At Port 5000`);
});
