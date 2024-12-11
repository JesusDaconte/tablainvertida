function invertirTabla() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = sheet.getDataRange(); // Selecciona todo el rango con datos
  var values = range.getValues(); // Obtén los datos como una matriz

  // Mantener la fila de encabezados y voltear el resto
  var headers = values[0]; // Primera fila como encabezados
  var data = values.slice(1).reverse(); // Invertir las filas de datos

  // Combinar encabezados con datos invertidos
  var invertedTable = [headers].concat(data);

  // Sobrescribir los datos en la hoja
  range.clear(); // Limpia el contenido actual
  sheet.getRange(1, 1, invertedTable.length, invertedTable[0].length).setValues(invertedTable);
}
