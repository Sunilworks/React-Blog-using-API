import React, { useContext, useEffect } from "react";
import { Store } from "../../Data/DataStore";
import { useNavigate, NavLink } from "react-router-dom";
import "../Common/common.css";
import Topbar from "../../Topbar/Topbar";
import Footer from "../../Footer/Footer";

function Food() {

  useEffect(() => {
        window.scrollTo(0,0);
    });
    
  return (
    <>
      <div className="home">
        <Topbar />
        <Article />
        <Posts />
        <Ads />
        <Footer />
      </div>
    </>
  );
}

export default Food;

function Article() {
  const d = new Date();
  let date = d.toDateString();

  const [latestData] = useContext(Store);

  let navigate = useNavigate();
  return (
    <div className="articleB">
      <div>
        <span className="heading">Food</span>
        <div className="ruler1"></div>
      </div>

      <div className="articlesvertical">
        {latestData
          .filter((item) => item.cat === "FDArticle")
          .map((data) => {
            return (
              <>
                <NavLink to={`/description/${data.id}`} className="navl">
                  <hr className="hr" />
                  <div className="art1">
                    <img src={data.image} alt="Technology" />
                    <figcaption>
                      <a href="#!">{data.heading}</a>
                      <p>{data.des}</p>
                      <span className="bold">{data.footer}</span>
                      <span> / {date}</span>
                    </figcaption>
                  </div>
                </NavLink>
              </>
            );
          })}
      </div>

      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

function Posts() {
  const d = new Date();
  let date = d.toDateString();

  const [latestData] = useContext(Store);
  console.log(latestData);
  return (
    <div className="postB">
      <div>
        <span className="heading">Top Posts</span>
        <div className="ruler1"></div>
      </div>

      <div className="postsverticalsmall">
        {latestData
          .filter((item) => item.cat === "FDPost")
          .map((data) => {
            return (
              <NavLink to={`/description/${data.id}`} className="navl">
                <div className="post1">
                  <img src={data.image} alt="Technology" />
                  <a href="#!">{data.heading}</a>
                  <figcaption>
                    <br />
                    <br />
                    <span className="bold">{data.footer}</span>
                    <span> / {date}</span>
                  </figcaption>
                </div>
              </NavLink>
            );
          })}
      </div>
    </div>
  );
}

function Ads() {
  return (
    <div className="ad-boxB">
      <img
        src="https://i.pinimg.com/originals/06/9d/61/069d617dca720be2d65014963515d28e.gif"
        alt="food"
      />
    </div>
  );
}
