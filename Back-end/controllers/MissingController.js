const Missing = require('../models/Missing')

const getMissingPersons = function (req, res) {
  Missing.find()
    .then((persons) => res.status(200).json(persons))
    .catch((error) => res.status(500).json({ message: 'Error fetching missing persons' }))
}

module.exports = {
  getMissingPersons
}