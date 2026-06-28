import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>Dashboard</h1>
      <p>Welcome, {session.user?.name}</p>
    </main>
  );
}
