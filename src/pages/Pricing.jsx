import { Fade } from "react-awesome-reveal";
import PricingComp from "../components/About/Pricing";


const Pricing = () => {
  return (
    <div>
      <Fade triggerOnce> 
        <PricingComp />
      </Fade>
    </div>
  );
};

export default Pricing;
