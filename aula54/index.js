function f1(callback){
    setTimeout(() => {
        console.log('Função 01');
        if (callback) callback();
    }, 500);
}

function f2(callback){
    setTimeout(() => {
        console.log('Função 02');
        if (callback) callback();
    }, 500);
}

function f3(callback){
    setTimeout(() => {
        console.log('Função 03');
        if (callback) callback();
    }, 500);
}

f1(() => {
    f2(() => {
        f3(() => {
            console.log('Olá mundo!');
        });
    });
});