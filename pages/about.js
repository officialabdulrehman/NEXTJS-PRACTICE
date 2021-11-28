import Head from "next/head";

export const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keybwords" content="ninjas" />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          This is the TodoList app v1.0.0. It is part of a React crash course.
        </p>
      </div>
    </>
  );
};

export default About;
