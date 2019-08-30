const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/68cb0d83d87d5a8f5d8db843c7cd9ca2/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast