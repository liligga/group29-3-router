import { useNavigate } from "react-router-dom";
import { paths } from "../App";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // запрос на сервер для проверки логина и пароля
    if (event.target.username.value === "admin" && event.target.password.value === "admin") {
        navigate(paths.profile);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Your username" />
        <input type="password" name="password" placeholder="Your password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default LoginPage;
