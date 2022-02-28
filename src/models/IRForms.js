const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("IrForms", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    projectId: {
      type: DataTypes.INTEGER,
      field: 'projectId',
    },
    formTitle: {
      type: DataTypes.STRING,
      field: 'formTitle',
    }
  }, {
    freezeTableName: true
  });
};
