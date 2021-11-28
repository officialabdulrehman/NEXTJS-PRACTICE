import Link from "next/link";

export const NotFound = () => {
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
