

var keys = [];
var counts = [];
var question=""
var members = []
$.get('/question?ques='+localStorage.getItem("enterForm")
, function(data, status){
  question = JSON.parse(data).question
  var options =JSON.parse(JSON.parse(data).options) 
  for(var k in options)
  {
    members.push(k);
    counts.push(options[k])
  }

var dataPoints = [
    { label: members[0], y: counts[0] },
    { label: members[1], y: counts[1] }
  ]

  var chartContainer = document.querySelector('#chartContainer');
  
  if(chartContainer) {
    var chart = new CanvasJS.Chart("chartContainer",
      {
        animationEnabled: true,
        theme: "theme2",
        data: [
        {
          type: "column",
          dataPoints: dataPoints
        }
        ]
      });
    chart.render();
  }
  chart.render();
  
  
     
});
