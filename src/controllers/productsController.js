const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = require('../utils/toThousand');
const finalPrice = require('../utils/finalPrice')


const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products',{
			products,
			finalPrice 
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let producto = products.find(product => product.id === +req.params.id)
		return res.render('detail',{
			producto,
			products,
			finalPrice,
		})
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;