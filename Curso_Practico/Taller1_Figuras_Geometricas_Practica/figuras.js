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

function alturaIsosceles(lado1, lado2, lado3){
    const textoError = "Ingrese de nuevo valores de un triangulo isosceles";
    if(lado1 == lado2 && lado1 != lado3 && lado2 != lado3 ){
        return Math.sqrt( Math.pow(lado1,2) - Math.pow((lado3/2),2));
    }else if(lado1 == lado3 && lado1 != lado2 && lado3 != lado2 ){
        return Math.sqrt( Math.pow(lado1,2) - Math.pow((lado2/2),2));
    }else if(lado2 == lado3 && lado2 != lado1 && lado2 != lado1 ){
        return Math.sqrt( Math.pow(lado2,2) - Math.pow((lado1/2),2));
    }else return textoError;
}

function calculoAlturaIsosceles(){
    const input1 = document.getElementById("inputLadoTriangulo1");
    const valorLado1 = input1.value;
    const input2 = document.getElementById("inputLadoTriangulo2");
    const valorLado2 = input2.value;
    const input3 = document.getElementById("inputLadoTriangulo3");
    const valorLado3 = input3.value;
    let resultado = 0;

    resultado = alturaIsosceles(valorLado1, valorLado2, valorLado3);
    console.log(resultado);
    alert(resultado);
}