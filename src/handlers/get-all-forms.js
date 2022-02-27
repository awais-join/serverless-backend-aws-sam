const { getAllForms } = require("../lib/db");

/**
 * A simple example includes a HTTP get method to get all forms
 */
exports.getAllFormsHandler = async (event) => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getAllItems only accept GET method, you tried: ${event.httpMethod}`);
    }
    // All log statements are written to CloudWatch
    console.info('received:', event);

    const forms = await getAllForms();

    const response = {
        statusCode: 200,
        body: JSON.stringify(forms)
    };

    // All log statements are written to CloudWatch
    console.info(`statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}
