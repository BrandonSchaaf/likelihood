$(document).ready(function() {
	var API_KEY = "0a759a654212f117f9ac910e13aa22f4";

    $(zipCodeInput).keypress(function(e) {
        let key = e.which;
        if (key == 13)
            {
            $(zipCodeSubmit).click();
            }
        });

    $(zipCodeSubmit).click(function() {
    	let zipCode = zipCodeInput.value
    	$.ajax({
    		type:'GET',
    		url: `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${API_KEY}`,
        }).fail(function(){   // If the Ajax call fails
            alert("Sun says please enter a valid zip code.")
    	}).done(function(data){ // If the Ajax call succeeds
    		let K = data.main.temp // Data temperature in Kelvin
    		let F = (9/5)*(K-273)+32 // Fahrenheit conversion
    		let temperature = Math.floor(F) // Round to nearest whole number
            let location = data.name // City

    		$(tempSentence).replaceWith(`<span id="tempSentence"> IT'S ${temperature}° RIGHT NOW.</span>`)
            $(city).replaceWith(`<span id="city">${location}</span>`)

    		if (temperature > 95) {
    				phrase="SCORCHING! CAN YOU GET NAKEDER THAN SKIN?"
    			} else if (temperature > 85) {
    				phrase="THAT'S HOT. STOP WHAT YOU'RE DOING AND SWIM!"
				} else if (temperature > 75) {
					phrase="NICE AND WARM! ZIP OFF YOUR PANT LEGS AND LET THOSE KNEES OUT!"
				} else if (temperature > 71) {
					phrase="HOW PLEASANT! DID SOMEBODY SAY PICNIC?"
				} else if (temperature > 63) {
					phrase="THE WEATHER'S ALLOWING YOUR FASHION SENSE TO TAKE OVER TODAY! SHORTS? SURE! PANTS? WHY NOT!"
				} else if (temperature > 54) {
					phrase="THROW ON YOUR FAVORITE FLANNEL AND GO FOR A WALK!"
				} else if (temperature > 45) {
					phrase="THE PURGATORY OF TEMPERATURES. BETTER KEEP A JACKET TIED AROUND YOUR WAIST!"
				} else if (temperature > 40) {
					phrase="YOU'RE GONNA NEED YOUR COAT FOR THIS ONE. STAND BY HEATING VENTS!"
				} else if (temperature < 30) {
					phrase="BONE-CHILLING! CONSIDER BUILDING A FIRE AND SLEEPING INSIDE OF IT"
				}
    		
    		$(followUp).replaceWith(`<span id="followUp">${phrase}</span`)
    	})

        })
    });

$(Anchorage).click(function() {
        $.ajax({
            type:'GET',
            url: `http://api.openweathermap.org/data/2.5/weather?zip=99501,us&appid=0a759a654212f117f9ac910e13aa22f4`,
        }).done(function(data){
            let K = data.main.temp
            let F = (9/5)*(K-273)+32
            let temperature = Math.floor(F)

            $(tempSentence).replaceWith(`<span id="tempSentence"> IT'S ${temperature}° RIGHT NOW.</span>`)

            if (temperature > 95) {
                phrase="SCORCHING! CAN YOU GET NAKEDER THAN SKIN?"
            } else if (temperature > 85) {
                phrase="THAT'S HOT. STOP WHAT YOU'RE DOING AND SWIM!"
            } else if (temperature > 75) {
                phrase="NICE AND WARM! ZIP OFF YOUR PANT LEGS AND LET THOSE KNEES OUT!"
            } else if (temperature > 71) {
                phrase="HOW PLEASANT! DID SOMEBODY SAY PICNIC?"
            } else if (temperature > 63) {
                phrase="THE WEATHER'S ALLOWING YOUR FASHION SENSE TO TAKE OVER TODAY! SHORTS? SURE! PANTS? WHY NOT!"
            } else if (temperature > 54) {
                phrase="THROW ON YOUR FAVORITE FLANNEL AND GO FOR A WALK!"
            } else if (temperature > 45) {
                phrase="THE PURGATORY OF TEMPERATURES. BETTER KEEP A JACKET TIED AROUND YOUR WAIST!"
            } else if (temperature > 40) {
                phrase="YOU'RE GONNA NEED YOUR COAT FOR THIS ONE. STAND BY HEATING VENTS!"
            } else if (temperature < 30) {
                phrase="BONE-CHILLING! CONSIDER BUILDING A FIRE AND SLEEPING INSIDE OF IT"
            }

            $(followUp).replaceWith(`<span id="followUp">${phrase}</span`)
        })
    })

