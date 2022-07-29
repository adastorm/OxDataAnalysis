//DATE STATS
//Total Per Depot Stats

const dateCategories = [["Sunday"], ["Monday"], ["Tuesday"], ["Wednesday"], ["Thursday"], ["Friday"], ["Saturday"]];
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
	data: totalDateData,
	options: {},
};

const TotalDatetChart = new Chart(
	document.getElementById("dateCategories"),
	totalDateConfig
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
