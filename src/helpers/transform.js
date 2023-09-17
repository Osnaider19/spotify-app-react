export function transformDuration(milisegundos) {
  const segundosTotales = Math.floor(milisegundos / 1000);
  const minutos = Math.floor(segundosTotales / 60);
  const segundos = segundosTotales % 60;
  return minutos + ":" + (segundos < 10 ? "0" : "") + segundos; // Añadir un cero si los
}
export function transformDate(fecha) {
  const fechaActual = new Date();
  const fechaDada = new Date(fecha);
  const diferencia = fechaActual - fechaDada;
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

  if (dias === 0) {
    return "hoy";
  } else if (dias === 1) {
    return "ayer";
  } else if (dias < 7) {
    return "hace " + dias + " días";
  } else if (dias < 30) {
    var semanas = Math.floor(dias / 7);
    return "hace " + semanas + (semanas === 1 ? " semana" : " semanas");
  } else {
    const meses = Math.floor(dias / 30);
    return "hace " + meses + (meses === 1 ? " mes" : " meses");
  }
}


export function transformLikes(numero) {
  return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

