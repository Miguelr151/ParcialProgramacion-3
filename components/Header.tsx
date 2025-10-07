import Link from "next/link";

export default function Header() {
  return (
    <header style={{ position: "sticky", top: 0, background: "#fff", borderBottom: "1px solid #eee", zIndex: 10 }}>
      <nav style={{ margin: "0 auto", maxWidth: 1120, padding: "12px 16px", display: "flex", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontWeight: 600 }}>Catálogo | Instrumentos</Link>
        <div style={{ display: "flex", gap: 12 }}>
          <Link href="/">Inicio</Link>
          <Link href="/favorites">Favoritos</Link>
        </div>
      </nav>
    </header>
  );
}
