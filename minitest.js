{
    let objA = {
        xx: '123',
        yy: 100
    }

    let objB = objA;

    objB.xx = '456';

    let objC = {
        xx: '456',
        yy: 100
    }

    // console.log(objA);
    console.log(objA === objB);
    console.log(objB === objC);
}



// let x=;
var scope = 'global';

function f() {
    console.log(scope);
    var scope = 'local';
    console.log(scope);
}
// f();



{
    let a11 = 123;

    function checkScope() {
        var a11 = 'tell me !!.'; //this is global
        console.log(a11);
        a12 = 'this is global either.'; //this is global either.
        console.log('new global print:' + a12);

    }

    // checkScope();
    // console.log(a11);
}

// console.log(a11);

//function Scope
function varTest() {
    var a = 1;
    if (true) {
        var a = 100;
        console.log(a);
    }

    console.log(`origin: ${a}`);


}

// varTest();

// block scope
function letTest() {
    let x = 1;
    if (true) {
        let x = 100;
        console.log(x);
    }
    console.log(`origin:${x}`);
}

// letTest();