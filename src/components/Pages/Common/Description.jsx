import React, { useContext, useEffect } from "react";
import "./description.css";
import clap from "../../Images/rythm.svg";
import share from "../../Images/share.svg";
import profile from "../../Images/Mask Group 16.png";
import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { Link, useNavigate, useParams, NavLink } from "react-router-dom";
import { Store } from "../../Data/DataStore";

function Description() {
  const [latestData] = useContext(Store);
  // console.log(latestData);

  const path = useParams().id;
  console.log(path);

  const cat = latestData[parseInt(path) - 1].category;
  console.log(cat);

  const random = Math.floor(Math.random() * 8);
  console.log(random);

  const d = new Date();
  let date = d.toDateString();

  let navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0,0);
});
  return (
    <>
      <div className="Dnav">
        <Link to="/">
          <div className="logo">
            <span className="logo1">The</span>
            <span className="logo2">Siren</span>
          </div>
        </Link>
        <div className="get-started">Get Started</div>
      </div>

      <div className="maincontent">
        <div className="leftcontent">
          <div className="like">
            <img src={clap} alt="clap icon" />
            <span className="like-count">9.8K</span>
          </div>
          <div className="share">
            <img src={share} alt="clap icon" />
            <span className="share-text">Share this article</span>
          </div>
        </div>
        {latestData
          .filter((item) => item.id === parseInt(path))
          .map((data) => {
            return (
              <>
                <div className="centercontent">
                  <h1 className="contentheading">{data.heading}</h1>
                  <div className="profile">
                    <div className="avatar">
                      <img src={profile} alt="profile" />
                      <div className="avatar-info">
                        <span className="author">Sunil Km</span>
                        <span className="date">{date} - 10min read</span>
                      </div>
                    </div>
                    <div className="social-icon">
                      <BsFacebook />
                      <RiInstagramFill />
                      <BsTwitter />
                      <NavLink style={({isActive}) =>({color: isActive ? "black" : "black"})} to="https://github.com/Sunilworks">
                      <BsGithub />
                      </NavLink>
                    </div>
                  </div>
                  <img className="img" src={data.image} alt="gadar 2" />
                  <p className="des">{data.description.slice(0, 1200)}</p>
                  <div className="profile">
                    <div className="avatar">
                      <img src={profile} alt="profile" />
                      <div class="avatar-info">
                        <b>Written by :</b>
                        <span className="author">Sunil Km</span>
                        <span className="date">{date}</span>
                      </div>
                    </div>
                  </div>

                  <button onClick={() => navigate(-1)}>Back</button>
                </div>
              </>
            );
          })}
      </div>

      <div className="morecontent">
        <div>
          <span className="heading">More Stories From Siren</span>
          <div className="ruler1"></div>
        </div>

        <div className="articlesHorizontal">
          {latestData
            .filter(
              (item) => item.category === cat && item.id !== parseInt(path)
            )
            .slice(random, random + 3)
            .map((data, index) => {
              return (
                <NavLink to={`/description/${data.id}`} className="navl">
                  <div className="lat1" key={index}>
                    <img src={data.image} alt="Technology" />
                    <figcaption>
                      <a href="#!">{data.heading.slice(0, 40)}</a>
                      <p>{data.description.slice(0, 150)}</p>
                      <span className="bold">{data.footer}</span>
                      <span> / {date}</span>
                    </figcaption>
                  </div>
                </NavLink>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Description;
