const { connectToDatabase } = require("./connection");

module.exports.createForm = async (form) => {
  try {
    const { Form } = await connectToDatabase();
    return await Form.create(form)
  } catch (error) {
    console.log('Exception occurred in createForm in db.js: ', error);
  }
}

module.exports.createField = async (field) => {
  try {
    const { Field } = await connectToDatabase();
    return await Field.create(field)
  } catch (error) {
    console.log('Exception occurred in createField in db.js: ', error);
  }
}

module.exports.getAllForms = async () => {
  try {
    const { Form } = await connectToDatabase();
    return await Form.findAll();
  } catch (error) {
    console.log('Exception occurred in getAllForms in db.js: ', error);
  }
}

module.exports.getAllFields = async (formId) => {
  try {
    const {Field} = await connectToDatabase();
    return await Field.findAll({where: {formId: formId}});;
  } catch (error) {
    console.log('Exception occurred in getAllFields in db.js: ', error);
  }
}
