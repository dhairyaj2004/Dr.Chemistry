import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";

const ProtectedRoute = ({ children }) => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.push("/Login");
    }
  }, [session, router]);

  return children;
};

export default ProtectedRoute;
