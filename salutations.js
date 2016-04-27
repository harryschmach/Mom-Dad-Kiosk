function salutations() {
    "use strict";
    var hour = new Date().getHours(), day = new Date().getDay(), month = new Date().getMonth(), greeting;
    
    if (month === 9 && day === 17) {
        greeting = "Happy Birthday Mom!";
    } else if (month === 6 && day === 1) {
        greeting = "Happy Birthday Dad!";
    } else if (month === 8 && day === 20) {
        greeting = "Happy Birthday Harry!";
    } else if (month === 2 && day === 15) {
        greeting = "Happy Birthday Ben!";
    } else if (day === 0 || day === 6) {
        greeting = "Have a good weekend Mom and Dad!";
    } else {
        if (hour < 8) {
            greeting = "You're Up Early, huh?";
        } else if (hour > 8 && hour < 12) {
            greeting = "Better Get Going to Work!";
        } else if (hour >= 12 && hour < 17) {
            greeting = "Good Afternoon Guys!";
        } else if (hour > 17 && hour < 20) {
            greeting = "Good Evening";
        } else if (hour > 20) {
            greeting = "Good Night";
        } else {greeting = "Hey There";
            }
    }
    document.getElementById('greetings').innerHTML = greeting;
}



