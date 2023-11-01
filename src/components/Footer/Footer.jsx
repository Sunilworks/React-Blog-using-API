import React, { useEffect } from "react";
import "./footer.css";
import {
  BsFacebook,
  BsGithub,
  BsGoogle,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { RiHome2Fill, RiInstagramFill, RiMailFill, RiPhoneLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";

function Footer() {
  const Navi = useNavigate();

    useEffect(() => {
        window.scrollTo(0,0);
    });

  return (
    // <footer>
    <div className="ft">
      <div className="Upper">
        <span>GET CONNECTED WITH US ON SOCIAL NETWORKS:</span>
        <div className="social">
          <BsFacebook />
          <BsTwitter />
          <BsGoogle />
          <RiInstagramFill />
          <BsYoutube />
          <BsLinkedin />
          <NavLink style={({isActive}) =>({color: isActive ? "white" : "white"})} to="https://github.com/Sunilworks">
          <BsGithub />
          </NavLink>
        </div>
      </div>

      <hr />

      <div className="Mid">
        <div className="lft">
          <span className="ft1">The</span>
          <span className="ft2">Siren</span>
          <div className="ds">
            <p>
              This is a blog website which covers wide variety of topics.Hope
              you have fun scrolling it .....!
            </p>
          </div>
        </div>

        <div className="center1">
          <h4>RESOURCES</h4>
          <p className="res" onClick={() => Navi("/bollywood")}>
            Bollywood
          </p>
          <p className="res" onClick={() => Navi("/technology")}>
            Technology
          </p>
          <p className="res" onClick={() => Navi("/hollywood")}>
            Hollywood
          </p>
          <p className="res" onClick={() => Navi("/fitness")}>
            Fitness
          </p>
          <p className="res" onClick={() => Navi("/food")}>
            Food
          </p>
        </div>
        <div className="center2">
          <h4>USEFUL LINKS</h4>
          <p className="res">Disclaimer</p>
          <p className="res">Policies</p>
          <p className="res">FAQ</p>
          <p className="res">Help</p>
        </div>
        <div className="right ">
          <h4>CONTACT US</h4>
          <p><RiHome2Fill/> NOIDA, UP - 201310</p>
          <p><RiMailFill/> info@Thesiren.com</p>
          <p><RiPhoneLine />+91 9876543211</p>
        </div>
      </div>

      <div className="bottom">
        <p>© 2023 The Siren. All rights reserved.</p>
      </div>
    </div>
    // </footer>
  );
}

export default Footer;

