/* Global: jQuery($) */

'use strict';

var quoteIndex = 0;

var quotes = [
    ["Above the sky there is another sky. Outside the sky there is also another sky", " - Chinese proverb"],
    ["Impossible is nothing. Doing the impossible is something", " - Spinoff from Nike's slogan"],
    "Be proud, but not prideful",
    "Modesty doesn't take you high, but it also doesn't take you low",
    "Not everything can be reasoned, nor do all things need to be reasoned",
    ["Do not withhold good from those to whom it is due, when it is in your power to act", " - Proverbs 3:27"],
    ["Why not?", " - University of Waterloo"],
    "If you want to be honored, then do honorable things",
    "What is good is not always comfortable",
    "Life doesn't need to be a competition",
    "Can \u2260 Should",
    "You may have your rights, but remember your responsibilities",
    "How can you understand others if you don't understand yourself?",
    "Action may speak louder than words, but it doesn't say everything",
    ["The past makes you wanna die out of regret and future makes you depressed out of anxiety. So by elimination, \
    the present is likely the happiest time.", " - Hachiman, Oregairu"],
    "Is the glass half-empty or half-full? Perhaps both, though it's more important to get the glass full",
    "There's a difference between not having a choice and feeling like not having one",
    ["Rich is 1% what you have 99% what you can do with it", " - Spinoff from Albert Einstein's quote"]
];

function updateQuote() {
    $('#quotes').fadeOut(function() {
        var quote = quotes[quoteIndex];
        if(Array.isArray(quote)) {
            $('#the-quote').text(quote[0]);
            $('#quoted-from').text(quote[1]);
        } else {
            $('#the-quote').text(quote);
            $('#quoted-from').empty();
        }
        $('#quotes').fadeIn();
        quoteIndex = (quoteIndex + 1) % quotes.length;
    });
}

$(document).ready(function() {
    updateQuote();
    setInterval(updateQuote, 4000);
});
