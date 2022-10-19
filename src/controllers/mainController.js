const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const finalPrice = require('../utils/finalPrice')
const controller = {
	index: (req, res) => {
		res.render('index',{
			products,
			finalPrice
		})
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
