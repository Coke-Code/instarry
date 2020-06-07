const { Router } = require('express')

const router = Router()
const models = require('../models')

/* GET users listing. */
router.get('/users', function (req, res, next) {
  models.User.findAll().then((users) => {
    res.json({ users })
  })
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0) {
    models.User.findOne({
      where: id
    }).then((users) => {
      res.json({ users })
    })
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
