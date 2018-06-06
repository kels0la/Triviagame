/*PsuedoCoding:
1. Layout of the page + questions and answers (*Arrays?*)
2. Add button to start the game
3. On click of button: timer starts, question(s) is displayed
4. Allow user to click their answer.
5. If Timer ends or incorrect: incorrect score is added, correct answer is displayed, within 5 seconds next Q is up
5. If correct: added to correctScore, display of correct, move onto next question within 5 seconds
6. 
7. Restart the game upon completion
*/
const Questions = [
    {//1
        question: "The creator of *what* coin sold his entire stake at its all-time high on the day Bitcoin Cash launched on Coinbase?", 
        answers: {
            a: "Charlie Lee",b: "Satoshi Nakamoto",c: "Roger Ver", d: "Vitalik Buterin"
        },
        correctAnswer: "a"
    },
    {//2
        question: "The creator of Bitcoin used what alias for his communications?", //2
        answers: {
            a: "Milton Friedman",b: "Alan Greenspan",c: "Donald Trump", d: "Satoshi Nakamoto"
        },
        correctAnswer: "d"
    },
    {//3
        question: "Who founded Ethereum?", //3
        answers: {
            a: "Peter Wuille", b: "Vitalik Buterin",c: "Barry Silbert", d: "Luke Dashjr"
        },
        correctAnswer: "b"
    },
    {//4
        question: "Which company recently bought the cryptocurrency exchange, Poloniex?",
        answers: {
            a: "Coinbase",b: "Kraken", c: "Mt.Gox", d: "Circle"
        },
        correctAnswer: "d"
    },
    {//5
        question: "What is the name of the venture capitalist that won the first Silk Road auction?",
        answers: {
            a: "Adam Draper",b: "Tim Draper",c: "Barry Silbert", d: "Ryan X Charles"
        },
        correctAnswer: "a"
    },
    {//6
        question: "What is the name of the Bitcoin developer Satoshi handed over the reigns to?",
        answers: {
            a: "Gavin Andreesen", b: "Marc Andreesen", c: "Mike Hearn",  d: "Greg Maxwell"
        },
        correctAnswer: "a"
    },
    {//7
        question: "Which coin hardforked from Bitcoin on August 1st, 2017, to pursue the path Satoshi laid out?",
        answers: {
            a: "Litecoin",b: "Bitcoin Cash",c: "DASH", d: "Ethereum"
        },
        correctAnswer: "b"
    },
    {//8
        question: "Which cryptocurrency was created by Brandon Eich, creator of Javascript and founder of Mozilla?",
        answers: {
            a: "Basic Attention Token", b: "Civic", c: "Zcash", d: "Ripple"
        },
        correctAnswer: "a"
    },
    {//9
        question: "Who created the Bitcoin-Cash-based social-media network Yours.org?",
        answers: {
            a: "Ryan X Charles and Clemens Ley",b: "Satoshi Nakamoto",c: "Coinbase", d: "Microsoft"
        },
        correctAnswer: "a"
    },
    {//10
        question: "Who is the Chief Scientist at nChain?",
        answers: {
            a: "Satoshi Nakatmoto", b: "Craig Wright", c: "Jimmy Nguyen", d: "Unknown"
        },
        correctAnswer: "b"
    },
    
];
$(document).ready(function() {

    var incorrectAnswers = 0;
    var correctAnswers = 0;

    $('.btn').click(function(){// upon click of button, the Quizbegins.
        console.log("hello");
        startQuiz();
    })

    var clock = 10
    var intervalId;

    function startQuiz(){
        
        $(".btn").hide(); // hides the start button
        //clockRun() // Right now, the clock works, but without the 00:00
        for (var i = 0; i < Questions.length; i++) {//iterates through Questions(10)
            var testing = $("<p>")
            testing.html(Questions[i].question)
            for (var keys in Questions[i].answers) {
               // console.log(Questions[i].answers[keys])
                //console.log(keys)
                testing.append('<input type="radio" name="ans" class="radio" value="'+ keys +'">'+ Questions[i].answers[keys])
               // var userinput = $('input[type="radio"]:checked').val();
            //console.log(userinput)
              }
             $("#questions").append(testing);
             $(document).on("click", "input:radio[name=ans]", function(){
                var selected_value = $(this).val();
                console.log(selected_value)
                //alert('The radio button has been selected and the value is ' + selected_value);
            })
        }

        //$("#questions").html("Question # 1 is: " + Questions[0])
        
        //clockRun();
        

    


    }
    
    // onclick using Radio - Capture the keys for the user answer
    // compare the user key with the correct answer
    // if they === increment correct variable (incorrect and correct answers)
    function showResults(){

    }

    function clockRun() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

        clock--;
  
        $("#timer").html("<h2>" + clock + "</h2>");
  
        // if (number === 0) {
  
        //   stop();
  
        //   alert("Time Up!");
    }
      
})