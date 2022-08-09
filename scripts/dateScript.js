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


const totalDepotData = {
	labels: dateCategories,
	datasets: [
		{
			label: "Kayove Depot",
			backgroundColor: "rgba(255, 99, 132, 0.9)",
			borderColor: "rgba(255, 99, 132, 1)",
			data: [18, 504, 384, 447, 492, 416, 275],
		},
		{
			label: "Kiyovu Depot",
			backgroundColor: "rgba(54, 162, 235, 0.9)",
			borderColor: "rgba(54, 162, 235, 1)",
			data: [0, 10, 9, 7, 11, 11, 5],
		},
		{
			label: "LHS",
			backgroundColor: "rgba(255, 206, 86, 0.9)",
			borderColor: "rgba(255, 206, 86, 1)",
			data: [9, 73, 48, 39, 43, 28, 25],
		},
		{
			label: "Ngororero Depot",
			backgroundColor: "rgba(75, 192, 192, 0.9)",
			borderColor: "rgba(75, 192, 192, 1)",
			data: [1, 5, 8, 25, 6, 16, 10],
		},
		{
			label: "Tayazo Depot",
			backgroundColor: "rgba(153, 102, 255, 0.9)",
			borderColor: "rgba(153, 102, 255, 1)",
			data: [59, 304, 317, 368, 295, 337, 244],
		},
	],
};

const totalDepotConfig = {
	type: "bar",
	data: totalDepotData,
	options: {},
};

const DepotDateChart = new Chart(
	document.getElementById("dateDepotChart"),
	totalDepotConfig
);