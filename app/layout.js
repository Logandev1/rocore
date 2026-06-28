export const metadata = {
  title: "RoCore Productions",
  description: "Mission control for Discord communities."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "#0d0d0d", color: "white", fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
