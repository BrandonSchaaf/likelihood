$(document).ready(function() {
	var API_KEY = "0a759a654212f117f9ac910e13aa22f4";

    $(document).keypress(function(e) {
        let key = e.which;
        if (key == 13) {
            $(zipCodeSubmit).click();
        }
    });

    $(zipCodeSubmit).click(function() {
    	let zipCode = zipCodeInput.value
    	$.ajax({
    		type:'GET',
    		url: `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${API_KEY}`,
        }).fail(function(){   // If the Ajax call fails
            $(tempSentence).replaceWith(`<span id="tempSentence">ENTER A REAL ZIP CODE.<br>SORRY, WAS THAT NOT OBVIOUS?</span>`)
    	}).done(function(data){ // If the Ajax call succeeds
    		let K = data.main.temp // Data temperature in Kelvin
    		let F = (9/5)*(K-273)+32 // Fahrenheit conversion
    		let temperature = Math.floor(F) // Round to nearest whole number
            let location = data.name // City

            $(city).replaceWith(`<span id="city">${location}</span>`)

            if (temperature > 92) {
                    phrase="SCORCHING! CAN YOU GET NAKEDER THAN SKIN?"
                } else if (temperature > 85) {
                    phrase="THAT'S HOT. STOP WHAT YOU'RE DOING AND SWIM!"
                } else if (temperature > 78) {
                    phrase="NICE AND WARM! ZIP OFF YOUR PANT LEGS AND LET THOSE KNEES OUT!"
                } else if (temperature > 74) {
                    phrase="IT'S LOVELY OUT! GO OUT AND PLAY! EVER TRIED A BATTING CAGE? COULD BE FUN!"
                } else if (temperature > 70) {
                    phrase="HOW PLEASANT! DID SOMEBODY SAY PICNIC?"
                } else if (temperature > 63) {
                    phrase="YOUR FASHION SENSE IS KING TODAY! SHORTS? SURE! PANTS? WHY NOT!"
                } else if (temperature > 56) {
                    phrase="THROW ON YOUR FAVORITE FLANNEL AND GO FOR A WALK!"
                } else if (temperature > 52) {
                    phrase="GO TO A PUMPKIN PATCH OR SOMETHING! YOU LOOK CUTE CHILLY."                    
                } else if (temperature > 48) {
                    phrase="THE PURGATORY OF TEMPERATURES. KEEP A JACKET TIED AROUND YOUR WAIST!"
                } else if (temperature > 41) {
                    phrase="YOU'RE GONNA NEED YOUR COAT ON THIS ONE. STAND BY HEATING VENTS!"
                } else if (temperature < 34) {
                    phrase="BONE-CHILLING! CONSIDER BUILDING A FIRE AND SLEEPING INSIDE OF IT"
                }
    		
            $(tempSentence).replaceWith(`<span id="tempSentence"> IT'S ${temperature}° RIGHT NOW.<br>${phrase}</span>`)
    	})

        })
    });

$(Anchorage).click(function() {
        $.ajax({
            type:'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?zip=99501,us&appid=0a759a654212f117f9ac910e13aa22f4`,
        }).done(function(data){
            let K = data.main.temp
            let F = (9/5)*(K-273)+32
            let temperature = Math.floor(F)

            if (temperature > 92) {
                    phrase="SCORCHING! CAN YOU GET NAKEDER THAN SKIN?"
                } else if (temperature > 85) {
                    phrase="THAT'S HOT. STOP WHAT YOU'RE DOING AND SWIM!"
                } else if (temperature > 78) {
                    phrase="NICE AND WARM! ZIP OFF YOUR PANT LEGS AND LET THOSE KNEES OUT!"
                } else if (temperature > 74) {
                    phrase="IT'S LOVELY OUT! GO OUT AND PLAY! EVER TRIED A BATTING CAGE? COULD BE FUN!"
                } else if (temperature > 70) {
                    phrase="HOW PLEASANT! DID SOMEBODY SAY PICNIC?"
                } else if (temperature > 63) {
                    phrase="YOUR FASHION SENSE IS KING TODAY! SHORTS? SURE! PANTS? WHY NOT!"
                } else if (temperature > 56) {
                    phrase="THROW ON YOUR FAVORITE FLANNEL AND GO FOR A WALK!"
                } else if (temperature > 52) {
                    phrase="GO TO A PUMPKIN PATCH OR SOMETHING! YOU LOOK CUTE CHILLY."                    
                } else if (temperature > 48) {
                    phrase="THE PURGATORY OF TEMPERATURES. KEEP A JACKET TIED AROUND YOUR WAIST!"
                } else if (temperature > 41) {
                    phrase="YOU'RE GONNA NEED YOUR COAT ON THIS ONE. STAND BY HEATING VENTS!"
                } else if (temperature < 34) {
                    phrase="BONE-CHILLING! CONSIDER BUILDING A FIRE AND SLEEPING INSIDE OF IT"
                }

            $(tempSentence).replaceWith(`<span id="tempSentence"> IT'S ${temperature}° RIGHT NOW.<br>${phrase}</span>`)
            $(city).replaceWith(`<span id="city"></span>`)
            $(zipCodeInput).replaceWith(`<input type="text" class="form-control" id="zipCodeInput" placeholder="Zip Code">`)
        })
    })

