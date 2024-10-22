import userpic from "./pictures/mersin-teknopark-rise-technology-1033131.png";

const Login = () => {
  return (
    <div className="menu">
      <div className="notifications">
        <i className="fa-solid fa-bell"></i>
      </div>
      <div className="ayrac">|</div>
      <div className="login">
        <div className="user">ege.koksal</div>
        <img src={userpic} alt="userpic" className="userpic" />
      </div>
    </div>
  );
};

export default Login;
