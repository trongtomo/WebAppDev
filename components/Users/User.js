import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/dist/frontend/use-user";
export default function User() {
  const route = useRouter();
  const { user } = useUser();
  if (!user)
    return (
      <div>
        <Link href="/api/auth/login">Login</Link>
        <h6>Profile</h6>
      </div>
    );
  return (
    <Link href="/profile">
      <img src={user.picture} alt={user.name} />
      <h6>{user.name}</h6>
    </Link>
  );
}
