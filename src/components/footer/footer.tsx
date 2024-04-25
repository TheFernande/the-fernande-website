export default function Footer() {
  return (
    <footer style={{ padding: "1rem", borderTop: "1px solid #000" }}>
      <p>
        &copy; {new Date().getFullYear()} The Fernande Website. All rights
        reserved.
      </p>
    </footer>
  );
}
