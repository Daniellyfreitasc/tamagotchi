class Tamagotchi {
  constructor() {
    this.felicidade = 100;
    this.fome = 0;
    this.estaVivo = true;
    this.interval = null;
  }

  alimentar() {
    if (!this.estaVivo) {
      console.log("Seu tamagotchi está morto.");
      return;
    }

    this.fome -= 10;
    if (this.fome < 0) {
      this.fome = 0;
    }

    console.log("Você alimentou o tamagotchi.");
    this.atualizarEstado();
  }

  acariciar() {
    if (!this.estaVivo) {
      console.log("Seu tamagotchi está morto.");
      return;
    }

    this.felicidade += 10;
    if (this.felicidade > 100) {
      this.felicidade = 100;
    }

    console.log("Você acariciou o tamagotchi.");
    this.atualizarEstado();
  }

  passear() {
    if (!this.estaVivo) {
      console.log("Seu tamagotchi está morto.");
      return;
    }

    this.felicidade += 5;
    if (this.felicidade > 100) {
      this.felicidade = 100;
    }

    this.fome += 5;
    if (this.fome > 100) {
      this.fome = 100;
    }

    console.log("Você levou o tamagotchi para passear.");
    this.atualizarEstado();
  }

  trocarRoupa() {
    if (!this.estaVivo) {
      console.log("Seu tamagotchi está morto.");
      return;
    }

    console.log("Você trocou a roupa do tamagotchi.");
    this.atualizarEstado();
  }

  tomarBanho() {
    if (!this.estaVivo) {
      console.log("Seu tamagotchi está morto.");
      return;
    }

    this.felicidade += 2;
    if (this.felicidade > 100) {
      this.felicidade = 100;
    }

    console.log("Você deu banho no tamagotchi.");
    this.atualizarEstado();
  }

  iniciar() {
    console.log("Seu tamagotchi está vivo e pronto para interação!");

    this.interval = setInterval(() => {
      this.felicidade -= 1;
      this.fome += 1;

      if (this.fome >= 100 || this.felicidade <= 0) {
        this.morrer();
      }

      this.atualizarEstado();
    }, 30000);
  }

  morrer() {
    this.estaVivo = false;
    clearInterval(this.interval);
    console.log("Seu tamagotchi morreu. Game over!");
  }

  atualizarEstado() {
    console.log(`Felicidade: ${this.felicidade}`);
    console.log(`Fome: ${this.fome}`);
  }
}

// Uso do programa
const tamagotchi = new Tamagotchi();
tamagotchi.iniciar();

// Exemplos de interações
tamagotchi.alimentar();
tamagotchi.acariciar();
tamagotchi.passear();
tamagotchi.trocarRoupa();
tamagotchi.tomarBanho();
