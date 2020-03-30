function onOff() {
    document
        .querySelector("#modal")
        .classList
        /*Coloca e tira uma propriedade*/
        .toggle("hide")

    document 
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")

}

//Validações

function checkFields(event) {

    const valuesToCheck = [
        "title",
        "category",
        "image",
        "description",
        "link",
    ]

    const isEmpty = valuesToCheck.find(function(value) {

        const checkIfIsString = typeof event.target[value].value === "string"
        const checIfIsEmpty = !event.target[value].value.trim()
        if(checkIfIsString && checIfIsEmpty) {
            return true
        }

    })

    if(isEmpty) {
        event.preventDefault()
        alert("Por Favor, Insira todos os campos")
    }
}

