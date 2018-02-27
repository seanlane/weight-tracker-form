function doGet(e) {
  return HtmlService.createTemplateFromFile("index.html")
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

// get the chart data to pass through to front-end
function getChartData() {
  var ss = SpreadsheetApp.openById("XXXXXXXXXX"); // Replace this with the Google Sheet ID to use.
  var sheet = ss.getActiveSheet();  
  var values = sheet.getRange(2, 1, sheet.getLastRow()-1, 2).getValues();
    var data = [];
  for (var i=0; i < values.length; i++) {
    var obj = {
      'timestamp': values[i][0].toJSON(),
      'weight': values[i][1]
    };
    data.push(obj);
  }
  return data;
}