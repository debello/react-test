let xtables = document.getElementById("tablas-bichos");
let peinados = document.getElementById("imagen-peinados");
function showTable() {
  xtables.style.display === "none" ? xtables.style.display = "block" : xtables.style.display = "none"
  peinados.style.display = "none"
}
function showTable2() {
  peinados.style.display === "none" ? peinados.style.display = "block" : peinados.style.display = "none"
  xtables.style.display = "none"
}