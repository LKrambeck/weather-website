const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=222e80c55fe850ae75009a2777433552&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather services.', undefined)
        } else if (body.error) {
            callback('Unvalid longitude and latitude parameters.', undefined)
        } else {
            callback(undefined, 'Local time: ' + body.current.observation_time + '\nTimezone: ' + body.location.utc_offset + '\nTemperature: ' + body.current.temperature + ' celsius degress\nFeels like:' + body.current.feelslike + ' celsius degress\nHumidity: ' + body.current.humidity + '%\nPrecipitation: ' + body.current.precip + 'mm')
        }
    })
}

module.exports = forecast