$(SanFrancisco).click(function() {
        $.ajax({
            type:'GET',
            url: `http://api.openweathermap.org/data/2.5/weather?zip=94016,us&appid=0a759a654212f117f9ac910e13aa22f4`,
        }).done(function(data){
            let K = data.main.temp
            let F = (9/5)*(K-273)+32
            let temperature = Math.floor(F)

            $(tempSentence).replaceWith(`<span id="tempSentence"> IT'S ${temperature}° RIGHT NOW.</span>`)

            if (temperature > 95) {
                phrase="SCORCHING! CAN YOU GET NAKEDER THAN SKIN?"
            } else if (temperature > 85) {
                phrase="THAT'S HOT. STOP WHAT YOU'RE DOING AND SWIM!"
            } else if (temperature > 75) {
                phrase="NICE AND WARM! ZIP OFF YOUR PANT LEGS AND LET THOSE KNEES OUT!"
            } else if (temperature > 71) {
                phrase="HOW PLEASANT! DID SOMEBODY SAY PICNIC?"
            } else if (temperature > 63) {
                phrase="THE WEATHER'S ALLOWING YOUR FASHION SENSE TO TAKE OVER TODAY! SHORTS? SURE! PANTS? WHY NOT!"
            } else if (temperature > 54) {
                phrase="THROW ON YOUR FAVORITE FLANNEL AND GO FOR A WALK!"
            } else if (temperature > 45) {
                phrase="THE PURGATORY OF TEMPERATURES. BETTER KEEP A JACKET TIED AROUND YOUR WAIST!"
            } else if (temperature > 40) {
                phrase="YOU'RE GONNA NEED YOUR COAT FOR THIS ONE. STAND BY HEATING VENTS!"
            } else if (temperature < 30) {
                phrase="BONE-CHILLING! CONSIDER BUILDING A FIRE AND SLEEPING INSIDE OF IT"
            }

            $(followUp).replaceWith(`<span id="followUp">${phrase}</span`)
        })
    })

$(Phoenix).click(function() {
        $.ajax({
            type:'GET',
            url: `http://api.openweathermap.org/data/2.5/weather?zip=85001,us&appid=0a759a654212f117f9ac910e13aa22f4`,
        }).done(function(data){
            let K = data.main.temp
            let F = (9/5)*(K-273)+32
            let temperature = Math.floor(F)
            let location = data.name

            $(tempSentence).replaceWith(`<span id="tempSentence"> IT'S ${temperature}° RIGHT NOW.</span>`)

            if (temperature > 95) {
                phrase="SCORCHING! CAN YOU GET NAKEDER THAN SKIN?"
            } else if (temperature > 85) {
                phrase="THAT'S HOT. STOP WHAT YOU'RE DOING AND SWIM!"
            } else if (temperature > 75) {
                phrase="NICE AND WARM! ZIP OFF YOUR PANT LEGS AND LET THOSE KNEES OUT!"
            } else if (temperature > 71) {
                phrase="HOW PLEASANT! DID SOMEBODY SAY PICNIC?"
            } else if (temperature > 63) {
                phrase="THE WEATHER'S ALLOWING YOUR FASHION SENSE TO TAKE OVER TODAY! SHORTS? SURE! PANTS? WHY NOT!"
            } else if (temperature > 54) {
                phrase="THROW ON YOUR FAVORITE FLANNEL AND GO FOR A WALK!"
            } else if (temperature > 45) {
                phrase="THE PURGATORY OF TEMPERATURES. BETTER KEEP A JACKET TIED AROUND YOUR WAIST!"
            } else if (temperature > 40) {
                phrase="YOU'RE GONNA NEED YOUR COAT FOR THIS ONE. STAND BY HEATING VENTS!"
            } else if (temperature < 30) {
                phrase="BONE-CHILLING! CONSIDER BUILDING A FIRE AND SLEEPING INSIDE OF IT"
            }

            $(followUp).replaceWith(`<span id="followUp">${phrase}</span`)
        })
    })

$(Indianapolis).click(function() {
        $.ajax({
            type:'GET',
            url: `http://api.openweathermap.org/data/2.5/weather?zip=46219,us&appid=0a759a654212f117f9ac910e13aa22f4`,
        }).done(function(data){
            let K = data.main.temp
            let F = (9/5)*(K-273)+32
            let temperature = Math.floor(F)
            let location = data.name

            $(tempSentence).replaceWith(`<span id="tempSentence"> IT'S ${temperature}° RIGHT NOW.</span>`)

            if (temperature > 95) {
                phrase="SCORCHING! CAN YOU GET NAKEDER THAN SKIN?"
            } else if (temperature > 85) {
                phrase="THAT'S HOT. STOP WHAT YOU'RE DOING AND SWIM!"
            } else if (temperature > 75) {
                phrase="NICE AND WARM! ZIP OFF YOUR PANT LEGS AND LET THOSE KNEES OUT!"
            } else if (temperature > 71) {
                phrase="HOW PLEASANT! DID SOMEBODY SAY PICNIC?"
            } else if (temperature > 63) {
                phrase="THE WEATHER'S ALLOWING YOUR FASHION SENSE TO TAKE OVER TODAY! SHORTS? SURE! PANTS? WHY NOT!"
            } else if (temperature > 54) {
                phrase="THROW ON YOUR FAVORITE FLANNEL AND GO FOR A WALK!"
            } else if (temperature > 45) {
                phrase="THE PURGATORY OF TEMPERATURES. BETTER KEEP A JACKET TIED AROUND YOUR WAIST!"
            } else if (temperature > 40) {
                phrase="YOU'RE GONNA NEED YOUR COAT FOR THIS ONE. STAND BY HEATING VENTS!"
            } else if (temperature < 30) {
                phrase="BONE-CHILLING! CONSIDER BUILDING A FIRE AND SLEEPING INSIDE OF IT"
            }

            $(followUp).replaceWith(`<span id="followUp">${phrase}</span`)
        })
    })

