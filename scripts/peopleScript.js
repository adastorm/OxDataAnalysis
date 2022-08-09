// CLIENT STATS

//Reoccuring Customers

const customerCategories = [["20+"], ["10-20"], ["5-10"], ["2-5"], ["1"]];
const customerCategoriesData = [[50], [50], [82], [351], [467]];

const categoryData = {
	labels: customerCategories,
	datasets: [
		{
			label: "Total Sale Value",
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(255, 206, 86, 0.2)",
				"rgba(75, 192, 192, 0.2)",
				"rgba(153, 102, 255, 0.2)",
			],
			borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(75, 192, 192, 1)",
				"rgba(153, 102, 255, 1)",
			],
			data: customerCategoriesData,
			borderWidth: 5,
		},
	],
};

const customerCategoryConfig = {
	type: "bar",
	data: categoryData,
	options: {},
};

const CustomerCatergoriesChart = new Chart(
	document.getElementById("customerCategories"),
	customerCategoryConfig
);

//Pie Chart
const customerCategoryConfigPie = {
	type: "pie",
	data: categoryData,
	options: {},
};

const CustomerCatergoriesPieChart = new Chart(
	document.getElementById("customerCategoriesPie"),
	customerCategoryConfigPie
);





