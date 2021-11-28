import Link from "next/link";

export const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Navbar</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninjas Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
