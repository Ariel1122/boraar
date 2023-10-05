// let pelotas = [];
let pel1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // for (let i = 0; i < 5; i++) {
  //   // Puedes ajustar el número de pelotas que deseas
  //   pelotas.push(new Pelota());
  // }
  pel1 = new Pelota();
}

function draw() {
  background(0, 200, 150, 70);

  // for (let pelota of pelotas) {
  //   pelota.update();
  //   pelota.display();
  // }
  pel1.update();
  pel1.display();
}

class Pelota {
  constructor(_x, _y) {
    this.posX = windowWidth / 2;
    this.posY = windowHeight * 0.2;
    // this.posX = _x;
    // this.posY = _y;
    this.diam = random(10, 50);
    this.rad = this.diam / 2;
    this.velY = 0;
    this.acel = 0.98;
    this.margen = 50;
    this.esp = 34;
    this.piso = windowHeight - this.margen - this.esp / 2;
    rectMode(CENTER);
  }

  update() {
    this.velY += this.acel;
    this.posY += this.velY;

    if (this.posY >= this.piso - this.rad) {
      print("ya");
      this.posY = this.piso - this.rad;
      this.velY *= -1;
    }
  }

  display() {
    noStroke();
    fill(255);
    circle(this.posX, this.posY, this.diam);

    fill(255, 0, 0);
    rect(windowWidth / 2, windowHeight - this.margen, windowWidth, this.esp);
    // ES NECESARIO EL WINDOW?
  }
}

// blue printe, se conoce al metedo, o plano de contruccion, en este caso el plano es la clase que contienen todos los elementos de codificacion, con el cual podemos repetir el objeto sin usando el mismo plano.
// OOP - OBJECT ORIENTED PROGRAMING /PROGRAMACION ORIENTADA A OBJETOS.
// ENCALUPSACION - EN EL CUAL TRBAJAMOS,(la funcion de update), encapsular una funcionalidad en una accion.
// HERENCIA
// POLIRMOFISMO-A SUS CARACTERISTICAS DE UN ELEMENTO PRINCIPAL O SUS SUBELEMENTOS HEREDADOS
//
