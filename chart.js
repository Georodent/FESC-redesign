// Beginning of Stepped Area chart
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year',  'Consumption of Electricity'],
          ['2016',804283],
          ['2015',803865],
          ['2014',771379],
          ['2013',757189],
          ['2012',752941],
          ['2011',768009],
          ['2010',788887],
          ['2009',766848],
          ['2008',771702],
          ['2007',788461],
          ['2006',778685],
          ['2005',767622],
          ['2004',745810],
          ['2003',741696],
          ['2002',718136],
          ['2001',684966],
          ['2000',668216],
          ['1999',638966],
          ['1998',639254],
          ['1997',597240],
          ['1996',586291],
          ['1995',571483],
          ['1994',544365],
          ['1993',521176],
          ['1992',501598],
          ['1991',499299],            
          ['1990',489741],
          ['1989',472473],
          ['1988',444382],
          ['1987',417862],
          ['1986',398095],
          ['1985',379307],
          ['1984',353246],
          ['1983',329216],
          ['1982',315744],
          ['1981',317921],
          ['1980',309694],
          ['1979',295551],
          ['1978',289031],
          ['1977',270767],
          ['1976',252408],
          ['1975',242096],
          ['1974',235482],
          ['1973',237104],
          ['1972',209665],
          ['1971',188564],
          ['1970',171346],
          ['1969',153032],
          ['1968',135509],
          ['1967',119314],
          ['1966',108610],
          ['1965',95878],              
          ['1964',87016],
          ['1963',78258],
          ['1962',71216],
          ['1961',62705],
          ['1960',57344]

          ]);

        var options = {
          title: 'Consumption of Electricity in Florida from 1960-2016',
          vAxis: {title: 'FLORIDA ENERGY'},
          isStacked: true,
    // installed two options, backgroundColor, and colors
          backgroundColor: 'darkgray',
          colors: ['lightblue'],
          width: 500,
          height: 300,
        };

        var chart = new google.visualization.SteppedAreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

      google.charts.setOnLoadCallback(getData);

      function drawBasic(freshData) {
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

