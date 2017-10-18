(function () {
    var myConnector = tableau.makeConnector();

/*
	Function:getSchema
    The getSchema function takes a schemaCallback parameter which is defined by the WDC API.
    The cols variable contains an array of JavaScript objects, where each object defines a single column in our table. In this example, there are columns for magnitude, title, latitude, and longitude. Note that for each column you can specify additional options. For example, the alias defines a friendly name that can appear in Tableau and the columnRole determines whether a field is a measure or a dimension. For more options, see the API reference.
    The tableInfo variable defines the schema for a single table and contains a JavaScript object. Here, the value of the columns property is set to the cols array defined earlier.
    The schemaCallback gets called when the schema is defined. The schemaCallback takes an array of table objects. In this case, there is only table object (the tableInfo object defined above).
*/
	myConnector.getSchema = function (schemaCallback) {
		tableau.log("myConnector.getSchema: started");
    var cols = [
		{ id : "id", alias : "id", dataType : tableau.dataTypeEnum.string },
        { id : "assetName", alias : "assetName", dataType : tableau.dataTypeEnum.string },
		{ id : "assetAbbrevation", alias : "assetAbbrevation", dataType : tableau.dataTypeEnum.string },
		{ id : "officialNumber", alias : "officialNumber", dataType : tableau.dataTypeEnum.string },
		{ id : "date", alias : "date", dataType : tableau.dataTypeEnum.datetime },
		{ id : "statusCode", alias : "statusCode", dataType : tableau.dataTypeEnum.bool },
		{ id : "isOnline", alias : "isOnline", dataType : tableau.dataTypeEnum.bool },
		{ id : "ipAddress", alias : "ipAddress", dataType : tableau.dataTypeEnum.string },
		{ id : "provider", alias : "provider", dataType : tableau.dataTypeEnum.string }
    ];
	
	var colSensors = [
		{ id : "id", alias : "id", dataType : tableau.dataTypeEnum.string },
		{ id : "sensorGroup", alias : "sensorGroup", dataType : tableau.dataTypeEnum.string},
		{ id : "sensorName", alias : "sensorName", dataType : tableau.dataTypeEnum.string},
		{ id : "value", alias : "sensorGroup", dataType : tableau.dataTypeEnum.float},
		{ id : "uom", alias : "uom", dataType : tableau.dataTypeEnum.string}
	];

    var tableInfo = {
        id : "bsmFeed",
        alias : "List of Boat docs",
        columns : cols
    };
	
	var tableSensorInfo = {
			id : "bsmFeedSensors",
			alias : "List of Sensor values for each boat",
			columns : colSensors
	}
	
	tableau.log("myConnector.getSchema: calling callback and passing tableInfo into callback.");
    schemaCallback([tableInfo,tableSensorInfo]);
	tableau.log("myConnector.getSchema: completed");
};


/*
	Function: getData
    The getData function takes two parameters: table and doneCallback. The table parameter is an object defined by the WDC to which you can append data. The doneCallback signals to Tableau that you are done getting data.
    The jquery $.getJSON function gets earthquake data from the USGS earthquake feed and stores the data in a resp, or response, parameter. (You can open the URL in a browser to see what the JSON data looks like.)
    The for loop iterates over the features in the JSON object and stores the data that we want in the tableData array.
    The table.appendRows function appends the tableData array to the table as a JavaScript object.
*/
	myConnector.getData = function(table, doneCallback) {
		tableau.log("myConnector.getData: started");
		tableau.log("myConnector.getSchema: start AJAX");
    $.getJSON("https://018d85fa-126c-41fc-b95b-a7937541e009-bluemix.cloudant.com/capturedb/_all_docs?include_docs=true&limit=1000&skip=0", function(resp) {
        tableau.log("myConnector.getSchema.getJSON.onComplete: started");
		var rows = resp.rows,
            tableData = [];
		
		/*
			When you create multiple table schemas, the WDC API calls the getData function once for each schema. 
			As a result, you need a way to change the call to the USGS Earthquake API for each table. 
			The easiest way to do this is to use the table.tableInfo.id value that we set in the table schemas.
		*/
		
		if(table.tableInfo.id == "bsmFeed"){
        // Iterate over the JSON object
			for (var i = 0, len = rows.length; i < len; i++) {
				tableData.push({
					"id": rows[i].id,
					"assetName": rows[i].doc.assetName,
					"assetAbbrevation": rows[i].doc.assetAbbrevation,
					"officialNumber": rows[i].doc.officialNo,
					"date": rows[i].doc.date,
					"statusCode": rows[i].doc.statusCode,
					"isOnline":rows[i].doc.isOnline,
					"ipAddress": rows[i].doc.ipAddress,
					"provider": rows[i].doc.provider
				});
			}
		}
		
		if(table.tableInfo.id == "bsmFeedSensors"){
			for (var i = 0, len = rows.length; i < len; i++) {
				var sensors = rows[i].doc.sensors;
				if(sensors){
					for(var x=0, lenSensors = sensors.length; x < lenSensors; x++){
						tableData.push({
							//
							"id": rows[i].id,
							"parent":rows[i].doc.id,
							"sensorGroup": sensors[x].sensorGroup,
							"sensorName": sensors[x].sensorName,
							"value": sensors[x].value,
							"uom": sensors[x].uom
							});
					}
				}else{
						console.log(i +"." + x + ") no sensors for " + rows[i].id);
				}
				sensors = [];
			}
		}
		
        table.appendRows(tableData);
        doneCallback();
		tableau.log("myConnector.getSchema.getJSON.onComplete: finished");
    });
	tableau.log("myConnector.getSchema: completed");
};



    tableau.registerConnector(myConnector);
})();

/*
	Function:document.ready()
    The jquery $(document).ready function runs some code when the page loads.
    An click event listener is added to the button element created earlier. The button is identified by the submitButton id.
    The tableau.connectionName variable defines what we want to call the connector data source when it is displayed in Tableau.
    The tableau.submit() function sends the connector object to Tableau for validation.
*/
$(document).ready(function () {
    $("#submitButton").click(function () {
        tableau.connectionName = "Boat Sensor Capture Feed";
        tableau.submit();
    });
});



