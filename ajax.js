

$(document).ready(function() { // when the document is finished loading

		var API_KEY = "0a759a654212f117f9ac910e13aa22f4";
    $.getJSON("https://ipinfo.io", function(d){  //make an AJAX (or getJSON - a simplified AJAX) to get the user's location
        var loc = d.loc.split(",");  // we get ip-info, and parse it for location data, and split it into an array
        var locLat = loc[0];    // the first array value is the latitude
        var locLon = loc[1];    // the 2nd array value is the longitude
        var link = "http://api.openweathermap.org/data/2.5/forecast/daily?units=imperial&lat=" + locLat + "&lon=" + locLon + "&cnt=8&appid=" + API_KEY;  // build the link for the API call

        $.getJSON(link, function(wd){  // make an API call, pass the returned weather data (wd) to this function
            renderWD(wd);  // pass the weather data to the render function, to parse and finally render data
            });
        });
    });  // end of $.getJSON("https://ipinfo.io"


    // When the enter key is pressed, build the link and make an AJAX call.
    $(zipcode).keyup(function(event) {
        if (event.which === 13) {  //submit, same as zipcodesubmit
            var zipcode = $("#zipcode").val();
            var link = "http://api.openweathermap.org/data/2.5/forecast/daily?units=imperial&zip=" + zipcode + "&appid=" + API_KEY;
            $.ajax({
                type: "GET",
                url: link
            }).fail(function(){   // if the ajax call fails.
                alert("Sun says please enter a valid zip code.")
            });
        }
    });


    // When the button is clicked, build the link and make an AJAX call.
    $(zipcodeSubmit).on("click", function() {
        var zipcode = $("#zipcode").val();
        var link = "http://api.openweathermap.org/data/2.5/forecast/daily?units=imperial&zip=" + zipcode + "&appid=" + API_KEY;
        $.ajax({
            type: "GET",
            url: link
        }).fail(function(){   // if the ajax call fails.
            alert("Sun says please enter a valid zip code.")
        });
    });    // end of $("#zipcode")
});   // end of $(document).ready(function



var regIsNumber = function (fData) {
    var reg = new RegExp("^[-]?[0-9]+[\.]?[0-9]+$");
    return reg.test(fData);
 }



function renderWD(weatherData){
    var current = weatherData.list[0];
    $(currentTemp).text(returnTemp(current.temp.day));
    }
})