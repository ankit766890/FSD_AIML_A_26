const num=[11,12,13,22,78,91,23];
const even=num.filter((i)=>(i%2==0))
console.log("num=",num);
console.log("even=",even);
const square=even.map((i)=>(i*i))
console.log("Square=",square);
const sum=square.reduce((i,s)=>(i+s));
console.log("Sum=",sum);