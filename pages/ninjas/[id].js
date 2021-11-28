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

export const Details = (props) => {
  return (
    <div>
      <h1>Details</h1>
    </div>
  );
};

export default Details;
