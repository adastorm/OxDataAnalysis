//DATE STATS
//Total Per Depot Stats

const dateCategories = [[1], [2], [3], [4], [5], [6], [7]];
const dateTotalNum = [[87], [1792], [2298], [3544], [4235], [4848], [3913]];

const totalDateData = {
	labels: dateCategories,
	datasets: [
		{
			label: "Total Sale Per Depot",
			backgroundColor: "rgb()",
			borderColor: "rgb(255, 99, 132)",
			data: dateTotalNum,
		},
	],
};

const totalDateConfig = {
	type: "bar",
	data: totalDepotData,
	options: {},
};

const TotalDatetChart = new Chart(
	document.getElementById("DateCategories"),
	totalDatetConfig
);

//Average per Depot

// const averageDepotData = {
// 	labels: detpotCategories,
// 	datasets: [
// 		{
// 			label: "Total Sale Per Depot",
// 			backgroundColor: "rgb()",
// 			borderColor: "rgb(255, 99, 132)",
// 			data: depotAverageNum,
// 		},
// 	],
// };

// const averageDepotConfig = {
// 	type: "bar",
// 	data: averageDepotData,
// 	options: {},
// };

// const AverageDepotChart = new Chart(
// 	document.getElementById("averageDepotCategories"),
// 	averageDepotConfig
// );
