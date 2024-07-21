
function runModel() {
   
    //refer py files from here

    document.getElementById('busyIndicator').style.display = 'block';
    document.getElementById('busyIndicator').innerText = "Generating SQL..."

    setTimeout(function() {
        showControl('lblSql');
        }, 3000);

    setTimeout(function() {
        showControl('txtSqlQuery');
    }, 4000);

    setTimeout(function() {
        document.getElementById('busyIndicator').innerText = "Querying Data..."
        showControl('lblTabData');
    }, 5000);

    setTimeout(function() {
        showControl('lblPlot');
        document.getElementById('busyIndicator').innerText = "Plotting the Data..."
        document.getElementById('busyIndicator').style.display = 'none';
    }, 7000);
}

function showControl(ctrlName) {
    document.getElementById(ctrlName).style.visibility = 'visible';
}




