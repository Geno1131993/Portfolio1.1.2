

function get_repos(){
    axios
        .get("http://api.github.com/users/Geno1131993")
        .then(function(response){
            response = response.data;
            console.log(response);
            $("#username").append(response["login"]);
            $("#repos").append(response["public_repos"]);
    });

}



get_repos();





$("#home").on("click", function(){
    let new_window = window.open("index.html", "_blank");
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



$("#profile").on("click", function(){
    let new_window = window.open("profile.html", "_blank");
    if(new_window){
        new_window.focus();
    }
    else{
        alert("Error opening new window.");
    }
});