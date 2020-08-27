const orm = require('../config/orm.js')

const model = {}

model.getAll = (cb) => {
  orm.selectAll('burgers', burgers => cb(burgers))
}

model.createOne = (burger) => {
  orm.insertOne('burgers', burger, id => cb(id))
}

model.updateOne = (update, where, cb) => {
  orm.updateOne('burgers', updates, where, () => cb())
}

module.exports = model