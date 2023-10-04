import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";

const RootLayout = (child) => {
  return (
    <div>
      <Navbar/>
      {child.children}
      <Footer/>
    </div>
  );
} 

export default RootLayout;