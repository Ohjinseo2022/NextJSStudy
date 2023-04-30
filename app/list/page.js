// import Image from "next/image"; //next에서 지원하는 Image 태그를 사용하면
// //무조건 이미지를 import해와서 가져다 써야함 해당태그는 이미지를 자동으로 최적화 사이즈로 조정해줌
// import food0 from "@/public/food0.png";
// import food1 from "@/public/food1.png";
// import food2 from "@/public/food2.png";

export default function List() {
  let product = [
    { prd: "Tomatoes", price: 4000 },
    { prd: "Pasta", price: 9000 },
    { prd: "Coconut", price: 5000 },
  ];

  return (
    <div>
      <h3 className="title">상품목록</h3>
      {product.map((e, idx) => {
        return (
          <div className="food" key={`prd=${idx}`}>
            <img src={`/food${idx}.png`} className="food-img" />
            <h4>{`${idx + 1}. ${e.prd} ${e.price}`}</h4>
          </div>
        );
      })}
    </div>
  );
}
