function getBotResponse(input) {
    var input=input.toLowerCase();
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello"||input == "hi")
    {

        return "Hello there!";
    }
    else if (input == "goodbye"||input == "bye")
    {
        return "Talk to you later!";
    }
    else if (input == "help"||input == "contact")
    {
        window.open("https://forms.gle/EUFqN7ytCjpfXNPY8", '_blank').focus();
        return "Check Your Browser Tabs"
    }
    else
    {
        return "Try asking something else!";
    }
}