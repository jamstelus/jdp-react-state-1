import { useEffect } from "react";
import { useState } from "react";

const LoginPage = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserData({
      email: event.target.email.value,
      password: event.target.password.value,
    });
  };

  useEffect(() => {
    console.log(userData);
  }, [userData])

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Your email" />
      <input type="password" name="password" placeholder="Your password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
