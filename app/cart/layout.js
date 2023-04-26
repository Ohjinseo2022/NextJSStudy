import "../globals.css";

export default function Layout({ children }) {
  return (
    <div>
      {children} {/* page.js 인식부분*/}
      <p>현대카드 무이자 이벤트 중</p>
    </div>
  );
}
