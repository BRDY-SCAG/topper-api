const PORT = 8081;
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const { response } = require('express');

const app = express();

const evoData = [];
const adventureData =[];
const commercialData = [];

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
		$('.build-row').each((index, element) => {
			const brand = $(element).find('.column__make strong').text().trim();

			const year = $(element).find('.column__year p:last-child').text().trim();
			const makeModel = $(element).find('.column__make strong').text().trim();
			const bed = $(element).find('.column__bed p:last-child').text().trim();
			const partNo = $(element).find('.column__partNo p:last-child').text().trim();
			const price = $(element).find('.column__price p:last-child').text().trim();
			const checkoutUrl = $(element).find('.column__action a:first-child').attr('href');

			const dataset = [{
				"Year": year,
				"Make/Model": makeModel,
				"Bed": bed,
				"PartNo": partNo,
				"Price": price,
				"URL": checkoutUrl
			}];
			evoData.push(dataset);
			//console.log(`Brand: ${brand}`);
  			//console.log(`Year: ${year}`);
  			//console.log(`Make/Model: ${makeModel}`);
  			//console.log(`Bed: ${bed}`);
  			//console.log(`Part Number: ${partNo}`);
  			//console.log(`Price: ${price}`);
			//console.log(`Url: ${checkoutUrl.trim()}`);	
  			//console.log('---');


		});
		console.log('Parsed Data', evoData);
		console.log(evoData.length);
		res.json(evoData)
	})
	
});

//adventr name for adventure product
app.get('/smart-cap/adventure', (req,res) => {
	axios
	.get("https://www.na.rsismartcap.com/products/smartcap-evo-a")
	.then(function(response) {
		const html = response.data;
		const $ = cheerio.load(html);
		$('.build-row').each((index, element) => {
			const brand = $(element).find('.column__make strong').text().trim();

			const year = $(element).find('.column__year p:last-child').text().trim();
			const makeModel = $(element).find('.column__make strong').text().trim();
			const bed = $(element).find('.column__bed p:last-child').text().trim();
			const partNo = $(element).find('.column__partNo p:last-child').text().trim();
			const price = $(element).find('.column__price p:last-child').text().trim();
			const checkoutUrl = $(element).find('.column__action a:first-child').attr('href');

			const dataset = [{
				"Year": year,
				"Make/Model": makeModel,
				"Bed": bed,
				"PartNo": partNo,
				"Price": price,
				"URL": checkoutUrl
			}];
			adventureData.push(dataset);
			/* console.log(`Brand: ${brand}`);
  			console.log(`Year: ${year}`);
  			console.log(`Make/Model: ${makeModel}`);
  			console.log(`Bed: ${bed}`);
  			console.log(`Part Number: ${partNo}`);
  			console.log(`Price: ${price}`);
			console.log(`Url: ${checkoutUrl.trim()}`);	
  			console.log('---'); */
		});
		console.log('Parsed Data', adventureData);
		console.log(adventureData.length);
		res.json(adventureData)
	})
})

//commercial name for commercial product
app.get('/smart-cap/commercial', (req,res) => {
	axios
	.get("https://www.na.rsismartcap.com/products/smartcap-evo-c")
	.then(function(response){
		const html = response.data;
		const $ = cheerio.load(html);
		$('.build-row').each((index, element) => {
			const brand = $(element).find('.column__make strong').text().trim();

			const year = $(element).find('.column__year p:last-child').text().trim();
			const makeModel = $(element).find('.column__make strong').text().trim();
			const bed = $(element).find('.column__bed p:last-child').text().trim();
			const partNo = $(element).find('.column__partNo p:last-child').text().trim();
			const price = $(element).find('.column__price p:last-child').text().trim();
			const checkoutUrl = $(element).find('.column__action a:first-child').attr('href');
			const dataset = [{
				"Year": year,
				"Make/Model": makeModel,
				"Bed": bed,
				"PartNo": partNo,
				"Price": price,
				"URL": checkoutUrl
			}];
			commercialData.push(dataset);
			/* console.log(`Brand: ${brand}`);
  			console.log(`Year: ${year}`);
  			console.log(`Make/Model: ${makeModel}`);
  			console.log(`Bed: ${bed}`);
  			console.log(`Part Number: ${partNo}`);
  			console.log(`Price: ${price}`);
			console.log(`Url: ${checkoutUrl.trim()}`);	
  			console.log('---'); */
		});
		console.log('Parsed Data', commercialData);
		console.log(commercialData.length);
		res.json(commercialData);
	})
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
