

var cardsDiv = document.querySelector("#cards");
var currentUsername = "";

function getUsername(element) {
    console.log(element.value);
    currentUsername = element.value;
}

function makeCoderCard(data) {
    var res =   `<div class="card">
                    <img src="${data.avatar_url}" alt="${data.login}">
                    <div class="flex1">
                        <h3>${data.name} - ${data.login}</h3>
                        <p>location : ${data.location}</p>
                        <p>Public repos: ${data.public_repos}</p>
                    </div>
                </div>`
    return res;
}

async function search() {
    var response = await fetch("https://api.github.com/users/" + currentUsername);
    var coderData = await response.json();
    // console.log(coderData);
    cardsDiv.innerHTML = makeCoderCard(coderData) + cardsDiv.innerHTML;
}