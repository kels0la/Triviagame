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
        question: "<h5>1. Who sold his entire stake of the cryptocurrency he created at its all-time high on the day Bitcoin Cash launched on Coinbase?</h5>", 
        answers: {
            a: "Charlie Lee",b: "Satoshi Nakamoto",c: "Roger Ver", d: "Vitalik Buterin"
        },
        correctAnswer: "a"
    },
    {//2
        question: "<h5>2. The creator of Bitcoin used what alias for his communications?</h5>", //2
        answers: {
            a: "Milton Friedman",b: "Alan Greenspan",c: "Donald Trump", d: "Satoshi Nakamoto"
        },
        correctAnswer: "d"
    },
    {//3
        question: "<h5>3. Who founded Ethereum?</h5>", //3
        answers: {
            a: "Peter Wuille", b: "Vitalik Buterin",c: "Barry Silbert", d: "Luke Dashjr"
        },
        correctAnswer: "b"
    },
    {//4
        question: "<h5>4. Which company recently bought the cryptocurrency exchange, Poloniex?</h5>",
        answers: {
            a: "Coinbase",b: "Kraken", c: "Mt.Gox", d: "Circle"
        },
        correctAnswer: "d"
    },
    {//5
        question: "<h5>5. What is the name of the venture capitalist that won the first Silk Road auction?</h5>",
        answers: {
            a: "Adam Draper",b: "Tim Draper",c: "Barry Silbert", d: "Ryan X Charles"
        },
        correctAnswer: "a"
    },
    {//6
        question: "<h5>6. What is the name of the Bitcoin developer Satoshi handed over the reigns to?</h5>",
        answers: {
            a: "Gavin Andreesen", b: "Marc Andreesen", c: "Mike Hearn",  d: "Greg Maxwell"
        },
        correctAnswer: "a"
    },
    {//7
        question: "<h5>7. Which coin hardforked from Bitcoin on August 1st, 2017, to pursue the path Satoshi laid out?</h5>",
        answers: {
            a: "Litecoin",b: "Bitcoin Cash",c: "DASH", d: "Ethereum"
        },
        correctAnswer: "b"
    },
    {//8
        question: "<h5>8. Which cryptocurrency was created by Brandon Eich, creator of Javascript and founder of Mozilla?</h5>",
        answers: {
            a: "Basic Attention Token", b: "Civic", c: "Zcash", d: "Ripple"
        },
        correctAnswer: "a"
    },
    {//9
        question: "<h5>9. Who created the Bitcoin-Cash-based social-media network Yours.org?</h5>",
        answers: {
            a: "Ryan X Charles and Clemens Ley",b: "Satoshi Nakamoto",c: "Coinbase", d: "Microsoft"
        },
        correctAnswer: "a"
    },
    {//10
        question: "<h5>10. Who is the Chief Scientist at nChain?</h5>",
        answers: {
            a: "Satoshi Nakatmoto", b: "Craig Wright", c: "Jimmy Nguyen", d: "Unknown"
        },
        correctAnswer: "b"
    },
    
];

    const quizContainer = $(".questions");
    const resultsContainer = $(".results");
    const submitButton = $(".submit");

$(document).ready(function() {

    $(".hide").hide() // hides the submit button

    var incorrectAnswers = 0;
    var correctAnswers = 0;

    $('.start').click(function(){// upon click of button, the Quizbegins.
        console.log("hello");
        startQuiz();
    })

    var clock = 100
    var intervalId;


    function startQuiz(){
        
        //clockRun();

        $("h4").hide();
        $(".start").hide(); // hides the start button
        $(".hide").show(); // shows the submit button

        for (var i = 0; i < Questions.length; i++) {//iterates through Questions(10)
            
            var questioncontainer = $("<p>") //variable testing assigned a paragraph.
            questioncontainer.html(Questions[i].question)//html of the question is being looped with the question. a paragraph is added to each because of testing
            
            var fieldset = $('<fieldset id='+ i + '>')
            questioncontainer.append(fieldset)
            

            for (var letter in Questions[i].answers) {
               //console.log(Questions[i].answers[letter])
                //console.log(letter)
                fieldset.append('<input type="radio" name='+ i +' class="radio" value="'+ letter +'">'+ Questions[i].answers[letter] + " ")
               // var userinput = $('input[type="radio"]:checked').val();
            //console.log(userinput)
              }

              

             
             questioncontainer.append('</fieldset>')
             
            $("#questions").append(questioncontainer);
        }
        $(document).on("click", "input:radio", function(){
            var selected_value = $(this).val();
            console.log(selected_value)//selected_value needs to be compared to the correct answer. Then if they are ===, increment correctf
           
        })
        
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
