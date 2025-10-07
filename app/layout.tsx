import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{
        backgroundColor: "#f5f5f5",
        color: "#222",
        margin: 0,
        padding: "20px",
        minHeight: "100vh",
      }}>
        <header style={{ marginBottom: "24px" }}>
          <h1 style={{ textAlign: "center", fontSize: "28px" }}>Catálogo de instrumentos</h1>
        </header>
        <main style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {children}
        </main>
      </body>
    </html>
  );
}

