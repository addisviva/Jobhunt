import React from "react";
import logo from "./../assets/images/logo.svg";
import main from "./../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/Testing";
function Landing() {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span>
          </h1>
          App
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            molestiae? Eius ipsa incidunt, ea modi culpa impedit recusandae non
            corrupti veritatis tempore laborum nesciunt perspiciatis obcaecati
            distinctio aliquam corporis dolor.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>

        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}



export default Landing;
