import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 3000);
  }, [router]);

  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>Page not found.</h2>
      <p>
        Go back to the
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
