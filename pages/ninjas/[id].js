import axios from "axios";

export const getStaticPaths = async () => {
  const { data: ninjas } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const paths = ninjas.map((ninja) => ({
    params: { id: ninja.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const { data: ninja } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return {
    props: {
      ninja,
    },
  };
};

export const Details = (props) => {
  const { ninja } = props;
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default Details;
