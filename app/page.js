export default function Home() {
  let name = "오진서";
  let age = 32;
  let link = "https://google.com";
  return (
    <div>
      <h4 className="title" style={{ color: "blue", fontSize: "30px" }}>
        애플후레시
      </h4>
      <p className="title-sub">by dev {`${name} ${age}세`}</p>
    </div>
  );
}
