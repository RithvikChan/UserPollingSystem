var pollMembers = document.querySelectorAll('.poll-member')

var members = []

var finaldata,success,dataType;
var keys = [];
var counts = [];
var question=""

$.get('/question?ques='+localStorage.getItem("formNumber")
, function(data, status){
  question = JSON.parse(data).question
  var options =JSON.parse(JSON.parse(data).options) 
  for(var k in options)
  {
    members.push(k);
    counts.push(options[k])
  }   
});


pollMembers.forEach((pollMember, index) => {
  pollMember.addEventListener('click', (event) => {
    // Calls the event handler
    handlePoll(members[index])
  }, true)
})

  // Sends a POST request to the server using axios
var handlePoll = function(member) {
  axios.post('/vote', {ques: question,member: member,id: localStorage.getItem("formNumber")})
  .then((data) => {
    console.log('data sent')
        console.log(data)
        var keys = [];
        var counts = [];
        var members = [];
        var options = JSON.parse(data.data.options)
        for(var k in options)
        {
          members.push(k);
          counts.push(options[k])
        }
        for (i = 0; i < (2); i++) { 
          var total = counts[0] + counts[1]
          document.getElementById("op"+(i+1)+"perc").style.width = calculatePercentage(total, counts[i])
          document.getElementById("op"+(i+1)+"perc").style.background = "#388e3c" 
        }
  })
}

  
    // Configure Pusher instance
    var pusher = new Pusher('3a2a219040583d8ee1b4', {
        cluster: 'mt1',
        encrypted: true
      });
      
      // Subscribe to poll trigger
      var channel = pusher.subscribe('poll');
      
      // Listen to vote event
      channel.bind('/vote', function() {
        alert("hello")
        console.log(data)
        var keys = [];
        var counts = [];
        var question=""
        question = JSON.parse(data).question
        var options =JSON.parse(JSON.parse(data).options) 
        for(var k in options)
        {
          members.push(k);
          counts.push(options[k])
        }
        for (i = 0; i < (data.length - 1); i++) { 
          var total = counts[0].votes + counts[1]
          document.getElementById(members[i]).style.width = calculatePercentage(total, counts[i])
          document.getElementById(members[i]).style.background = "#388e3c" 
        }
      });

      let calculatePercentage = function(total, amount){
        return (amount / total) * 100 + "%"
      }