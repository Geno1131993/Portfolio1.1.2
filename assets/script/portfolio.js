

function get_repos(){
    axios
        .get("https://api.github.com/users/Geno1131993/repos")
        .then(function(response){
            for(let i = 0; i < response.data.length; i++){
                repo = response.data[i];
                $("#container").append(build_repo_template(repo));
            }
        });
}



function build_repo_template(repo){
    let description = repo["description"];
    let name = repo["name"];
    let url = repo["html_url"];
    let image_name = image();
    return `
    <div class = "tile is-ancestor">
        <div class = "tile is-horizontal is-12">
            <div class = "tile repo ${name}">
                <div class = "${image_name} sprite tile is-child is-3">
                    <img src = "${sprites()[image_name]}" class = "image">
                </div>
                <div class = "info tile is-child is-9">
                    <div id = "${name}" class = "repo_name info_text"> ${name} </div>
                    <div id = "${description}" class = "repo_description info_text"> ${description} </div>
                    <div id = "${url}" class = "button link"> GitHub Repository </div>
                 </div>
            </div>
        </div>
    </div>
    `;
}



function image(){
    let key = Math.floor((Math.random() * 4) + 1);
    switch(key){
        case 1:
            return "mario";
        case 2:
            return "mushroom";
        case 3:
            return "yoshi";
        case 4:
            return "dragonball";
    }
    return -1;
}



function sprites(){
    return {
        mario: "./assets/images/mario.jpg",
        mushroom: "./assets/images/mushroom.png",
        dragonball: "./assets/images/dragonball.jpg",
        yoshi: "./assets/images/yoshi.jpg"
    };
}



get_repos();



$(document).on("click", ".link", function(){
    let new_window = window.open($(this).attr("id"), "_blank");
    if(new_window){
        new_window.focus();
    }
    else{
        alert(`Error opening Github page: ${$(this).attr("id")}`);
    }
});



$(document).on("click", "#home", function(){
    let new_window = window.open("index.html", "_blank");
    if(new_window){
        new_window.focus();
    }
    else{
        alert("Error opening new window.");
    }
});






$(document).on("click", "#profile", function(){
    let new_window = window.open("profile.html", "_blank");
    if(new_window){
        new_window.focus();
    }
    else{
        alert("Error opening new window.");
    }
});




$(document).on("click", "#contact", function(){
    let new_window = window.open("contact.html", "_blank");
    if(new_window){
        new_window.focus();
    }
    else{
        alert("Error opening new window.");
    }
});

