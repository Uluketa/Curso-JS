// Polimorfismo

function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if (this.saldo < valor){
        console.log('Saldo insuficiente!');
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c ${this.agencia} ${this.conta} \nSaldo: ${this.saldo}`);
}

const conta1 = new Conta('PicPay', 20938, 1000);

conta1.sacar(100);