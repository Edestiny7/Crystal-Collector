$(function() {

    // variables
    let wins = 0;
    let losses = 0;
    let userScore = 0;
    let crystalSelector;

    let gameSetUp = function() {
        $(".crystals").empty();
        userScore = 0;
        $("#userScore").text(userScore);
        $("#wins").html(wins);
        $("#losses").html(losses);

        var images = [
            'https://st.hzcdn.com/fimgs/eb61305508af56a5_1866-w300-h300-b1-p0--.jpg',
            'https://cdn.shopify.com/s/files/1/1402/7901/products/20217846_1_large.jpg?v=1545117560',
            'https://cdn.shopify.com/s/files/1/0990/5936/products/700cb6e9-6bb2-574b-93c4-b5e60dfa4698_large.jpg?v=1504354820',
            'https://images-na.ssl-images-amazon.com/images/I/41Mzn1Bws1L._SL500_AC_SS350_.jpg'
        ];

        // Random value between 19 & 120 for 'Number to Match'
        crystalSelector = Math.floor(Math.random() * 102) + 19;
        // Display value for 'Number to Match'
        $("#crystalSelector").html(crystalSelector);

        // Creates crystals and their values between 1 & 12
        for (i = 0; i < 4; i++) {
            let random = Math.floor(Math.random() * 12) + 1;
            console.log(random);
            let crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });
            // Each crystals image
            crystal.css({
                "background-image": "url('" + images[i] + "')",
                "background-size": "cover"
            });
            $(".crystals").append(crystal);
        }
    }

    // Run the game set up
    gameSetUp();

    // Event delegation needed b/c crystals are emptied after wins & losses
    $(document).on('click', ".crystal", function() {
        // Change to int from string
        let num = parseInt($(this).attr('data-random'));

        // Increment userScore with value of crystal clicked
        userScore += num;
        // Display value for 'Your Total'
        $("#userScore").text(userScore);

        // Conditional if user wins
        if (userScore === crystalSelector) {
            // increment wins
            wins++;

            // displays updated wins
            $("#wins").html(wins);

            // Resets the game
            gameSetUp();

            // Conditional else if user loses
        } else if (userScore > crystalSelector) {
            // increments losses
            losses++;

            // displays updated losses
            $("#losses").html(losses);

            // Resets the game
            gameSetUp();
        } else {
            // Keep playing otherwise
            return;
        }
    })
});