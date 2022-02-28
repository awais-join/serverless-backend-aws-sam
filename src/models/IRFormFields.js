const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("IrFormFields", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fieldType: {
      type: DataTypes.STRING,
      field: 'fieldType',
    },
    fieldTitle: {
      type: DataTypes.STRING,
      field: 'fieldTitle',
    },
    fieldOrder: {
      type: DataTypes.INTEGER,
      field: 'fieldOrder',
    }
  }, {
    freezeTableName: true
  });
};
