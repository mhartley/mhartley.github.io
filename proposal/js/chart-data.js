var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};


var pointConfig = {hitRadius: 2, radius: 3, hoverRadius: 5, hoverBorderWidth:2, borderWidth:0}

function numberRange (start, end) {
  return new Array(end - start).fill().map((d, i) => i + start);
}
	
	var primaryTurnoutData = {
			labels : ["16","14","12","10","08","06",].reverse(),
			datasets : [

				{
					label: "Democrats",
					fill:false,
					backgroundColor : "rgba(70,130,180,0.6)",
					borderColor : "rgba(70,130,180,1)",
					pointColor : "rgba(70,130,180,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(70,130,180,1)",
					data : [6749,5913,5365,7577,5687,3130].reverse()
				},
				{
					label: "Republican",
					fill:false,
					backgroundColor : "rgba(197,29,29,0.6)",
					borderColor : "rgba(197,29,29,1)",
					pointColor : "rgba(197,29,29,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(197,29,29,1)",
					data : [6462,7309,5004,6865,3748,2396].reverse()
				},
				{
					label: "Independent",
					fill:false,
					backgroundColor : "rgba(115, 118, 223,0.6)",
					borderColor : "rgba(115, 118, 223,1)",
					pointColor : "rgba(115, 118, 223,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(197,29,29,1)",
					data : [364,132,230,641,503,379].reverse()
				}
			]}
			
	
	var generalTurnoutData = {
			labels : ["06", "08", "10", "12", "14"],
			datasets : [
				{
					label: "Democrats",
					fill:false,
					backgroundColor : "rgba(70,130,180,0.6)",
					borderColor : "rgba(70,130,180,1)",
					pointColor : "rgba(70,130,180,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(70,130,180,1)",
					data : [11182,18342,13792,20467,16583]
				},
				{
					label: "Republican",
					fill:false,
					backgroundColor : "rgba(197,29,29,0.6)",
					borderColor : "rgba(197,29,29,1)",
					pointColor : "rgba(197,29,29,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(197,29,29,1)",
					data : [10948,16449,14040,18381,16514]
				},
				{
					label: "Independent",
					fill:false,
					backgroundColor : "rgba(115, 118, 223,0.6)",
					borderColor : "rgba(115, 118, 223,1)",
					pointColor : "rgba(115, 118, 223,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(197,29,29,1)",
					data : [8954,16667,11539,19625,15206]
				}
			]}


	var election2016Data = {
			labels : ["President", "Senator", "U.S. Rep", "State Rep"],
			datasets : [
				{
					label: "Democrats",
					fill:false,
					backgroundColor : "rgba(70,130,180,0.6)",
					borderColor : "rgba(70,130,180,1)",
					pointColor : "rgba(70,130,180,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(70,130,180,1)",
					data : [36715,37218,37509,35328]
				},
				{
					label: "Republican",
					fill:false,
					backgroundColor : "rgba(197,29,29,0.6)",
					borderColor : "rgba(197,29,29,1)",
					pointColor : "rgba(197,29,29,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(197,29,29,1)",
					data : [32906,31815,32989,34078]
				},
			]}



	var adExposureData = {   //radarchar
            labels: [ "Clinton","Bennet",
						"Sanders",
						"Glenn",
						"Trump"],
            datasets: [
            {
                label: "Negative",
             	backgroundColor : "rgba(255,255,255,0.8)",
				borderColor : "rgba(220,220,220,0.6)",
				pointColor : "rgba(220,220,220,0.6)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(197,29,29,1)",
                data: [875,0,0,223,1565]
            },{
                label: "Positive",
             	backgroundColor : "rgba(115, 118, 223,0.4)",
				borderColor : "rgba(115, 118, 223,1)",
				pointColor : "rgba(115, 118, 223,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(197,29,29,1)",
                data: [898,1998,1028,928,1969]
            }, ]
        }



var ageRange = numberRange(18,100);

