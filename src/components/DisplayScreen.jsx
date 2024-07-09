import close from "../assets/Close_Button (1).png"
import minimize from "../assets/Minimize_Button (1).png"
import maximize from "../assets/Maximize_Button (1).png"
import Calculator from "./Calculator";
const DisplayScreen = () => {
  return (
    <div className="card bg-dark" style={{width:'80rem'}}>
      <div className="card-header" style={{display:'flex'}}>
        <img style={{width:'1.5rem'}} src={close}/>
        <img style={{width:'1.5rem'}} src={minimize}/>
        <img style={{width:'1.5rem'}} src={maximize}/>
      </div>
      <Calculator />
    </div>
  );
};
export default DisplayScreen;
