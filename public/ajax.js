$(currentTemp)
// Enter current temperature based on current location

$(sentence)
// function that selects a sentence based on currentTemp (see table)



    var API_KEY = "0a759a654212f117f9ac910e13aa22f4";
    var celScale = false;
    var callType = 0  // 0 for local, 1 for remote location

$(document).ready(function() { // when the document is finished loading


    $.getJSON("https://ipinfo.io", function(d){  //make an AJAX (or getJSON - a simplified AJAX) to get the user's location
        var loc = d.loc.split(",");  // we get ip-info, and parse it for location data, and split it into an array
        var locLat = loc[0];    // the first array value is the latitude
        var locLon = loc[1];    // the 2nd array value is the longitude
        var link = "http://api.openweathermap.org/data/2.5/forecast/daily?units=imperial&lat=" + locLat + "&lon=" + locLon + "&cnt=8&appid=" + API_KEY;  // build the link for the API call

        $.getJSON(link, function(wd){  // make an API call, pass the returned weather data (wd) to this function
            renderWD(wd, celScale);  // pass the weather data and the cel (whether we're in cel or far) to the render function, to parse and finally render data
            $("#toggle").off();
            $("#toggle").on("click", function() {
                celScale = !celScale;
                renderWD(wd, celScale);
            });
        });
    });  // end of $.getJSON("https://ipinfo.io"


    // validate zipcode field input. If it's not 5 digits or isn't a number, show the error-span, otherwise hide the error-span
    $("#zipcode").keyup(function(event) {
        var zipcode = Number( $("#zipcode").val() );
        if(zipcode.toString().length != 5 || !regIsNumber(zipcode)) {
            $("#zipError").show("slideup");
        } else {
            $("#zipError").hide("slideup");
        }
        if (event.which === 13) {  //submit, same as zipcodesubmit
            var zipcode = $("#zipcode").val();
            var link = "http://api.openweathermap.org/data/2.5/forecast/daily?units=imperial&zip=" + zipcode + "&appid=" + API_KEY;
            $.ajax({
                type: "GET",
                url: link
            }).done(function(data) {   // if ajax call finishes successfully
                renderWD(data, celScale);
                $("#toggle").off();
                $("#toggle").on("click", function() {
                    celScale = !celScale;
                    renderWD(data, celScale);
                });
            }).fail(function(){   // if the ajax call fails to finish for some reason.
                alert("The ajax call messed up.")
            });
        }
    });


    // when the button is pressed, build the link and make an AJAX call, and if successful then render the data
    $("#zipcodeSubmit").on("click", function() {
        var zipcode = $("#zipcode").val();
        var link = "http://api.openweathermap.org/data/2.5/forecast/daily?units=imperial&zip=" + zipcode + "&appid=" + API_KEY;
        $.ajax({
            type: "GET",
            url: link
        }).done(function(data) {   // if ajax call finishes successfully
            renderWD(data, celScale);
            $("#toggle").off();
            $("#toggle").on("click", function() {
                celScale = !celScale;
                renderWD(data, celScale);
            });
        }).fail(function(){   // if the ajax call fails to finish for some reason.
            alert("The ajax call messed up.")
        });
    });    // end of $("#zipcode")


})    // end of $(document).ready(function



var regIsNumber = function (fData) {
    var reg = new RegExp("^[-]?[0-9]+[\.]?[0-9]+$");
    return reg.test(fData);
 }



function renderWD(weatherData, celScale){
    var current = weatherData.list[0];
    $("#day0High").text(returnTemp(current.temp.max, celScale));
    }

}