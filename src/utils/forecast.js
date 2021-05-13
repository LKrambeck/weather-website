const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=222e80c55fe850ae75009a2777433552&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather services.', undefined)
        } else if (body.error) {
            callback('Unvalid longitude and latitude parameters.', undefined)
        } else {
            callback(undefined, (
                'Forecast: ' + body.current.weather_descriptions[0] +
                '\nTemperature: ' + body.current.temperature + ' °C' +
                '\nFeels like: ' + body.current.feelslike + ' °C' +
                '\nHumidity: ' + body.current.humidity + '%' +
                '\nPrecipitation: ' + body.current.precip + ' mm' +
                '\n\nLocal time: ' + body.location.localtime +
                '\nTimezone: ' + body.location.utc_offset + ' UTC'
            ))
        }
    })
}

module.exports = forecast