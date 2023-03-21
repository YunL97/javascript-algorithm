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

//공간복잡도: 사용되는 메모리에 주목,  ex) 배열에 push 한번씩 돌리면 O(n)
function addUpTo(n){
    let total = 0; //1
    for(let i = 1 /* 2 */; i<=n; i++){  
        total = total + i;
    }
    return total;
}
 
//로그란: O(logn), 그래프로는 n^2의 반대느낌, O(nlogn): n^2 그래프느낌
//빅오표기법 쓰면 좋은점
/*
1. 빅오를 통해 시간과 공간 복잡도에 대한이해를 높일 수 있음
2. 빅오표기법은 세상 모든곳에서 사용
*/