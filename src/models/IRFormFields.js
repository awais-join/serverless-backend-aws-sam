const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("ir_form_fields", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    field_type: {
      type: DataTypes.STRING,
      field: 'field_type',
    },
    field_title: {
      type: DataTypes.STRING,
      field: 'field_title',
    },
    field_order: {
      type: DataTypes.INTEGER,
      field: 'field_order',
    }
  }, {
    freezeTableName: true
  });
};
