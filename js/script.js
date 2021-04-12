$(document).ready(function () {
    
    /**
     * 
     *  TASK: SIMON SAYS
     *  1. GENERATE AN ALERT THAT DISPLAYS 5 RANDOM UNIQUE NUMBERS
     *  2. SET A TIMER OF 30 SECONDS & THEN CLOSE THE ALERT AND ASK THE USER TO
     *     INSERT THE NUMBERS, WITH 5 PROMPTS
     *  3. THE SOFTWARE SAYS HOW MANY AND WHICH NUMBERS THE USER INSERTED CORRECTLY
     * 
    /**/

    // REFS
    var randomNumbers = [];
    var size = 5;
    var output;
    var waitingTime = 2 * 1000; // test 
    var maxNumbers = 5;
    var timer;
    var userNumber;

    // GENERATE 5 RANDOM NUMBERS
    while(randomNumbers.length < size) {

        var numbers = getRandomNumbers(1, 100);

        if(! randomNumbers.includes(numbers)){
            randomNumbers.push(numbers);
        }
    }
    // console.log(randomNumbers);
    output = alert('Simon Says: ' + randomNumbers);
    
    // ASK TO INSERT 5 NUMBERS TO THE USER AFTER THE WAIT TIME REQUESTED BY THE TASK
    timer = setTimeout(function(){
        for(var i = 1; i <= maxNumbers; i++) {
            userNumber = parseInt(prompt('Please insert a Number ' + i + ' of ' + maxNumbers));
            console.log(userNumber);
        }
        clearTimeout(timer);
    }, waitingTime);


    // FUNCTIONS
    function getRandomNumbers (min, max) {
        return Math.floor( Math.random() * (max - min + 1) ) + min;
    }


    // END OF DOC READY
});