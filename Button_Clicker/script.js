// ---------scripts-----------

function remove(element){
    element.remove()
}

function logout(element){
    if (element.innerText == "Login"){
    element.innerText = "Logout"
    } else {
        element.innerText = "Login"
    }
}

function liked(element) {
    alert('Ninja was liked')
}
