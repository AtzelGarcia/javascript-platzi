const lista = [5,5,4,2,1,2,3,4]


function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //   sumaLista = sumaLista + lista[i];
    // }
  
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
  
    const promedioLista = sumaLista / lista.length;
  
    return promedioLista;
  }

  function resultadoMediaAritmetica(){
      const resultado = calcularMediaAritmetica(lista);
      const objetoP = document.getElementById("resultadoPromedio");
      objetoP.innerText = "El resultado del promedio es: " + resultado;
  }