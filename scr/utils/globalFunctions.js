  /**
 * Esta función formatea la fecha recibida en formato "DD-MM-YYYY hh:mm:ss"
 */
export function formatFechaBase (fechaIn){
    let fecha = new Date(fechaIn.toMillis());
    let anio = fecha.getFullYear()
    let mes = (fecha.getMonth() + 1 < 10) ? '0' + (fecha.getMonth() + 1) : fecha.getMonth() + 1;
    let dia = (fecha.getDate()< 10) ? '0' + fecha.getDate() : fecha.getDate();
    let fechaFinal = dia + "/" + mes + "/" + anio + " " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
  return fechaFinal
};

/**
 * Esta función ayuda a recortar el texto cuando se excede el tamaño del texto
 */
   export function textWrapper(text = "", length){
    if (text.length > length) {
      return text.substring(0, length) + "...";
    } else {
      return text;
    }
  };
