// Q1.배열에서 첫 번째, 두 번째 요소를 각각 변수 a, b에 저장하세요.
//    나머지 값들은 rest에 저장하세요.
const nums = [10, 20, 30, 40];

const [a, b, ...rest] = nums

console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30,40]

// Q2. user 객체에서 id, age 값을 꺼내어 변수로 저장하고 출력하세요.
//      그 외 나머지 값은 otherInfo에 할당하세요.
const user = {
    id: '수달',
    age: 4,
    job: '개발자',
    favorite: '물장난',
    location: '강가'
};

const {id, age, ...otherInfo} = user; // id, age, otherInfo변수 선언 및 초기화
console.log(id); // '수달'
console.log(age); // 4
console.log(otherInfo); // { job: '개발자', favorite: '물장난', location: '강가' }

// Q3. user 객체를 인자로 받아 이름과 나이를 출력하는 함수를 작성하세요.
function printUser({name, age}) {
    console.log(`이름: ${name}, 나이: ${age}`);// 여기는 수정하지 말것.
}

printUser({ name: "mkm", age: 25 });

// Q4. 아래 객체배열의 두 번째 상품의 이름과 가격을 각각 name2, price2에 저장하세요.
// - 구조분해할당을이용 
const products = [
    { name: "Pen", price: 500 },
    { name2: "Notebook", price2: 1500 }
];
const [first, {name2, price2}] = products;

console.log(name2); // "Notebook"
console.log(price2); // 1500