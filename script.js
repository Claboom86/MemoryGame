"use strict";

$(document).ready(() => {
    var classes = ["blue", "blue", "green", "green", "red", "red", "purple", "purple", "orange", "orange", "pink", "pink"];
    var randomClass = [];

    $(".start-btn").on("click", (event) => {
        $(".start-menu").hide();

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
    });




    // $(".start-btn").on("click", (event) => {
    //     $(".start-menu").hide();

    //     $(".back").each(function() {

    //         while (classes.length) {
    //             var index = Math.floor(Math.random() * classes.length);
    //             console.log(index);
    //             console.log(event.target);
    //             $(this).addClass(classes[index]);
    //             classes.splice(index, 1);
    //         }
    //     });

    // while (classes.length) {
    //     var index = Math.floor(Math.random() * classes.length);
    //     console.log(index);
    //     classes.splice(index, 1);


    //     $(".back").each(function() {
    //         // console.log("yay!");
    //         $(this).addClass(classes[index]);
    //     //     classes.splice(index, 1);
    //     });
    // }

    // $(".back").each(function() {
    //     $(this).addClass(classes[Math.floor((Math.random() * 5, 1) + 0)]);
    //     classes.splice()
    // });
    // });




});
