let controller = {}
const { emotions, categories, products, zodiacs } = require("../models/data")

controller.task1 = (req, res) => {
	res.locals.emotions = emotions;
	res.render("task1", {title: "Inspiring Quotes"});
};


controller.task2 = (req, res) => {
	let salary = isNaN(req.body.salary) ? 0 : parseFloat(req.body.salary);
	let s55 = (salary / 100) * 55;
	let s10 = (salary / 100) * 10;
	let s5 = (salary / 100) * 5;
	res.render("task2", {title: "Jars Saving", s55, s10, s5});
};

controller.task3 = (req, res) => {
	let category = req.query.category ? req.query.category : 0;
	res.locals.categories = categories;
	res.locals.products = products;

	if (category) {
		res.locals.products = products.filter((item) => item.category == category);
	}

	res.render("task3", {title: "TV Sales"});
};

controller.task4 = (req, res) => {
	res.locals.zodiacs = zodiacs;
	res.render("task4", {title: "Inspiring Quotes"});
};

controller.task4Details = (req, res) => {
	let name = req.params.name;
	let zodiac = zodiacs[0];
	let filters = zodiacs.filter((item) => item.name == name);
	if (filters.length) {
		zodiac = filters[0];
	}
	res.render("task4-details", {title: "Zodiac Characteristics", zodiac});
};

module.exports = controller;