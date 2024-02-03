import {NavLink} from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { SignupApi } from "../services/signupapi";

const Signup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email:'',
    username:'',
    password:'',
    name:{
        firstname:'',
        lastname:''
    },
    address:{
        city:'kilcoole',
        street:'7835 new road',
        number:3,
        zipcode:'12926-3874',
        geolocation:{
            lat:'-37.3159',
            long:'81.1496'
        }
    },
    phone:'1-570-236-7033'
  });
  const handleInputChange = (event) => {
    const { name, value, type } = event.target;

    if(name == "firstname" || name == "lastname"){
        const username = 
        setFormData((prevState) => ({
            ...prevState,
            name : {
                ...prevState.name,
                [name] : value,
            }
          }));
    }else{
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
          }));
    }
  }

  const getToken = async () => {
    if(formData.name.firstname && formData.name.firstname && formData.username && formData.password){
        try {
        const res = await SignupApi(formData);
        toast.success('Profile created successfully');
        setTimeout(()=> {
            navigate('/login');
        },500);
        } catch(e) {
        console.log(e)
        }
    }else{
        toast.error('Please fill all mandatory information');
    }
  }

  return <div className="signup">
    <div className="signup-contain">
      <div className="signup-detail">
        <div className="signup-header">
          <h1>Sign up</h1>
          <div>Sign up to access all features</div>
        </div>
        <div className="signup-data">
          <label className="signup-field">
            <div>First Name *</div>
            <div className="signup-input">
              <input name="firstname" placeholder="Enter your first name" type="text"   onChange={handleInputChange}/>
              <BsFillPersonFill className="signup-icon"/>
            </div>
          </label>
          <label className="signup-field">
            <div>Last Name *</div>
            <div className="signup-input">
              <input name="lastname" placeholder="Enter your last name" type="text"   onChange={handleInputChange}/>
              <BsFillPersonFill className="signup-icon"/>
            </div>
          </label>
          <label className="signup-field">
            <div>Email *</div>
            <div className="signup-input">
              <input name="email" placeholder="Enter your email" type="text"   onChange={handleInputChange}/>
              <MdEmail className="signup-icon"/>
            </div>
          </label>
          <label className="signup-field">
            <div>Username *</div>
            <div className="signup-input">
              <input name="username" placeholder="Enter your username" type="text"   onChange={handleInputChange}/>
               <BsFillPersonFill className="signup-icon"/>
            </div>
          </label>
          <label className="signup-field">
            <div>Create a strong Password  *</div>
            <div className="signup-input">
              <input name="password"  placeholder="Enter your password" type={isVisible ? "text" : "password"}   onChange={handleInputChange}/>
              {
                isVisible ? <AiFillEye onClick={() => setIsVisible(false)} className="signup-icon password-btn"/> : <AiFillEyeInvisible onClick={() => setIsVisible(true)} className="signup-icon password-btn"/>
              }
            </div>
          </label>
        </div>
        <button className="sign-btn" onClick={() => {getToken()}}>Sign up</button>
        <div className="sign-account">Already have an account? <NavLink to="/login" className="signup-login"><span >Log in</span></NavLink></div>
      </div>
    </div>
    <Toaster/>
  </div>
}

export default Signup;