export default function Header() {
  return (
    <header>
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "row",
            padding: "1rem",
            gap: "1rem",
            borderBottom: "1px solid #000"
          }}
        >
          <li style={{ listStyle: "none" }}>
            <a href='/'>Home</a>
          </li>
          <li style={{ listStyle: "none" }}>
            <a href='/shop'>Shop</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
