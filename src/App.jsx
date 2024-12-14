import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import './App.css';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    setMessage("Login Successful!");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="title">Login</h2>
        {message && <p className="success-message">{message}</p>}
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          required
        />
        
        <button type="submit" className="submit-btn">Login</button>
        
        <div className="divider">or</div>
        
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            setMessage("Google Login Successful!");
          }}
          onError={() => {
            console.log("Login Failed");
            setMessage("Google Login Failed");
          }}
        />
      </form>
    </div>
  );
}

export default App;
