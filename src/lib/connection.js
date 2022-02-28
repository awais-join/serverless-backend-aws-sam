const Sequelize = require('sequelize');

const IRFormsModel = require("../models/IRForms");
const IRFormFieldsModel = require("../models/IRFormFields");


const sequelize = new Sequelize.Sequelize(
  "irdb",
  "iradmin",
  "jfWlja8wxjPx82Rq2", {
    dialect: 'mysql',
    host: "ir-db.cmsqsmmvpmrh.us-west-1.rds.amazonaws.com",
    port: 3306,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
);

const Form = IRFormsModel(sequelize);
const Field = IRFormFieldsModel(sequelize);

Form.hasMany(Field, { foreignKey: 'formId' })

const Models = {Form, Field}

const connection = {}

const connectToDatabase = async() => {
  if (connection.isConnected) {
    console.log('=> Using existing connection.')
    return Models
  }

  await sequelize.sync()
  await sequelize.authenticate()
  connection.isConnected = true
  console.log('=> Created a new connection.')
  return Models
};

module.exports = {
    connectToDatabase,
    sequelize
}