$(SanFrancisco).click(function() {
        $.ajax({
            type:'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?zip=94016,us&appid=0a759a654212f117f9ac910e13aa22f4`,
        }).done(function(data){
            let K = data.main.temp
            let F = (9/5)*(K-273)+32
            let temperature = Math.floor(F)

            if (temperature > 92) {
                    phrase="SCORCHING! CAN YOU GET NAKEDER THAN SKIN?"
                } else if (temperature > 85) {
                    phrase="THAT'S HOT. STOP WHAT YOU'RE DOING AND SWIM!"
                } else if (temperature > 78) {
                    phrase="NICE AND WARM! ZIP OFF YOUR PANT LEGS AND LET THOSE KNEES OUT!"
                } else if (temperature > 74) {
                    phrase="IT'S LOVELY OUT! GO OUT AND PLAY! EVER TRIED A BATTING CAGE? COULD BE FUN!"
                } else if (temperature > 70) {
                    phrase="HOW PLEASANT! DID SOMEBODY SAY PICNIC?"
                } else if (temperature > 63) {
                    phrase="YOUR FASHION SENSE IS KING TODAY! SHORTS? SURE! PANTS? WHY NOT!"
                } else if (temperature > 56) {
                    phrase="THROW ON YOUR FAVORITE FLANNEL AND GO FOR A WALK!"
                } else if (temperature > 52) {
                    phrase="GO TO A PUMPKIN PATCH OR SOMETHING! YOU LOOK CUTE CHILLY."                    
                } else if (temperature > 48) {
                    phrase="THE PURGATORY OF TEMPERATURES. KEEP A JACKET TIED AROUND YOUR WAIST!"
                } else if (temperature > 41) {
                    phrase="YOU'RE GONNA NEED YOUR COAT ON THIS ONE. STAND BY HEATING VENTS!"
                } else if (temperature < 34) {
                    phrase="BONE-CHILLING! CONSIDER BUILDING A FIRE AND SLEEPING INSIDE OF IT"
                }

            $(tempSentence).replaceWith(`<span id="tempSentence"> IT'S ${temperature}° RIGHT NOW.<br>${phrase}</span>`)
            $(city).replaceWith(`<span id="city"></span>`)
            $(zipCodeInput).replaceWith(`<input type="text" class="form-control" id="zipCodeInput" placeholder="Zip Code">`)
        })
    })

