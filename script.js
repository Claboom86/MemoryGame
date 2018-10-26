"use strict";

$(document).ready(() => {
    let compare = [];
    let clickCount = 0;

    function assignRandomCards() {
        var classes = ["blue", "blue", "green", "green", "red", "red", "purple", "purple", "orange", "orange", "pink", "pink"];
        let randomClass = [];
        let i = classes.length
        let j = 0;

        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            randomClass.push(classes[j]);
            classes.splice(j, 1);
        }
        console.log(randomClass);

        $(".back").each(function () {
            var newClassIndex = this.id;
            switch (newClassIndex) {
                case "card-one":
                    $("#card-one").addClass(randomClass[0]);
                    break;
                case "card-two":
                    $("#card-two").addClass(randomClass[1]);
                    break;
                case "card-three":
                    $("#card-three").addClass(randomClass[2]);
                    break;
                case "card-four":
                    $("#card-four").addClass(randomClass[3]);
                    break;
                case "card-five":
                    $("#card-five").addClass(randomClass[4]);
                    break;
                case "card-six":
                    $("#card-six").addClass(randomClass[5]);
                    break;
                case "card-seven":
                    $("#card-seven").addClass(randomClass[6]);
                    break;
                case "card-eight":
                    $("#card-eight").addClass(randomClass[7]);
                    break;
                case "card-nine":
                    $("#card-nine").addClass(randomClass[8]);
                    break;
                case "card-ten":
                    $("#card-ten").addClass(randomClass[9]);
                    break;
                case "card-eleven":
                    $("#card-eleven").addClass(randomClass[10]);
                    break;
                case "card-twelve":
                    $("#card-twelve").addClass(randomClass[11]);
                    break;
            }
        })
    }
let time = 0;
let keepScore = 0;
    function timerSet() {
        keepScore = setInterval(updateDisplay, 1000);
        function updateDisplay() {
            var value = parseInt($("#timer").find(".value").text(), 10);
            value++;
            $("#timer").find(".value").text(value);
            time = $("#timer").find(".value").text();
        }
    };

    $(".start-btn").on("click", (event) => {
        $(".start-menu").hide();
        assignRandomCards();
    });

    $(document).on("click", ".reset-btn", (event) => {
        location.reload();
    });


    $(document).on("click", ".start-btn", (event) => {
        timerSet();
    });

    var clickEvent = function () {
        $(document).on("click", ".front", (event) => {
            clickCount++;
            $(event.target).parent().addClass("flipped");
            compare.push($(event.target).siblings().attr("class"));
            console.log(compare);
            console.log(clickCount);
            if (clickCount === 2) {
                setTimeout(checkMatch, 2000);
                console.log("You've clicked twice");
                $(document).off("click", ".front");
                clickCount = 0;
            } else {
                console.log("you need more clicks!");
            }
        })
    };

let matchCount = 0;
clickEvent();


    function checkMatch() {
        
        // console.log(matchCount);
        if (compare[0] === compare[1]) {
            $(".flipped").children().attr("id", "matched");
            compare.length = 0;
            clickCount = 0;
            matchCount++;
            clickEvent();
            console.log(matchCount);
            if (matchCount === 6){              
                 clearInterval(keepScore);
                 displayWin();
            }
            return;
        }
        
        else {    
          $(".flipped").removeClass("flipped");
            console.log("test");
            compare.length = 0;
            clickCount = 0;
            clickEvent();
            return;
        } 

        clickCount = 0;
        
    }
  
    const displayWin = () => {
        $(".winMessage").css("display", "block");
        $(".prince").css("display", "block");
        $(".time").text(`It took you ${time} seconds to rescue the prince!`);
        console.log(time);
    }
   
});

