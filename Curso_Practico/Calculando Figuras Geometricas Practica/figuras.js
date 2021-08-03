function perimetroCuadrado(){
    const input = document.getElementById("inputLadoCuadrado");
    const valorLado = input.value;
    const perimetro = valorLado * 4;
    alert(perimetro);
};

function areaCuadrado(){
    const input = document.getElementById("inputLadoCuadrado");
    const valorLado = input.value;
    const area = valorLado * valorLado;
    alert(area);
};