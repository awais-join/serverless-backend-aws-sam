const { getAllFields } = require("../lib/db");

/**
 * A simple example includes a HTTP get method to get all fields.
 */
exports.getAllFieldsHandler = async (event) => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getAllItems only accept GET method, you tried: ${event.httpMethod}`);
    }
    // All log statements are written to CloudWatch
    console.info('received:', event);
    const formId = event.pathParameters.formId
    const fields = await getAllFields(formId);

    const response = {
        statusCode: 200,
        body: JSON.stringify(fields)
    };

    // All log statements are written to CloudWatch
    console.info(`statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}
