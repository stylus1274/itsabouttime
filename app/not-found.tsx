import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "2rem", textAlign: "center" }}>
      <div>
        <p style={{ letterSpacing: ".18em", textTransform: "uppercase", color: "#b08d57" }}>404</p>
        <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 8vw, 5rem)", margin: "0 0 1rem" }}>Page not found</h1>
        <Link href="/" style={{ color: "#1a1a1a" }}>Return to the home page</Link>
      </div>
    </main>
  );
}
