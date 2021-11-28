import axios from "axios";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  const { data: ninjas } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return {
    props: {
      ninjas: ninjas,
    },
  };
};

export const Ninjas = (props) => {
  const { ninjas } = props;
  return (
    <div>
      <h1>Ninjas</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Ninjas;
