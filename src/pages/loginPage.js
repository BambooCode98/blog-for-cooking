import React,{ useState } from "react";
import '../styles/login/loginPage.css';
import '../styles/App.css';



export default function LoginPage() {
  const [input, setInput] = useState();

  return(
    <div>
      <div className="formLogin">
        <h1>Admin Login</h1>
        <form>
          <label>
            <input 
              type="text"
              placeholder="Username"
              required
            />
          </label>
          <br />
          <label>
            <input 
              type="email"
              placeholder="Email"
              required
            />
          </label>
          <br />
          <label>
            <input 
              type="password"
              placeholder="Password"
              required
              min={5}
              max={15}
              title="Must be between 5-15 characters."
            />
          </label>
          <br />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}




