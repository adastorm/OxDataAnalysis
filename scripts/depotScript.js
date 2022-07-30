//DEPOT STATS
//Total Per Depot Stats

const detpotCategories = [
	["Kayove Depot"],
	["Kiyovu Depot"],
	["LHS"],
	["Ngororero Depot"],
	["Tyazo Depot"],
];
const depotTotalNum = [
	[65673139],
	[1009400],
	[36522446],
	[1232100],
	[99796888.8],
];
const depotAverageNum = [
	[25896.34819],
	[19045.28302],
	[137820.5509],
	[17353.52113],
	[51869.48482],
];

const totalDepotData = {
	labels: detpotCategories,
	datasets: [
		{
			label: "Total Sale Per Depot",
			backgroundColor: "rgb()",
			borderColor: "rgb(255, 99, 132)",
			data: depotTotalNum,
		},
	],
};

const totalDepotConfig = {
	type: "bar",
	data: totalDepotData,
	options: {},
};

const TotalDepotChart = new Chart(
	document.getElementById("depotCategories"),
	totalDepotConfig
);

//Average per Depot

const averageDepotData = {
	labels: detpotCategories,
	datasets: [
		{
			label: "Total Sale Per Depot",
			backgroundColor: "rgb()",
			borderColor: "rgb(255, 99, 132)",
			data: depotAverageNum,
		},
	],
};

const averageDepotConfig = {
	type: "bar",
	data: averageDepotData,
	options: {},
};

const AverageDepotChart = new Chart(
	document.getElementById("averageDepotCategories"),
	averageDepotConfig
);
