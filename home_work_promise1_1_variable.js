console.log ('1 step');
console.log('2 step');

let a1 = new Promise((resolve,reject)=>setTimeout(() => {
    console.log('3 step');
    resolve();
}, 3000));

 a1.then(()=> {
    console.log('4 step');
    
});

