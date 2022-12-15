// ? :

const pontuacaoUsuario = 1000;

if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('User Normal');
}

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';