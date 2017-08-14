sales =[
	 [1246406400000, 1000021],[1246492800000, 2545222],[1246579200000, 1101323],[1246665600000, 1724323],[1246752000000, 1111421],
	 [1246838400000, 3565521],[1246924800000, 212618],[1247011200000, 2313715],[1247097600000, 1235816],[1247184000000, 1329917],
	 [1247270400000, 2236917],[1247356800000, 1239176],[1247443200000, 1101379]
];
customdate= [
	 [1246406400000, 1000021],[1246492800000, 1345222],[1246579200000, 1101323],[1246665600000, 1724323],[1246752000000, 1111421],
];
customdate2= [
	 [1246406400000, -1000021],[1246492800000, -1345222],[1246579200000, -1101323],[1246665600000, -1724323],[1246752000000, -1111421],
];
sampledataSales = [ 
			 [1000021],[1345222],[1101323],[1724323],[1111421],
			 [3165521],[1212618],[2313715],[1235816],[1329917],
			 [2236917],[1239176],[1101379]
					]
dateCustom = [ 
		[1246406400000],[1246492800000],[1246579200000],[1246665600000],[1246752000000],[1246838400000],[1246924800000],
		[1247011200000],[1247097600000],[1247184000000],[1247270400000],[1247356800000],[1247443200000]
		]
Highcharts.chart('linegraph', {
	chart: {
		type: 'area'
	},
	title: {
		
		text: ''
	},
   
	xAxis: {
		type: 'datetime'
	},

	yAxis: {
		title: {
			text: null
		}
	},
	tooltip: {
		pointFormat: 'produced <b>${point.y:,.0f}</b><br/>',
		crosshairs: true,
		shared: true,
	},
	plotOptions: {
		area: {
			marker: {
				enabled: false,
				symbol: 'circle',
				radius: 5,
				states: {
					hover: {
						enabled: true
					}
				}
			}
		}
	},
	series: [{
		name: 'Sales',
		data: sales
	}]
});
// Stacked //
Highcharts.chart('stackedBar', {
							
	title: {
		text: ''
	},
   xAxis: {
	   type: 'datetime',
	   
   },
	yAxis: {
		allowDecimals: false,
		title: {
			text: ''
		}
	},
	credits: {
		enabled: false
	},
	 plotOptions: {
		column: {
			stacking: 'normal'
		}
	},

	series: [{
		type:'column',
		color:'#7049a3',
		name: 'John',
		data: customdate
	}, {
		color:'#71bde5',
		type:'column',
		name: 'Jane',
		data: customdate
	}, {
		color: '#e16070',
		type:'column',
		name: 'Joe',
		data: customdate2
	},{
		color: '#2cbf6d',
		type:'column',
		name: 'Increase',
		data: customdate
	},{
		color: '#efc663',
		type:'column',
		name: 'Lose',
		data: customdate
	},{
		color: 'black',
		type:'line',
		name: 'Sales',
		data: customdate
	}]
});