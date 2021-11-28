import Footer from "./Footer";
import Navbar from "./Navbar";

export const Layout = (props) => {
  const { children } = props;
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
