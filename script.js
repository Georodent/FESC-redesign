// Function for email submission
function address(){
  event.preventDefault()
  
  var email = document.email.eMail.value
  alert("You are all signed up for our mailing list!!!")
}

// this is for the header component
  var aboutApp = new Vue({
  el: '#app',
  data: { }
});

// this is for the footer component
  var app = new Vue({
  el: '#app1',
  data: { }
});

//  Beggining of API chart callback

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(getData);

      function drawBasic(freshData) {
        console.log("freshData", freshData)
        freshData.unshift(["Year", "Billion BTUs"])

        var data = google.visualization.arrayToDataTable(freshData);

        var options = {
          title: 'Energy Production in Florida',
          chartArea: {width: '50%'},
          width: 500,
          height: 300,
          backgroundColor: "darkgrey",
          colors: ['lightblue'],
          hAxis: {
            title: 'BTUs',
            minValue: 0
          }
        };

        var chart = new google.visualization.BarChart(document.getElementById('chart_div2'));

        chart.draw(data, options);
      }


      function getData(){
        // Create a new request object
        let request = new XMLHttpRequest()
        // TODO: URL to contact goes here
        let requestUrl = "https://api.eia.gov/series/?api_key=43fd391551b1a57ac02073fb37571ca7&series_id=SEDS.REPRB.FL.A"
        // Open a connection
        request.open('GET', requestUrl, true)
        // Callback for when the request completes
        request.onload = function(){
          let theActualData = JSON.parse(request.response).series[0].data

          drawBasic(theActualData)
        }
        // Callback for when there's an error
        request.error = function(err){
          console.log("error is: ", err)
        }
        // Send the request to the specified URL
        request.send()
      }
