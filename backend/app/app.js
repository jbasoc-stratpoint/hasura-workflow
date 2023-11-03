const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv'); 
const app = express();
app.use(cors());
app.use(express.json());

const { Sequelize, Models, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:postgres@postgres:5432/postgres')
const Item = sequelize.define("items", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  created: {
    type: DataTypes.DATE(6),
    allowNull: true 
  },
  updated: {
      type: DataTypes.DATE(6),
      allowNull: true
  }
});
const User = sequelize.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  created_at: {
    type: DataTypes.DATE(6),
    allowNull: true
  },
  updated_at: {
    type: DataTypes.DATE(6),
    allowNull: true
  },
  email_address: {
    type: DataTypes.STRING(255),
  },
  first_name: {
    type: DataTypes.STRING(255),
  },
  last_name: {
    type: DataTypes.STRING(255),
  },
  active_status: {
    type: DataTypes.STRING(255),
  }
});

app.get('/', (req, res) => {
  res.status(200).json({
    success: "This is welcome page"
  });
});


// Create User
app.post('/createUser', async (req, res) => {
  await sequelize.sync({ force: true });
  const userCreated = await User.create(req.body);
  console.log("User Created:", userCreated)
  // success
  return res.json(req.body)
});
  
// Create Item Request Handler
app.post('/createItem', async (req, res) => {
  console.log(req.body)
  await sequelize.sync({ force: true });
  const itemCreated = await Item.create(req.body);
  console.log("Item Created:", itemCreated)
  // success
  return res.json(req.body)
});

// // Get Item Request Handler
// app.get('/getItems', async (req, res) => {
//   console.log(req.body)
//   const { id } = req.body
//   await sequelize.sync({ force: true });
//   const getItem = await Item.findAll();
//   // success
//   return res.json(getItem)
// });

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