var registrationBreakdownData= {
            labels: ageRange,
            datasets: [{
                label: 'DemWomen',
                backgroundColor: "rgba(70,130,180,0.6)",
                stack: 'Democratic',
                data: [19,120,124,144,152,178,191,204,199,221,205,226,215,232,237,238,259,263,236,269,233,258,240,253,265,263,281,277,298,271,274,268,242,282,281,260,283,294,309,280,300,294,579,273,285,295,265,263,250,247,254,233,199,137,164,165,136,120,132,111,117,91,88,66,71,81,57,53,57,43,39,41,40,26,23,16,7,5,17,4,4,3,2,2,1,1,2,1,]
            }, {
                label: 'DemMen',
                backgroundColor: "rgba(24, 82, 130,.6)",
                stack: 'Democratic',
                data: [10,95,102,99,147,124,143,162,193,182,160,169,187,195,184,197,177,192,203,186,172,178,177,191,190,218,198,219,214,288,175,178,166,204,215,228,245,190,214,256,213,226,342,233,247,196,200,196,180,149,181,157,124,109,86,115,107,86,82,70,65,58,62,54,61,49,53,55,42,33,16,23,17,10,6,5,5,4,1,1,1,5,]
            }, {
                label: 'IndWomen',
                backgroundColor: "rgba(115, 118, 223,0.6)",
                stack: 'Independent',
                data: [23,182,190,242,308,281,303,314,327,304,288,290,313,327,309,307,317,280,297,266,252,265,270,281,257,269,265,252,314,278,234,249,203,241,230,250,249,276,274,239,256,224,410,175,183,216,199,179,168,170,173,172,101,107,87,98,86,71,75,52,63,52,48,36,35,26,33,23,16,17,11,17,14,11,5,7,10,3,2,1,1,10,1,]
            }, {
                label: 'IndMen',
                backgroundColor: "rgba(67, 70, 160,.6)",
                stack: 'Independent',
                data: [31,187,234,225,274,254,336,295,331,302,325,338,345,354,309,327,324,338,351,277,281,305,264,293,341,319,323,362,363,310,309,357,319,283,296,252,282,327,273,304,226,251,469,263,253,289,209,267,200,185,181,223,114,103,110,109,97,69,73,62,55,46,52,44,41,30,28,21,11,19,9,14,15,7,9,5,3,5,5,1,3,1,1,]
            }, {
                label: 'RepWomen',
                backgroundColor: "rgba(197,29,29,0.6)",
                stack: 'Republican',
                data: [9,80,78,88,124,95,121,117,128,121,114,128,130,125,137,143,166,140,160,157,142,157,187,203,184,189,202,237,209,211,237,227,235,219,227,241,239,251,236,268,232,237,449,238,205,234,180,170,177,184,173,188,116,140,130,130,118,96,79,109,105,80,62,65,71,55,59,40,45,35,39,27,23,13,15,15,20,12,3,1,3,1,19,1,]
            }, {
                label: 'RepMen',
                backgroundColor: "rgba(140, 12, 12, .6)",
                stack: 'Republican',
                data: [12,71,92,86,128,111,130,111,125,157,114,134,146,170,163,172,161,165,154,154,176,176,187,192,227,189,241,216,262,299,256,264,236,263,282,314,320,307,323,299,312,267,471,253,224,203,216,205,181,172,173,214,128,160,122,136,93,101,73,81,85,53,80,57,50,55,47,20,38,22,33,10,16,11,11,11,9,2,2,1,2,1,1,]
            }, 
            ]
        };



