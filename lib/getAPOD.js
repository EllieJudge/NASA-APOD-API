const request = require('request');
const { promisify } = require('util');

const promisifiedRequest = promisify(request);


const getAPOD = async () => {
        let data = await promisifiedRequest({
        uri: `https://api.nasa.gov/planetary/apod?api_key=vPIRFhKFZUMfMsoUiqSg7kQ2RQzecfrdqL1meh7F`,
        json: true
    });
    return data.body;
}
getAPOD();

module.exports = getAPOD;