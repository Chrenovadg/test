// numero1 = document.querySelector("#numero1");

// console.log("hola mundo");

// variables: numero1, numero2

// selectores: getElementById, querySelector

// Operadores: +

document.getElementById("btn").onclick = () => {

    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;

    //console.log( parseInt(numero1) + parseInt( numero2));

    document.querySelector("#resultado").innerHTML = parseInt(numero1) + parseInt( numero2);
}

