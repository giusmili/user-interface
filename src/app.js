document.addEventListener("DOMContentLoaded", e =>{ // un écouteur js avec l'objet document
    console.log(e.target)

    /* prompt */
    let firstName, lastName, age, tabUser, element
        
        element = document.querySelector("section h2")

        firstName = String(window.prompt("Ajoutez votre nom",""))
        lastName = String(window.prompt("Ajoutez votre prénom",""))
        age = Number(window.prompt("Ajoutez votre age",""))

        tabUser = []

        tabUser.push(firstName, lastName, age)

        console.info(tabUser)

        /* zone de stockage */

        element.innerHTML = `🚀 Bonjour <strong>${lastName}</strong> voici vos données`

        localStorage.setItem("user", JSON.stringify(tabUser)) /* item + valeur */


})