var voterPrimaryBreakdown = {
	labels: ageRange,
	datasets:[ {
		label: "2014",
     	backgroundColor : "rgba(220,220,220,0.8)",
		borderColor : "rgba(220,220,220,1)",
		pointColor : "rgba(220,220,220,1)",
		pointStrokeColor : "#fff",
		pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(197,29,29,1)",
	    data: [16,45,43,44,56,43,51,55,38,37,52,63,71,57,76,62,66,72,76,87,85,92,118,125,132,119,175,173,169,164,157,200,249,255,264,281,293,320,319,322,719,385,366,360,367,359,357,360,401,419,332,315,301,317,288,251,226,251,243,190,188,152,163,160,154,113,98,81,81,53,46,33,34,24,14,12,10,5,4,3,18,1,1,1,1,]
		},
	{
		label: "2016",
     	backgroundColor : "rgba(115, 118, 223,0.8)",
		borderColor : "rgba(115, 118, 223,1)",
		pointColor : "rgba(115, 118, 223,1)",
		pointStrokeColor : "#fff",
		pointHighlightFill : "#fff",
		pointHighlightStroke : "rgba(197,29,29,1)",
	    data: [6,53,54,51,58,54,37,44,51,60,60,51,65,71,67,64,72,68,76,77,88,90,99,90,135,108,134,144,142,183,165,150,173,198,227,279,269,278,325,300,338,339,675,370,380,390,392,357,362,380,422,440,345,316,300,303,286,234,227,232,256,188,178,146,168,146,136,107,108,63,65,44,45,30,27,23,14,11,4,5,3,2,2,2,],
        },]
	};


	//primary election results	
	var barChartData = {
			labels : ["2010", "2014"],
			datasets : [
				{
					backgroundColor : "rgba(70,130,180,0.5)",
					borderColor : "70,130,180,0.8)",
					highlightFill: "rgba(70,130,180,0.75)",
					highlightStroke: "rgba(70,130,180,1)",
					data : [6968,5666]
				},
				{
					backgroundColor : "rgba(197,29,29, 0.6)",
					borderColor : "rgba(197,29,29, 1)",
					highlightFill : "rgba(197,29,29, 0.75)",
					highlightStroke : "rgba(197,29,29, 1)",
					data : [4964,6605]
				}
			]
	
		}

	var pieData = [
				{
					value: 300,
					color: "#8082e4",
					highlight: "#7376df",
					label: "Value 1"
				},
				{
					value: 50,
					color: "#a0a0a0",
					highlight: "#999999",
					label: "Value 2"
				},
				{
					value: 100,
					color:"#dfdfdf",
					highlight: "#cccccc",
					label: "Value 3"
				},
				{
					value: 120,
					color: "#f7f7f7",
					highlight: "#eeeeee",
					label: "Value 4"
				}

			];
			
	var doughnutData = [
				{
					value: 300,
					color: "#8082e4",
					highlight: "#7376df",
					label: "Value 1"
				},
				{
					value: 50,
					color: "#a0a0a0",
					highlight: "#999999",
					label: "Value 2"
				},
				{
					value: 100,
					color:"#dfdfdf",
					highlight: "#cccccc",
					label: "Value 3"
				},
				{
					value: 120,
					color: "#f7f7f7",
					highlight: "#eeeeee",
					label: "Value 4"
				}
			];
			
	var radarData = {
	    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
	    datasets: [
	        {
	            label: "My First dataset",
	            backgroundColor: "rgba(70,130,180,0.2)",
	            strokeColor: "rgba(70,130,180,1)",
	            pointColor: "rgba(70,130,180,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(70,130,180,1)",
	            data: [65, 59, 90, 81, 56, 55, 40]
	        },
	        {
	            label: "My Second dataset",
	            backgroundColor : "rgba(197,29,29, 0.6)",
	            strokeColor : "rgba(197,29,29, 1)",
	            pointColor : "rgba(197,29,29, 1)",
	            pointStrokeColor : "#fff",
	            pointHighlightFill : "#fff",
	            pointHighlightStroke : "rgba(197,29,29, 1)",
	            data: [28, 48, 40, 19, 96, 27, 100]
	        }
	    ]
	};
	var polarData = [
		    {
		    	value: 300,
		    	color: "#8082e4",
		    	highlight: "#7376df",
		    	label: "Value 1"
		    },
		    {
		    	value: 140,
		    	color: "#a0a0a0",
		    	highlight: "#999999",
		    	label: "Value 2"
		    },
		    {
		    	value: 220,
		    	color:"#dfdfdf",
		    	highlight: "#cccccc",
		    	label: "Value 3"
		    },
		    {
		    	value: 250,
		    	color: "#f7f7f7",
		    	highlight: "#eeeeee",
		    	label: "Value 4"
		    }
		
	];

