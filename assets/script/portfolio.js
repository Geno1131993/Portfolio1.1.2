function get_repos(){
    console.log("From get_repos");
    axios
        .get("http://api.github.com/users/Geno1131993/repos")
        .then(function(response){
           //console.log(response.data);
            for(let i = 0; i < response.data.length; i++){
                repo = response.data[i];


                $("#container").append(build_repo_template(repo));

                //build_repo_template(repo);
            }
        });
}



function build_repo_template(repo){
//    console.log(repo);
    let description = repo["description"];
    let name = repo["name"];
    let link = repo["html_url"];
    //console.log(sprites());
    let image_name = image();
    console.log(sprites()[image_name]);
    console.log(image_name);
    return `
    <div class = "tile is-ancestor">
        <div class = "tile is-horizontal is-12">
            <div class = "tile repo ${name}">
                <article class = "${image_name} sprite tile is-child is-4">
                    <img src = "${sprites()[image_name]}" class = "image">
                </article>
                <article class = "repo tile is-child is-8">
                    <p id = "${name}" class = "repo_name"> ${name} </p>
                    <p id = "${description}" class = "repo_description"> ${description} </p>
                    <p class = "button url"> GitHub Repository </p>
                 </article>
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