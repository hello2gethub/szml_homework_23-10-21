const bar = {
    foo(){
        console.log('foo');
    }
};
bar.foo = 'foo';
bar.foo();  
console.log(bar);  // TypeError: bar.foo is not a function

// npm install typescript -g