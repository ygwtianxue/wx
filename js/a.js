function fn1() {
    console.log('fn1');
}

var fn2 = function() {
    console.log('fn2');
}

fn1();
fn2();

var obj = {
    name: 'zs',
    say: function() {
        console.log('hello');
    }

}

obj.say();

setInterval(function() {
    console.log('hello setInterval');
}, 300);

setTimeout(function() {
    console.log('hello setTimeout');
}, 300);
//call   bind   apply   改变this
//其他的都是谁调用就是谁this