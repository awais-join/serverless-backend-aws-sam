const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("ir_forms", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    project_id: {
      type: DataTypes.INTEGER,
      field: 'project_id',
    },
    form_title: {
      type: DataTypes.STRING,
      field: 'form_title',
    }
  }, {
    freezeTableName: true
  });
};