$(Orlando).click(function() {
        $.ajax({
            type:'GET',
            url: `http://api.openweathermap.org/data/2.5/weather?zip=32789,us&appid=0a759a654212f117f9ac910e13aa22f4`,
        }).done(function(data){
            let K = data.main.temp
            let F = (9/5)*(K-273)+32
            let temperature = Math.floor(F)
            let location = data.name

            $(tempSentence).replaceWith(`<span id="tempSentence"> IT'S ${temperature}° RIGHT NOW.</span>`)

            if (temperature > 95) {
                phrase="SCORCHING! CAN YOU GET NAKEDER THAN SKIN?"
            } else if (temperature > 85) {
                phrase="THAT'S HOT. STOP WHAT YOU'RE DOING AND SWIM!"
            } else if (temperature > 75) {
                phrase="NICE AND WARM! ZIP OFF YOUR PANT LEGS AND LET THOSE KNEES OUT!"
            } else if (temperature > 71) {
                phrase="HOW PLEASANT! DID SOMEBODY SAY PICNIC?"
            } else if (temperature > 63) {
                phrase="THE WEATHER'S ALLOWING YOUR FASHION SENSE TO TAKE OVER TODAY! SHORTS? SURE! PANTS? WHY NOT!"
            } else if (temperature > 54) {
                phrase="THROW ON YOUR FAVORITE FLANNEL AND GO FOR A WALK!"
            } else if (temperature > 45) {
                phrase="THE PURGATORY OF TEMPERATURES. BETTER KEEP A JACKET TIED AROUND YOUR WAIST!"
            } else if (temperature > 40) {
                phrase="YOU'RE GONNA NEED YOUR COAT FOR THIS ONE. STAND BY HEATING VENTS!"
            } else if (temperature < 30) {
                phrase="BONE-CHILLING! CONSIDER BUILDING A FIRE AND SLEEPING INSIDE OF IT"
            }

            $(followUp).replaceWith(`<span id="followUp">${phrase}</span`)
        })
    })

$(NewYorkCity).click(function() {
        $.ajax({
            type:'GET',
            url: `http://api.openweathermap.org/data/2.5/weather?zip=10001,us&appid=0a759a654212f117f9ac910e13aa22f4`,
        }).done(function(data){
            let K = data.main.temp
            let F = (9/5)*(K-273)+32
            let temperature = Math.floor(F)
            let location = data.name

            $(tempSentence).replaceWith(`<span id="tempSentence"> IT'S ${temperature}° RIGHT NOW.</span>`)

            if (temperature > 95) {
                phrase="SCORCHING! CAN YOU GET NAKEDER THAN SKIN?"
            } else if (temperature > 85) {
                phrase="THAT'S HOT. STOP WHAT YOU'RE DOING AND SWIM!"
            } else if (temperature > 75) {
                phrase="NICE AND WARM! ZIP OFF YOUR PANT LEGS AND LET THOSE KNEES OUT!"
            } else if (temperature > 71) {
                phrase="HOW PLEASANT! DID SOMEBODY SAY PICNIC?"
            } else if (temperature > 63) {
                phrase="THE WEATHER'S ALLOWING YOUR FASHION SENSE TO TAKE OVER TODAY! SHORTS? SURE! PANTS? WHY NOT!"
            } else if (temperature > 54) {
                phrase="THROW ON YOUR FAVORITE FLANNEL AND GO FOR A WALK!"
            } else if (temperature > 45) {
                phrase="THE PURGATORY OF TEMPERATURES. BETTER KEEP A JACKET TIED AROUND YOUR WAIST!"
            } else if (temperature > 40) {
                phrase="YOU'RE GONNA NEED YOUR COAT FOR THIS ONE. STAND BY HEATING VENTS!"
            } else if (temperature < 30) {
                phrase="BONE-CHILLING! CONSIDER BUILDING A FIRE AND SLEEPING INSIDE OF IT"
            }

            $(followUp).replaceWith(`<span id="followUp">${phrase}</span`)
        })
    })



