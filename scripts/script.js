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

const vpkCommodityCatergories = [
	["Animal Feed"],
	["Cassava"],
	["Clay"],
	["Coffee Cherries"],
	["Dried Coffee"],
	["Fertilizer"],
	["Fruits"],
	["Furniture"],
	["Maize Flour"],
	["Others"],
	["Potatoes"],
	["Soy"],
	["Sweet Potatoes"]
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

const vpkSalesData = {
	labels: vpkCommodityCatergories,
	datasets: [
		{
			label: "Total Sale Value",
			backgroundColor: "rgb()",
			borderColor: "rgb(255, 99, 132)",
			data: [
				[19.83182233],
				[18.53846154],
				[35],
				[10.29761905],
				[15.74706349],
				[14.54901961],
				[15],
				[23.33333333],
				[15.3],
				[16.32307692],
				[26.1],
				[20],
				[20],
			],
		},
	],
};

const vpkSalesConfig = {
	type: "bar",
	data: vpkSalesData,
	options: {},
};

const vpkSalesChart = new Chart(
	document.getElementById("vpkSalesChart"),
	vpkSalesConfig
);

