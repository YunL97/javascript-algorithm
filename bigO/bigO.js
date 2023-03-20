/*
빅오표기법: 코드의 성능을 얘기할때 정확한 전문용어를 사용하는것이 중요한데 알고리즘을 짤때 드는 시간을 말함.  
*/

function addUpTo(n){//5n + 2, 2는   ,  O(n)
    let total = 0; //+1
    for(let i = 1 /*+1*/; i<=n; i++){  
        total = total + i;
    }
    return total;
}

function addUpto2(n){//3개 , O(1)
    return n * (n + 1) / 2 
}

//
let t1 = performance.now();//브라우저가 이 문서를 만든시간을 알려준다
console.log(addUpto2(1000000000))
let t2 = performance.now();
console.log(t2 - t1)

//시간은 항상 연산의 갯수에 달려있음 ex) + - x

//중첩 for문 O(n*n) = O(N^2)
// O(2n) == O(n)
// O(500) == O(1)
// O(5N^2) == O(N^2)
// => 작은 연산들은 중요하지 않다
//