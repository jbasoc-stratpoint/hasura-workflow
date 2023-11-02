const express = require('express');
const app = express();
const port = 4000;
const { Sequelize, Models, DataTypes } = require('sequelize');

app.get('/', (req, res) => {
  res.send('Hello, Node.js with Hasura on Docker!');
});


// Request Handler
app.post('/createItem', async (req, res) => {
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
  // try {
  //   await sequelize.authenticate();
  //   console.log('Connection has been established successfully.');
  // } catch (error) {
  //   console.error('Unable to connect to the database:', error);
  // }


  await sequelize.sync({ force: true });
  const createdItem = await Item.create({ id: 399 });
  console.log("Line 38", createdItem);
  // success
  return res.json({
    item: 1
  })
  /*
  // In case of errors:
  return res.status(400).json({
    message: "error happened"
  })
  */



});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