$(Phoenix).click(function() {
        $.ajax({
            type:'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?zip=85001,us&appid=0a759a654212f117f9ac910e13aa22f4`,
        }).done(function(data){
            let K = data.main.temp
            let F = (9/5)*(K-273)+32
            let temperature = Math.floor(F)
            let location = data.name

            if (temperature > 92) {
                    phrase="SCORCHING! CAN YOU GET NAKEDER THAN SKIN?"
                } else if (temperature > 85) {
                    phrase="THAT'S HOT. STOP WHAT YOU'RE DOING AND SWIM!"
                } else if (temperature > 78) {
                    phrase="NICE AND WARM! ZIP OFF YOUR PANT LEGS AND LET THOSE KNEES OUT!"
                } else if (temperature > 74) {
                    phrase="IT'S LOVELY OUT! GO OUT AND PLAY! EVER TRIED A BATTING CAGE? COULD BE FUN!"
                } else if (temperature > 70) {
                    phrase="HOW PLEASANT! DID SOMEBODY SAY PICNIC?"
                } else if (temperature > 63) {
                    phrase="YOUR FASHION SENSE IS KING TODAY! SHORTS? SURE! PANTS? WHY NOT!"
                } else if (temperature > 56) {
                    phrase="THROW ON YOUR FAVORITE FLANNEL AND GO FOR A WALK!"
                } else if (temperature > 52) {
                    phrase="GO TO A PUMPKIN PATCH OR SOMETHING! YOU LOOK CUTE CHILLY."                    
                } else if (temperature > 48) {
                    phrase="THE PURGATORY OF TEMPERATURES. KEEP A JACKET TIED AROUND YOUR WAIST!"
                } else if (temperature > 41) {
                    phrase="YOU'RE GONNA NEED YOUR COAT ON THIS ONE. STAND BY HEATING VENTS!"
                } else if (temperature < 34) {
                    phrase="BONE-CHILLING! CONSIDER BUILDING A FIRE AND SLEEPING INSIDE OF IT"
                }

            $(tempSentence).replaceWith(`<span id="tempSentence"> IT'S ${temperature}° RIGHT NOW.<br>${phrase}</span>`)
            $(city).replaceWith(`<span id="city"></span>`)
            $(zipCodeInput).replaceWith(`<input type="text" class="form-control" id="zipCodeInput" placeholder="Zip Code">`)
        })
    })

$(Indianapolis).click(function() {
        $.ajax({
            type:'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?zip=46219,us&appid=0a759a654212f117f9ac910e13aa22f4`,
        }).done(function(data){
            let K = data.main.temp
            let F = (9/5)*(K-273)+32
            let temperature = Math.floor(F)
            let location = data.name

            if (temperature > 92) {
                    phrase="SCORCHING! CAN YOU GET NAKEDER THAN SKIN?"
                } else if (temperature > 85) {
                    phrase="THAT'S HOT. STOP WHAT YOU'RE DOING AND SWIM!"
                } else if (temperature > 78) {
                    phrase="NICE AND WARM! ZIP OFF YOUR PANT LEGS AND LET THOSE KNEES OUT!"
                } else if (temperature > 74) {
                    phrase="IT'S LOVELY OUT! GO OUT AND PLAY! EVER TRIED A BATTING CAGE? COULD BE FUN!"
                } else if (temperature > 70) {
                    phrase="HOW PLEASANT! DID SOMEBODY SAY PICNIC?"
                } else if (temperature > 63) {
                    phrase="YOUR FASHION SENSE IS KING TODAY! SHORTS? SURE! PANTS? WHY NOT!"
                } else if (temperature > 56) {
                    phrase="THROW ON YOUR FAVORITE FLANNEL AND GO FOR A WALK!"
                } else if (temperature > 52) {
                    phrase="GO TO A PUMPKIN PATCH OR SOMETHING! YOU LOOK CUTE CHILLY."                    
                } else if (temperature > 48) {
                    phrase="THE PURGATORY OF TEMPERATURES. KEEP A JACKET TIED AROUND YOUR WAIST!"
                } else if (temperature > 41) {
                    phrase="YOU'RE GONNA NEED YOUR COAT ON THIS ONE. STAND BY HEATING VENTS!"
                } else if (temperature < 34) {
                    phrase="BONE-CHILLING! CONSIDER BUILDING A FIRE AND SLEEPING INSIDE OF IT"
                }

            $(tempSentence).replaceWith(`<span id="tempSentence"> IT'S ${temperature}° RIGHT NOW.<br>${phrase}</span>`)
            $(city).replaceWith(`<span id="city"></span>`)
            $(zipCodeInput).replaceWith(`<input type="text" class="form-control" id="zipCodeInput" placeholder="Zip Code">`)
        })
    })

