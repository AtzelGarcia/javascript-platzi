//Primera solucion
function calculoDescuento(precio, descuento) {
  const porcentajeDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajeDescuento) / 100;
  return precioConDescuento;
}

/* function precioFinal() {
  const inputPrecio = document.getElementById("inputPrecio");
  const valorPrecio = inputPrecio.value;
  const inputDescuento = document.getElementById("inputDescuento");
  const valorDescuento = inputDescuento.value;
  const textoPrecio = document.getElementById("resultadoDescuento");
  let precioConDescuento;
  precioConDescuento = calculoDescuento(valorPrecio, valorDescuento);
  textoPrecio.innerText =
    "El precio final con el descuento aplicado es: " + precioConDescuento;
} */

//Segunda solucion
const coupons = [
  {
    name: "cupon1",
    discount: 15,
  },
  {
    name: "cupon2",
    discount: 30,
  },
  {
    name: "cupon3",
    discount: 25,
  },
];

function validarCupon(valorCupon) {
  const isCouponValueValid = function (coupon) {
    return coupon.name === valorCupon;
  };
  const userCoupon = coupons.find(isCouponValueValid);
  return userCoupon;
}

function precioFinal() {
  const inputPrecio = document.getElementById("inputPrecio");
  const valorPrecio = inputPrecio.value;
  /*   const inputDescuento = document.getElementById("inputDescuento");
  const valorDescuento = inputDescuento.value; */
  const inputCupon = document.getElementById("inputCupon");
  const valorCupon = inputCupon.value;
  const textoPrecio = document.getElementById("resultadoDescuento");
  let precioConDescuento;
  let valorValidado;

  valorValidado = validarCupon(valorCupon);

  if (!valorValidado) {
    alert("El cupon --> " + valorCupon + "<-- no es valido");
  } else {
    precioConDescuento = calculoDescuento(valorPrecio, valorValidado.discount);
    textoPrecio.innerText =
      "El precio final con el descuento aplicado es: " + precioConDescuento;
  }
}
