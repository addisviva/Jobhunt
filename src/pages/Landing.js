import React from "react";
import main from "./../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/Testing";
import { Logo } from "../components";
import {Link} from 'react-router-dom'
function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
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
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>

        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}



export default Landing;
