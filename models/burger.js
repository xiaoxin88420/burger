const orm = require('../config/orm.js')

const model = {}

model.getAll = (cb) => {
  orm.selectAll('burgers', burgers => cb(burgers))
}

model.createOne = (burger, cb) => {
  orm.insertOne('burgers', burger, id => cb(id))
}

model.updateOne = (updates, where, cb) => {
  orm.updateOne('burgers', updates, where, () => cb())
}

model.deleteOne = (where, cb) => {
  orm.deleteOne('burgers', where, () => cb())
}

module.exports = model