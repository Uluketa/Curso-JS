import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function(){
    const cpfValido = new GeraCPF();
    const divCPF = document.querySelector('.cpf-gerado');

    divCPF.innerText = cpfValido.geraNovoCPF();
})()