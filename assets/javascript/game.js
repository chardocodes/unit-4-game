


//declaring object as a game. setting properties. 
var game = {
    randomNumber: 0,
    totalNumber: 0,
    start: function () {
        //generating a random number.
        this.randomNumber = this.generateRandomNumber(19, 120);

        //displaying random number and current totals.
        $("#random-number").text(this.randomNumber);
        $("#current-total").text(this.totalNumber);

        // making my crystal buttons
        for (var i = 0; i < 4; i++) {
            var btn = $("<button>");
            btn.addClass("btn btn-secondary");
            btn.val(this.generateRandomNumber(1, 12));

            btn.text("gem");
            $("#button-container").append(btn);

        }
    },

    reset: function () {
        $("#button-container").empty();
        this.totalNumber = 0;
        this.start();

    },

    generateRandomNumber: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;

    }
};
//--------------------------------click to start
game.start();
//
// I don't understand why my buttons don't work. 
//I want my buttons, when clicked to add to the tally of the current total. I am feeling like I am lost in space. 





$(".random-btn").on("click", function () {
    var btnValue = parseInt($(this).val());
    totalNumber += btnValue;
    console.log(btnValue);
    $("#total-number").text(totalNumber);
    //console.log(btnValue);
    // if the totalNumber matches the randomNumber 
    if (totalNumber === randomNumber) {
        wins++;
        $("#victories").html(Wins);

        // we win 


        // resets the game
        game.reset();
    } else if (game.totalNumber > game.randomNumber) {
        losses--;
        $("#defeats").html(Losses)

        // resets the game
        game.reset();
    }
});

