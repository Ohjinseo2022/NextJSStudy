export default function Home() {
  let name = "오진서";
  let age = 32;
  return (
    <div>
      <h4 className="title" style={{ fontSize: "30px" }}>
        애플후레시
      </h4>
      <p className="title-sub">by dev {`${name} ${age}세`}</p>
    </div>
  );
}
