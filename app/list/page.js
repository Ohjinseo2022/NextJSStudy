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
          <div className="food">
            <h4>{`${idx + 1}. ${e.prd} ${e.price}`}</h4>
          </div>
        );
      })}
    </div>
  );
}
