class Pessoa {
    constructor (nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está hablando`);
    }

    comer(){
        console.log(`${this.nome} está comendo una pizza`);
    }

    beber(){
        console.log(`${this.nome} está bebendo water`);
    }
}

const p1 = new Pessoa('Lucas', 'Miguel');
p1.beber();