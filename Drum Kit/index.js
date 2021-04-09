// addeventListener listens to the instruction mentioned and then if that instruction happens then it calls the function mentioned.

// ONE-WAY
// document.querySelector("button").addEventListener("click", handle_click);

// function handle_click() {
//     alert("I got a click");
// }

// ANOTHER-WAY by using anonymous function

// document.querySelector("button").addEventListener("click", function() {
//     alert("I got a click");
// });

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonpress = this.innerHTML;
        makeSound(buttonpress);
        buttonAnimation(buttonpress);
    });
}

document.addEventListener("keydown", function(event) {
    // var key = event;
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(currkey) {
    var activebutton = document.querySelector("." + currkey);
    activebutton.classList.add("pressed");

    setTimeout(function() {
        activebutton.classList.remove("pressed");
    }, 200);
}