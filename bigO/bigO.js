/*
빅오표기법: 코드의 성능을 얘기할때 정확한 전문용어를 사용하는것이 중요한데 알고리즘을 짤때 드는 시간을 말함.  
*/

function addUpTo(n){
    let total = 0;
    for(let i = 1; i<=n; i++){
        total = total + i;
    }
    return total;
}

function addUpto2(n){
    return n * (n + 1) / 2
}

//
let t1 = performance.now();//브라우저가 이 문서를 만든시간을 알려준다
console.log(addUpto2(1000000000))
let t2 = performance.now();
console.log(t2 - t1)
