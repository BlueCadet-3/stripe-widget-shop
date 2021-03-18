import { useState } from "react";
import { Box, Button, Container, Input } from "@material-ui/core";
import * as usersService from "../../utilities/users-service";
import "./LoginForm.css";

export default function LogIn({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        required={true}
        autoFocus={true}
        fullWidth={true}
        value={credentials.email}
        onChange={handleChange}
      />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        required={true}
        fullWidth={true}
        value={credentials.password}
        onChange={handleChange}
      />
      <Box display="flex" justifyContent="center">
        <Button type="submit" size="large" id="login">
          LOG IN
        </Button>
        <p className="error-message">&nbsp;{error}</p>
      </Box>
    </form>
  );
}

{
  /* <div className="form-container" onSubmit={handleSubmit}>
  <form autoComplete="off" >
  <label>Email</label>
    <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
    <label>Password</label>
    <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
    <button type="submit">LOG IN</button>
  </form>
</div> */
}
