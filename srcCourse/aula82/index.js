class DispositoEletronico {
    constructor(nome, marca){
        this.nome = nome;
        this.marca = marca;
    }

    tipoModelo(){
        if (this.nome === 's10') {
            this.modelo = 'Avançado';
            return;
        }
        
        this.modelo = 'Básico';
    }
}

class Smartphone extends DispositoEletronico{
    constructor(nome, preco){
        super(nome);
        this.preco = preco;
    }
    
    especificacao(){ console.log(`O ${this.nome} está custando ${this.preco}`);}
}

const s10 = new Smartphone('S10', 1500);

s10.especificacao();