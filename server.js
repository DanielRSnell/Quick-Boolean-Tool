const express = require("express");
const csv = require("csvtojson");

const file = "june.csv";

const app = express();

csv().fromFile(file).then((json) => {
	let companies = "";

	json.forEach((item) => {
		companies += `${item.Company} OR `
			.split("(1)")
			.join("")
			.split("(2)")
			.join("")
			.split("#1")
			.join("")
			.split("#2")
			.join("")
			.split("#3")
			.join("")
			.split("(3)")
			.join("");
	});

	console.log(companies);
});

app.listen(3000, () => "Server listening on port 3000");
