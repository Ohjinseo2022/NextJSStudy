// import age from "./data.js"; //export default 로 내보낸건 {} 불필요
import { age, name } from "./data.js"; //여러개를 내보낸 곳에서 받아올땐 {} 사용
import Hello from "./hello.js";
export default function Cart() {
  let product = [
    { prd: "Tomatoes", price: 4000 },
    { prd: "Pasta", price: 9000 },
    { prd: "Coconut", price: 5000 },
  ];
  return (
    <div>
      <Hello />
      <h4 className="title">Cart</h4>
      {product.map((e) => {
        return <CartItem prd={e.prd} price={e.price} />;
      })}
    </div>
  );
}

function CartItem({ prd, price }) {
  return (
    <div className="cart-item">
      <p>상품명 {prd}</p>
      <p>{price}</p>
      <p>1개</p>
    </div>
  );
}

/* next.js 컴포넌트는 종류가 2개임
1. server component
아무위치에서나 function 사용시 서버 컴포넌트
서버컴포넌트안에서는 자바스크립트 기능을 집어넣을수가 없음 -> ex)onClick 이벤트등
단 로딩이 빠름 
--> 큰페이지에서는 server component 사용을 권장하고 작은단위 컴포넌트(JS기능이 필요한)는 clinet component 사용을 권장함 
2. client component  
js파일 맨위에 'use client' 문구 작성후 사용시 
클라이언트 컴포넌트
자바스크립트 이벤트 문법 사용가능
로딩이 느림 1(자바스크립트많이 필요함)
로딩이 느림 2 (hydration 필요)

*/
