import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keybwords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          lorem ipsum dolor sit amet, consectetur adip eist elementum, lorem
          ipsum dolor sit amet, consectetur adip eist elementum, lorem ipsum
          dolor sit amet, consectetur adip eist elementum
        </p>
        <p className={styles.text}>
          lorem ipsum dolor sit amet, consectetur adip eist elementum, lorem
          ipsum dolor sit amet, consectetur adip eist elementum, lorem ipsum
          dolor sit amet, consectetur adip eist elementum
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
