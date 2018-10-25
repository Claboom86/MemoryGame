"use strict";

$(document).ready(() => {
    $(document).on("click", ".start-btn", (event) => {

        setInterval(updateDisplay, 1000);
        function updateDisplay() {
            var value = parseInt($("#timer").find(".value").text(), 10);
            value++;
            $("#timer").find(".value").text(value);
        }



    })
})