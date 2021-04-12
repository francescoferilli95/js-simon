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
    var outputTime = 30 * 1000;
    var maxNumbers = 5;
    //var timer = setTimeout(function(){}, outputTime);
    //var userNumber = parseInt( prompt('Please insert a Number ' + ' of ' + maxNumbers) );

    // GENERATE 5 RANDOM NUMBERS
    while(randomNumbers.length < size) {

        var numbers = getRandomNumbers(1, 100);

        if(! randomNumbers.includes(numbers)){
            randomNumbers.push(numbers);
        }
    }
    // console.log(randomNumbers);
    output = alert('Simon Says: ' + randomNumbers);



    // FUNCTIONS
    function getRandomNumbers (min, max) {
        return Math.floor( Math.random() * (max - min + 1) ) + min;
    }


    // END OF DOC READY
});