$(Orlando).click(function() {
        $.ajax({
            type:'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?zip=32789,us&appid=0a759a654212f117f9ac910e13aa22f4`,
        }).done(function(data){
            let K = data.main.temp
            let F = (9/5)*(K-273)+32
            let temperature = Math.floor(F)
            let location = data.name

            if (temperature > 92) {
                    phrase="SCORCHING! CAN YOU GET NAKEDER THAN SKIN?"
                } else if (temperature > 85) {
                    phrase="THAT'S HOT. STOP WHAT YOU'RE DOING AND SWIM!"
                } else if (temperature > 78) {
                    phrase="NICE AND WARM! ZIP OFF YOUR PANT LEGS AND LET THOSE KNEES OUT!"
                } else if (temperature > 74) {
                    phrase="IT'S LOVELY OUT! GO OUT AND PLAY! EVER TRIED A BATTING CAGE? COULD BE FUN!"
                } else if (temperature > 70) {
                    phrase="HOW PLEASANT! DID SOMEBODY SAY PICNIC?"
                } else if (temperature > 63) {
                    phrase="YOUR FASHION SENSE IS KING TODAY! SHORTS? SURE! PANTS? WHY NOT!"
                } else if (temperature > 56) {
                    phrase="THROW ON YOUR FAVORITE FLANNEL AND GO FOR A WALK!"
                } else if (temperature > 52) {
                    phrase="GO TO A PUMPKIN PATCH OR SOMETHING! YOU LOOK CUTE CHILLY."                    
                } else if (temperature > 48) {
                    phrase="THE PURGATORY OF TEMPERATURES. KEEP A JACKET TIED AROUND YOUR WAIST!"
                } else if (temperature > 41) {
                    phrase="YOU'RE GONNA NEED YOUR COAT ON THIS ONE. STAND BY HEATING VENTS!"
                } else if (temperature < 34) {
                    phrase="BONE-CHILLING! CONSIDER BUILDING A FIRE AND SLEEPING INSIDE OF IT"
                }

            $(tempSentence).replaceWith(`<span id="tempSentence"> IT'S ${temperature}° RIGHT NOW.<br>${phrase}</span>`)
            $(city).replaceWith(`<span id="city"></span>`)
            $(zipCodeInput).replaceWith(`<input type="text" class="form-control" id="zipCodeInput" placeholder="Zip Code">`)
        })
    })

$(NewYorkCity).click(function() {
        $.ajax({
            type:'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?zip=10001,us&appid=0a759a654212f117f9ac910e13aa22f4`,
        }).done(function(data){
            let K = data.main.temp
            let F = (9/5)*(K-273)+32
            let temperature = Math.floor(F)
            let location = data.name

            if (temperature > 92) {
                    phrase="SCORCHING! CAN YOU GET NAKEDER THAN SKIN?"
                } else if (temperature > 85) {
                    phrase="THAT'S HOT. STOP WHAT YOU'RE DOING AND SWIM!"
                } else if (temperature > 78) {
                    phrase="NICE AND WARM! ZIP OFF YOUR PANT LEGS AND LET THOSE KNEES OUT!"
                } else if (temperature > 74) {
                    phrase="IT'S LOVELY OUT! GO OUT AND PLAY! EVER TRIED A BATTING CAGE? COULD BE FUN!"
                } else if (temperature > 70) {
                    phrase="HOW PLEASANT! DID SOMEBODY SAY PICNIC?"
                } else if (temperature > 63) {
                    phrase="YOUR FASHION SENSE IS KING TODAY! SHORTS? SURE! PANTS? WHY NOT!"
                } else if (temperature > 56) {
                    phrase="THROW ON YOUR FAVORITE FLANNEL AND GO FOR A WALK!"
                } else if (temperature > 52) {
                    phrase="GO TO A PUMPKIN PATCH OR SOMETHING! YOU LOOK CUTE CHILLY."                    
                } else if (temperature > 48) {
                    phrase="THE PURGATORY OF TEMPERATURES. KEEP A JACKET TIED AROUND YOUR WAIST!"
                } else if (temperature > 41) {
                    phrase="YOU'RE GONNA NEED YOUR COAT ON THIS ONE. STAND BY HEATING VENTS!"
                } else if (temperature < 34) {
                    phrase="BONE-CHILLING! CONSIDER BUILDING A FIRE AND SLEEPING INSIDE OF IT"
                }

            $(tempSentence).replaceWith(`<span id="tempSentence"> IT'S ${temperature}° RIGHT NOW.<br>${phrase}</span>`)
            $(city).replaceWith(`<span id="city"></span>`)
            $(zipCodeInput).replaceWith(`<input type="text" class="form-control" id="zipCodeInput" placeholder="Zip Code">`)
        })
    })



