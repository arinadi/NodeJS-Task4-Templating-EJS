const express = require('express')

const adminData = require('./admin')

const router = express.Router()

router.get('/', (req, res, next) => {
  const users = adminData.data
  res.render('users', {
    users: users,
    pageTitle: 'users',
    path: '/',
    activeShop: true,
    productCSS: true
  })
})

module.exports = router
