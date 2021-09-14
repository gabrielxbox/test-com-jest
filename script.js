
//const fetch = require('node-fetch')

const getPeople = (fetch) => {
    return fetch('https://swapi.dev/api/people')
    .then(res => res.json())
    .then(data => {
        return {
            count: data.count,
            results: data.results
        }
    }).catch(err => err)
}

const isCity = (city, db) => {
    return db.includes(city)
}

module.exports =
    {
      getPeople,
      isCity
    }