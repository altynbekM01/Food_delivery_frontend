import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./style.css";


function Login() {
    const navigate = useNavigate();

    const initialFormData = Object.freeze({
        username: "",
        password: ""
      });
    const [formData, updateFormData] = React.useState(initialFormData);
      
    const handleChange = (e) => {
          updateFormData({
            ...formData,
      
            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()
          });
        };
      
    const handleSubmit = (e) => {
          e.preventDefault()
          
          if(formData.username==="admin"){
            alert("Вы вошли как админ")
            setAuthMode(authMode === "signin" ? "signup" : "signin")
            navigate("/home");
        }
        else{
            alert("Не правильный логин или пароль")
        }
          console.log(formData);
          // ... submit to API or something
        };
  let [authMode, setAuthMode] = useState("signin");
  const [inputOne, setInputOne] = useState('');




  if (authMode === "signin") {return (

    <html>
    <head>
      <title>Registration system PHP and MySQL</title>
      <link rel="stylesheet" type="text/css" href="components/style.css"></link>

    </head>
    <body>
      <div class="header">
  	    <h2>Login</h2>
      </div>

      <form method="post" action="login.jsx">
  	    <div class="input-group">
  	    	<label>Username</label>
  	    	<input type="text" name="username" onChange={handleChange}/>
  	    </div>
  	    <div class="input-group">
  	    	<label>Password</label>
      		<input type="password" name="password"  value={inputOne} onChange={(event) => setInputOne(event.target.value)}/>
      	</div>
  	    <div class="input-group">
  	    	<button type="submit" class="btn" name="login_user" onClick={handleSubmit}>Login</button>
  	    </div>
      </form>

    </body>
    </html>
       
  );}else{
    return(
      <div className="navigation">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              React Multi-Page Website ({inputOne})
            </NavLink>
            <div>
              <ul className="navbar-nav ml-auto">
                
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home">
                    Delivery Company                  <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    Restaurants
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Menu
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/blog">
                    Order List
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Login;