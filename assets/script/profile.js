// const hello_message = "hello".split("");



// function hello(){
//     for(let i = 0; i < hello_message.length; i++){
//         let char = hello_message[i];
//         push_char(i);
//     }

//     for(let i = 0; i < hello_message.length; i++){
//         let char = hello_message[i];
//         //flatten(i);   
//         //fade_char(i);
//     }

//     $("#hello").css("z-index", -1);
    

// }



// function add_hello(){
//     for(let i = 0; i < hello_message.length; i++){
//         $("#hello").append(create_char(hello_message[i], i));
//     }
// }


// function create_char(char, i){
//     return `
//         <span id = "${i}" class = "char"> ${char} </span>
//     `;
// }




// function push_char(id){
//     $("#" + id + "").fadeTo(4000, 100, function(){
//         console.log(`Fade ${id}`);
//     });
// }

// function fade_char(id){
//     $("#" + id + "").fadeTo(5000, 0, function(){
        
//     });
// }

// function flatten(id){
//     $("#" + id + "").animate({height: "0px"}, 5000);
// }




// add_hello();

// hello();



$("#home").on("click", function(){

    let new_window = window.open("index.html", "_blank");
    if(new_window){
        new_window.focus();
    }
    else{
        alert("Error opening new window.");
    }
});


$("#contact").on("click", function(){
    
    let new_window = window.open("contact.html", "_blank");
    if(new_window){
        new_window.focus();
    }
    else{
        alert("Error opening new window.");
    }
});


$("#portfolio").on("click", function(){
    
    let new_window = window.open("portfolio.html", "_blank");
    if(new_window){
        new_window.focus();
    }
    else{
        alert("Error opening new window.");
    }
});

