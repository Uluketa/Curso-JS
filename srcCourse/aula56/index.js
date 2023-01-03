// Factory function

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,

        sobrenome,

        // GETTER
        get nomeCompleto() {
            return `${nome} ${sobrenome}`
        },

        // SETTER
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto) {
            return `${nome} está ${assunto}.`;
        },

        altura,

        peso,

        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}


const pessoa1 = criaPessoa('Karen', 'Cristina', 1.70, 75);
const pessoa2 = criaPessoa('Lucas', 'Miguel', 1.83, 70);

console.log(pessoa1.fala('falando sobre JS'));
pessoa1.nomeCompleto = 'Karen Cristina de Arruda';
console.log(pessoa1.nomeCompleto);