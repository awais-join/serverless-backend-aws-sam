const { createField } = require("../lib/db");

/**
 * A simple example includes a HTTP post method to create field.
 */
exports.createFieldHandler = async (event) => {
    const body = JSON.parse(event.body);
    if (event.httpMethod !== 'POST') {
        throw new Error(`createField only accept GET method, you tried: ${event.httpMethod}`);
    }
    // All log statements are written to CloudWatch
    console.info('received:', event);

    const form = await createField(body);

    const response = {
        statusCode: 200,
        body: JSON.stringify(form)
    };

    // All log statements are written to CloudWatch
    console.info(`statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}
