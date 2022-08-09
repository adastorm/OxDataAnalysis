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
			backgroundColor: "#5DF564",
			borderColor: "rgb(255, 99, 132)",
			data: [18, 504, 384, 447, 492, 416, 275],
		},
		{
			label: "Kiyovu Depot",
			backgroundColor: "#F5C269",
			borderColor: "rgb(255, 99, 132)",
			data: [0, 10, 9, 7, 11, 11, 5],
		},
		{
			label: "LHS",
			backgroundColor: "#F57D51",
			borderColor: "rgb(255, 99, 132)",
			data: [9, 73, 48, 39, 43, 28, 25],
		},
		{
			label: "Ngororero Depot",
			backgroundColor: "#F53887",
			borderColor: "rgb(255, 99, 132)",
			data: [1, 5, 8, 25, 6, 16, 10],
		},
		{
			label: "Tayazo Depot",
			backgroundColor: "#65ABF5",
			borderColor: "rgb(255, 99, 132)",
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