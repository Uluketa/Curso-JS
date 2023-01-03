// Data em milliseconds
const tresHoras = 60 * 60 * 3 * 1000; 

// 0 + data em milliseconds
const data = new Date(0 + tresHoras);

// Ano - Mês - Dia - Hora - Minutos - Segundos - Milliseconds
const data2 = new Date(2019, 03, 20, 15, 14, 27, 500);

// Outro formato de mandar datas
const data3 = new Date('2020-03-20 20:20:58');

console.log(data3.toString());
console.log('Dia', data3.getDate());
console.log('Mês', data3.getMonth() + 1);
console.log('Ano', data3.getFullYear());
console.log('Hora', data3.getHours());
console.log('Minutos', data3.getMinutes());
console.log('Segundos', data3.getSeconds());
console.log('Dia da semana', data3.getDay()); // 0 domingo - 6 sábado

console.log( )