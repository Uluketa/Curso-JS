// Função recursiva - chama ela mesma de volta

function recursiva (max){
    if (max >= 150) return;
    max++;
    recursiva(max);
    console.log(max);
}

recursiva(0);