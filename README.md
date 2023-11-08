![캡처](https://user-images.githubusercontent.com/58182106/226663734-f1c15966-be00-4c87-b9b2-801d50e0588a.PNG)


# bigO

* 빅오표기법: 코드의 성능을 얘기할때 정확한 전문용어를 사용하는것이 중요한데 알고리즘을 짤때 드는 시간을 말함.  

```
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
```
```
let t1 = performance.now();//브라우저가 이 문서를 만든시간을 알려준다
console.log(addUpto2(1000000000))
let t2 = performance.now();
console.log(t2 - t1)
```
* 시간은 항상 연산의 갯수에 달려있음 ex) + - x

* 중첩 for문 O(n*n) = O(N^2)
* O(2n) == O(n)
* O(500) == O(1)
* O(5N^2) == O(N^2)
* => 작은 연산들은 중요하지 않다

* 공간복잡도: 사용되는 메모리에 주목,  ex) 배열에 push 한번씩 돌리면 O(n)
```
function addUpTo(n){
    let total = 0; //1
    for(let i = 1 /* 2 */; i<=n; i++){  
        total = total + i;
    }
    return total;
}
``` 
* 로그란: O(logn), 그래프로는 n^2의 반대느낌, O(nlogn): n^2 그래프느낌
* 빅오표기법 쓰면 좋은점
  1. 빅오를 통해 시간과 공간 복잡도에 대한이해를 높일 수 있음
  2. 빅오표기법은 세상 모든곳에서 사용
  3. 
# array
* 객체는 정렬되어 있을 필요가 없을때 잘작동한다
* 그리고 빠른접근, 입력과 제거를 원할때좋다
* 객체는 입력, 제거, 접근까지 모두상수, 탐색은 O(n)
* 객체는 정렬되어있지않다.

* 배열은 대부분 정렬되어 있는 데이터를 위해 사용
* 배열에 있는 데이터를 접근하는 것은 매우빠른 O(1)
* 배열 끝에 push(shift) 하면 O(1)
* 배열 앞에push(unshift(맨앞)), delete(shift(맨앞)) 하면 인덱스가 엉망이된다. => O(n)
* 

#
* splice가 있으면 O(n)
* 두개의 루프가 두개의 중첩된 개별 루프보다 훨씬 낫다
* 