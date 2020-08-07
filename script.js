let num = 266219,
res = 1;

while(num) {
    res *= num % 10;
    num = Math.floor(num / 10);
} 

console.log('Результат: ', res);
res **= 3;
console.log('Результат в третьей степени: ', res);
console.log(String(res).slice(0,2));