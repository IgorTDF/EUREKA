const Claveregistrada: string = "eureka";
let contador: number = 0;

while (contador < 3) {
  let clavecorrecta: string | null = prompt("Ingrese su clave");
  if (Claveregistrada === clavecorrecta) {
    contador = 3;
    console.log("SALIENDO DEL SISTEMA");
  } else {
    contador = contador + 1;
    if (contador < 3) {
      alert("clave incorrecta, intente nuevamente");
    }
  }
}
if (clavecorrecta !== Claveregistrada);
{
  alert("se han agotado todos los intentos");
}
