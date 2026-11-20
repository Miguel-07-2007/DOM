const carta = document.getElementById("carta")
const select = document.querySelector(".form-select")
select.addEventListener("change", function(){
    let color = select.value
    if (color == "blue"){
        carta.style.backgroundColor = "blue";
    }
    else if (color == "red"){
        carta.style.backgroundColor = "red";
    }
    else if (color == "green"){
        carta.style.backgroundColor = "green";
    }
    
})
