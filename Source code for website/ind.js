google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  var data = google.visualization.arrayToDataTable([
    ['State Code', 'State', 'Today confirmed','Today deaths'],     
    [ 'IN-UP','Uttar Pradesh', 4228,1],
    ['IN-MH','Maharashtra', 40925,20],
    ['IN-BR','Bihar', 3048,2],
    ['IN-WB','West Bengal', 18213,18],
    ['IN-MP','Madhya Pradesh', 1319,1],
    ['IN-TN','Tamil Nadu', 8981,8],
    ['IN-RJ','Rajasthan', 3300,2],
    ['IN-KA','Karnataka', 8449,4],
    ['IN-GJ','Gujarat', 5396,1],
    ['IN-AP','Andhra Pradesh', 840,1],
    ['IN-OR','Orissa', 2703,1],
    ['IN-TG','Telangana', 2295,3],
    ['IN-KL','Kerala', 5296,189],
    ['IN-JH','Jharkhand', 3825,8],
    ['IN-AS','Assam', 1167,2],
    ['IN-PB','Punjab', 2874,1],
    ['IN-CT','Chhattisgarh', 2828,3],
    ['IN-HR','Haryana', 3748,3],
    ['IN-JK','Jammu and Kashmir', 542,1],
    ['IN-UT','Uttarakhand', 814,0],
    ['IN-HP','Himachal Pradesh', 574,1],
    ['IN-TR','Tripura', 154,1],
    ['IN-ML','Meghalaya', 64,0],
    ['IN-MN','Manipur', 48,0],
    ['IN-NL','Nagaland', 8,0],
    ['IN-GA','Goa', 1432,2],
    ['IN-AR', 'Arunachal Pradesh', 26,0],
    ['IN-MZ','Mizoram', 852,3],
    ['IN-SK','Sikkim', 34,0],
    ['IN-DL','Delhi', 17335,9],
    ['IN-PY','Puducherry', 177,0],
    ['IN-CH','Chandigarh', 390,0],
    ['IN-AN','Andaman and Nicobar Islands', 41,0],
    ['IN-DN','Dadra and Nagar Haveli', 22,4],
    ['IN-DD','Daman and Diu', 0,0],
    ['IN-LD','Lakshadweep', 1,0]
  ]);

      var opts = {
        region: 'IN',
        domain:'IN',
        displayMode: 'regions',
        colorAxis: {colors: ['#ffbb00', '#ff8000', '#ff2600']},
        resolution: 'provinces',
        backgroundColor: '#000000',
        datalessRegionColor: '#000000',
        defaultColor: '#ff0000',
        width: 520, 
        height: 450
      };
      var geochart = new google.visualization.GeoChart(
          document.getElementById('visualization'));
      geochart.draw(data, opts);
    };
