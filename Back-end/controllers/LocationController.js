const Location = require('../models/Location')

const getLocations = function (req, res) {
  Location.find()
    .then((locations) => res.status(200).json(locations))
    .catch((error) => res.status(500).json({ message: 'Error fetching locations' }))
}

module.exports = {
  getLocations
}
