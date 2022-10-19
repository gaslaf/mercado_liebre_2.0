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
		//res.send(req.query)
		let result = products.filter(product => product.name.toLowerCase().trim().includes(req.query.keywords.toLowerCase().trim()));
		res.render('results',{
			products : result,
			finalPrice,
			busqueda : req.query.keywords.trim()
		})
	},
};

module.exports = controller;
