import {NavLink, useLocation, useNavigate} from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { LoginApi } from "../../services/login";

 const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const location = useLocation();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  const getToken = async () => {
    if(formData.username && formData.password){
      try {
        const generateToken = await LoginApi(formData)
        console.log('generateToken',generateToken)
        localStorage.setItem("token",generateToken.token);
        navigate(-1)
      } catch(e) {
        toast.error('Incorrect Id or Password');
      }
    }else{
      toast.error('Please fill all mandatory information');
    }
  }

  return <div className="signup">
    <div className="signup-contain">
      <div className="signup-detail">
        <div className="signup-header">
          <h1>Login</h1>
          <div>Login to access all features</div>
        </div>
        <div className="signup-data">
          <label className="signup-field">
            <div>Username *</div>
            <div className="signup-input">
              <input name="username" placeholder="Enter your username" type="text"  onChange={handleInputChange}/>
              <MdEmail className="signup-icon test"/>
            </div>
          </label>
          <label className="signup-field">
            <div>Password *</div>
            <div className="signup-input">
              <input name="password" placeholder="Enter your password" type={isVisible ? "text" : "password"} onChange={handleInputChange}/>
              {
                 isVisible ? <AiFillEye onClick={() => setIsVisible(false)} className="signup-icon password-btn"/> : <AiFillEyeInvisible onClick={() => setIsVisible(true)} className="signup-icon password-btn"/>
              }
            </div>
          </label>
        </div>
        <div className="login-btn">
          <button className="sign-btn" onClick={() => getToken()}>Log in</button>
        </div>
        <div className="sign-account">Don't have an account? <NavLink to="/signup" className="signup-login"><span >Sign Up</span></NavLink></div>
      </div>
    </div>
    <Toaster/>
  </div>
}

export default Login;