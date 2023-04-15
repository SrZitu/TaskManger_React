import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
    
      <h4>Footer</h4>
      <Link to='/'>Home</Link>
      <br/>
      <Link to='/about'>About</Link>
      <h6>@copyright Srz 2023</h6>
    </div>
  );
};

export default Footer;
