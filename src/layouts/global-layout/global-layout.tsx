import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function GlobalLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
        fontSize: "16px",
        color: "#000",
        backgroundColor: "#fff"
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}
