const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibGtyYW1iZWNrIiwiYSI6ImNrb2Ezb2JxMjE3OHEydXB3MnVhbG9ib3gifQ.6q_xBWLJ-ylKqoojMpf29A&limit=1'

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (!body.features[0]) {
            callback('Unvalid location parameters.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode