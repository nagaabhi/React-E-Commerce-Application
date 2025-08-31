import "./Authenticate.css";
import { useContext, useState, useRef } from "react";
import { DataContext } from "../Context/DataContext";
import { Toast } from "primereact/toast";
const Login = () => {
  const {
    authenticate,
    setAuthenticate,
    setUserLogin,
    userLogin,
    isAuthenticated,
    setIsAuthenticated,
  } = useContext(DataContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toast = useRef(null);
  const show = () => {
    {
      isAuthenticated
        ? toast.current.show({
            severity: "custom",
            sticky: true,
            content: (
              <div
                style={{
                  backgroundColor: "#b75d3aff",
                  color: "white",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                Login Successfull
              </div>
            ),
          })
        : toast.current.show({
            severity: "custom",
            sticky: true,
            content: (
              <div
                style={{
                  backgroundColor: "#b75d3aff",
                  color: "white",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                User Not Found
              </div>
            ),
          });
    }
  };

  const authenticateUser = () => {
    setUserLogin([
      ...userLogin,
      {
        email,
        password,
        confirmPassword,
        isAuthenticated,
      },
    ]);

    isUserAutenticated();
    show();
  };

  const isUserAutenticated = () => {
    const userFound = userLogin.find(
      (details) =>
        (details.email === email && details.password === password) ||
        details.confirmPassword === confirmPassword
    );
    {
      userFound
        ? setIsAuthenticated(!isAuthenticated)
        : setIsAuthenticated(isAuthenticated);
    }

  };

  return (
    <>
      <Toast ref={toast} />

      <div className="login-sign-up-container">
        <form onSubmit={(e) => e.preventDefault()} action="">
          <div className="user-email">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Your Email here..."
              required
            />
          </div>

          <div className="password">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Your Password Here..."
              required
            />
          </div>
          {authenticate === "signup" && (
            <div className="confirm-password">
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="Confirm Your Password"
                required
              />
            </div>
          )}

          <div className="submit-button">
            <button onClick={authenticateUser}>Submit</button>
          </div>

          <div className="dont-have-account">
            <p>
              Dont have an account?{" "}
              <span onClick={() => setAuthenticate("signup")}>
                {authenticate === "login" ? "Signup" : "login"}
              </span>{" "}
              here
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
