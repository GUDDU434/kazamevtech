import React from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  // const [showPassword, setShowPassword] = React.useState(false);

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Username:", username);
    console.log("Password:", password);
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "30%",
        margin: "auto",
      }}
    >
      <h1>Login</h1>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        onSubmit={handleLogin}
      >
        <input
          style={{
            marginBottom: "10px",
            padding: "10px",
            border: "none",
            borderBottom: "1px solid black",
          }}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          style={{
            marginBottom: "10px",
            padding: "10px",
            border: "none",
            borderBottom: "1px solid black",
          }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={{
            marginBottom: "10px",
            padding: "10px",
            background: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          type="submit"
        >
          Login
        </button>
      </form>
      <button
        style={{
          width: "100%",
          marginBottom: "10px",
          padding: "10px",
          background: "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
        onClick={() => navigate("/signup")}
      >
        Register
      </button>
    </div>
  );
};

export default Login;
