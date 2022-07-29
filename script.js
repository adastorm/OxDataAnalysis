// COMMODITIES STATS
// Total Sales

const commodityCatergories = [
	"Animal Feed",
	"Banana plantain",
	"Beans",
	"Bell Pepper",
	"Butter",
	"Cabbages ",
	"Carrots ",
	"Cassava",
	"Clay ",
	"Coffee cherries",
	"Coffin",
	"Dried coffee",
	"Drinks",
	"Fertilizer ",
	"Fish",
	"Fruits",
	"Furniture",
	"Gas",
	"Maize Flour",
	"Meat",
	"Oranges ",
	"Others",
	"Paint",
	"Pineapples",
	"Potatoes ",
	"Rice",
	"Sand ",
	"Soap",
	"Soy ",
	"Sugar cane",
	"Sweet Potatoes",
	"Tea ",
	"Vegetables ",
	"Wood",
];

const totalSalesData = {
	labels: commodityCatergories,
	datasets: [
		{
			label: "Total Sale Value",
			backgroundColor: "rgb()",
			borderColor: "rgb(255, 99, 132)",
			data: [
                [22163193],
                [1970050],
				[30000],
				[1003800],
				[156000],
				[2786800],
				[5642150],
				[16085348],
				[259400],
				[6750425],
				[90000],
				[24504756.8],
				[492000],
				[11022544],
				[2935000],
				[23357720],
				[4350900],
				[427000],
				[4365400],
				[135000],
				[1751000],
				[44997777],
				[156500],
				[1186100],
				[11015360],
				[268800],
				[10000],
				[625000],
				[93500],
				[1117600],
				[1084500],
				[480000],
				[5966100],
				[6954250],
			],
		},
	],
};

const totalSalesConfig = {
	type: "bar",
	data: totalSalesData,
	options: {},
};

const TotalSalesChart = new Chart(
    document.getElementById("totalSalesChart"),
    totalSalesConfig
);





// CLIENT STATS

//Reoccuring Customers

const customerCategories = [["20+"],["10-20"], ["5-10"], ["2-5"], ["1"]];
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
    options: {
    },
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


