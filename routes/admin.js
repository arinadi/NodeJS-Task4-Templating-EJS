const express = require('express')

const router = express.Router()

const users = []

// /admin/add-product => GET
router.get('/add-user', (req, res, next) => {
  res.render('add-user', {
    pageTitle: 'Add User',
    path: '/admin/add-user',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  })
})

// /admin/add-product => POST
router.post('/add-user', (req, res, next) => {
  users.push({ username: req.body.username })
  res.redirect('/')
})

exports.routes = router
exports.data = users
