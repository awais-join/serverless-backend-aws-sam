const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("IrForms", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    project_id: {
      type: DataTypes.INTEGER,
      field: 'projectId',
    },
    form_title: {
      type: DataTypes.STRING,
      field: 'formTitle',
    }
  }, {
    freezeTableName: true
  });
};
