const PORT = 8000;
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const { response } = require('express');

const app = express();

const evoContent = []

//home
app.get('/', (req,res) => {
	res.json('Welcome to my topper api');
})

// evo name for evo product
app.get('/smart-cap/evo', (req,res) => {
	
	axios
	.get("https://www.na.rsismartcap.com/products/smartcap-evo-c")
	.then(function(response){
		const html = response.data;
		const $ = cheerio.load(html);
		const container = $('.container');

		const heading = container.find('p');

		container.children().each((index, element) => {

			const dataElement = $(element).find('p');

			const data =dataElement.length > 0 ? dataElement.text() : 'Data not found';

			console.log(`Data ${index + 1}`, data)
			evoContent.push(data);
		});
		res.json(evoContent)
	})
	
})

//adventr name for adventure product
app.get('/smart-cap/adventr', (req,res) => {
	axios.get("https://www.na.rsismartcap.com/products/smartcap-evo");
})

//commercial name for commercial product
app.get('/smart-cap/commercial', (req,res) => {
	axios.get("https://www.na.rsismartcap.com/products/smartcap-evo");
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
