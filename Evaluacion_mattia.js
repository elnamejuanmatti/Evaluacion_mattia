// Variables para almacenar la posición de los círculos
let xRojo = 300; 
let yRojo = 300;
let xAzul = 300;
let yAzul = 300;
// Variables para almacenar la velocidad de los círculos
let velocidadXRojo = 4;
let velocidadYRojo = 4;
let velocidadXAzul = 2;
let velocidadYAzul = 2;
// Variables para almacenar el color de los círculos
let colorRojo = [255, 0, 0]; // Rojo
let colorAzul = [0, 0, 255]; // Azul
function setup() {
  //medidas del cuadro
  createCanvas(600, 600);
}
function draw() {
  //fondo del color del cuadradado
  background(100);
  // Dibuja el círculo rojo
  fill(colorRojo);
  ellipse(xRojo, yRojo, 50);
  // Dibuja el círculo azul
  fill(colorAzul);
  ellipse(xAzul, yAzul, 50);
  // actualiza los círculos
  xRojo -= velocidadXRojo;
  yRojo -= velocidadYRojo;
  xAzul -= velocidadXAzul;
  yAzul += velocidadYAzul;
  // Comprueba si el círculo rojo  golpea algún borde
  if (xRojo <= 10 || xRojo >= width || yRojo <= 10 || yRojo >= height) {
    // esto rebota al cuadrado
    velocidadXRojo = -velocidadXRojo;
    velocidadYRojo = -velocidadYRojo;
    // Cambia el color del círculo rojo
    colorRojo = [random(255), 0, 0];
  }
  // Comprueba si el círculo azul golpea algún borde
  if (xAzul <= 10 || xAzul >= width || yAzul <= 10 || yAzul >= height) {
    // esto rebota al cuadrado
    velocidadXAzul = -velocidadXAzul;
    velocidadYAzul = -velocidadYAzul;
    // Cambia el color del círculo azul
    colorAzul = [0, 0, random(255)];
  }
}
