/*
    Danielle Smith
    index.js -- creates opening splash animation for the home page, and controls the navigation of the buttons.
*/




const splash_message = "I welcome you".split("");



$("#splash").on("click", function(){
    console.log("User clicked splash.");

    fade_splash()
});



$("#portfolio").on("click", function(){
    let new_window = window.open("portfolio.html", "_blank");
    if(new_window){
        new_window.focus();
    }
    else{
        alert("Opening new window failed.");
    }
});


$("#contact").on("click", function(){
    let new_window = window.open("contact.html", "_blank");
    if(new_window){
        new_window.focus();
    }
    else{
        alert("Opening new window failed.");
    }
});




$("#profile").on("click", function(){
    let new_window = window.open("profile.html", "_blank");
    if(new_window){
        new_window.focus();
    }
    else{
        alert("Opening new window failed.");
    }
});

function wait(seconds){
    setTimeout(seconds * 1000);
}

function build_character(c){
    if(c == " "){
        return `<span id = "_" class = "character">${c}</span>`;
    }
    return `<span id = ${c} class = "character">${c}</span>`;
}


function create_splash(){
    for(let i = 0; i < splash_message.length; i++){
        $("#splash").append(build_character(splash_message[i]));
    }
}


function fade_splash(){
    for(let i = 0; i < splash_message.length; i++){
        let char = splash_message[i];
        if(char == " "){
            char = "_";
        }
        $("#" + char + "").fadeTo(2000, 0, function(){
            console.log(`Fade ${char}`);
        });
           
    $("#" + char + "").promise().done(function(){
    
    });

    }
     
    $("#splash").fadeTo(3000, 0, function(){
        //console.log("Fade splash.");
        $("#splash").css("z-index", -1);
    });
}



create_splash();


