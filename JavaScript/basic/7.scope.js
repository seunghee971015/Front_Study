/**
 * Scope
 */

var number1 = 20; //전역에 생성됨(window객체 기반)

function test1(){
    console.log(number1);
}

//test1();

function test2(){
    var number1 = 40;
    console.log(number1);
}

//test2();

function test3(){
    var number1 = 40;

    function test4(){
        var number2 = 11;

        console.log('number2 : ' + number2);
        console.log('number1 : ' + number1);
    }

    test4();
    console.log('number1 : ' + number1);
}

test3();
console.log(number1)

/**
 * JS -> Lexical Scope
 * 선언된 위치가 상위 스코프를 정한다.
 * 
 * Dynamic Scope
 * 실행한 위치가 상위 스코프를 정한다.
 */

// var i = 1000;
// for (var i = 0; i < 10; i++){
//     console.log(i);
// }

//console.log("i = " + i); // 10

let i = 1000;
for (let i = 0; i < 10; i++){
    console.log(i);
}

console.log("i = " + i); // 1000

/**
 * var 키워드는 함수레벨 스코프만 만들어낸다.
 * 
 * let, const 키워드는 함수레벨 스코프와 블록레벨 스코프를 만들어낸다.
 */