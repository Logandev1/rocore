export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Mission Control for Discord Communities
      </h1>

      <p style={{ fontSize: "20px", maxWidth: "600px" }}>
        RoCore Productions delivers real-time analytics, AI-powered growth insights,
        and uncompromising control over your server ecosystem.
      </p>

      <div style={{ marginTop: "30px" }}>
        <a href="/dashboard" style={{
          padding: "12px 20px",
          background: "#5865F2",
          borderRadius: "8px",
          color: "white",
          textDecoration: "none",
          marginRight: "10px"
        }}>
          Open Dashboard
        </a>

        <a href="/team" style={{
          padding: "12px 20px",
          background: "#333",
          borderRadius: "8px",
          color: "white",
          textDecoration: "none"
        }}>
          Meet the Team
        </a>
      </div>
    </main>
  );
}
