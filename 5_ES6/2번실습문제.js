// Q5. 전달된 모든 숫자의 합계를 구하는 함수 sumAll을 작성하세요.
console.log(sumAll(1, 2, 3, 4)); // 전달한인자 : 4, 총 합 : 10
console.log(sumAll(1, 2, 3, 4, 5 , 6)); // 전달한인자 : 6, 총 합 : 21
function sumAll(...num){
    let count = 0;
    for(let n of num){
        count += n;
    }
    return `전달한 인자 : ${num.length}, 총합 : ${count}`;
}

// Q6. 첫 번째 인자는 name, 나머지는 interests로 모아 출력하는 함수showProfile을 작성하세요.
showProfile("Jane", "coding", "traveling", "music");
// 출력 예시: 이름: Jane / 관심사: ["coding", "traveling", "music"]
function showProfile(name, ...interests){
    console.log(`이름 : ${name} / 관심사 : ${interests}`);
}