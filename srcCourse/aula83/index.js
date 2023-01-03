class Smartphone extends DispositoEletronico{
    constructor(nome, preco, tempoUso){
        super(nome);
        this.preco = preco;
        this.tempoUso = tempoUso;
    }
    
    // Método de instância
    especificacao(){ 
        console.log(`O ${this.nome} está custando ${this.preco}`);
    }

    // Método de estático
    static trocaCelular() {
        
    }
}