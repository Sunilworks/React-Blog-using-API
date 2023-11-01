import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../Header/Header";
import SimpleImageSlider from "react-simple-image-slider";
import { Store } from "../../Data/DataStore";
import "./home.css";
import Topbar from "../../Topbar/Topbar";
import Footer from "../../Footer/Footer";

function Home() {
  return (
    <>
      <Topbar />
      <Header />
      <div className="home">
        <Latest />
        <Article />
        <Ads />
        <Posts />
        <ImageSlide />
        <Stories />
      </div>
      <Footer />
    </>
  );
}

export default Home;

function Latest() {
  const d = new Date();
  let date = d.toDateString();

  const [latestData] = useContext(Store);
  return (
    <div className="latest">
      <div>
        <span className="heading">The Latest</span>
        <div className="ruler1"></div>
      </div>

      <div className="articlesHorizontal">
        {latestData
          .filter((item) => item.cat1 === "Latest")
          .map((data) => {
            return (
              <div className="lat1">
                  <NavLink to={`/description/${data.id}`} className="navl">
                  <img src={data.image} alt="Technology" />
                  <figcaption>
                    <a href="#!">{data.heading}</a>
                    <p>{data.des}</p>
                    <span className="bold">{data.footer}</span>
                    <span> / {date}</span>
                  </figcaption>
              </NavLink>
                </div>
            );
          })}
      </div>
    </div>
  );
}

function Article() {
  const d = new Date();
  let date = d.toDateString();

  const [latestData] = useContext(Store);
  console.log(latestData);
  return (
    <div className="article">
      <div>
        <span className="heading">Latest Articles</span>
        <div className="ruler1"></div>
      </div>

      <div className="articlesvertical">
        {latestData
          .filter((item) => item.cat1 === "Article")
          .map((data) => {
            return (
              <>
                  <hr className="hr" />
                <NavLink to={`/description/${data.id}`} className="navl">
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
    </div>
  );
}

function Ads() {
  return (
    <div className="Ads">
      <img
        src="https://www.gifcen.com/wp-content/uploads/2022/01/tom-and-jerry-gif-6.gif"
        alt="bollywood"
      />
    </div>
  );
}

function Posts() {
  const d = new Date();
  let date = d.toDateString();

  const [latestData] = useContext(Store);
  return (
    <div className="post">
      <div>
        <span className="heading">Top Posts</span>
        <div className="ruler1"></div>
      </div>

      <div className="postsverticalsmall">
        {latestData
          .filter((item) => item.cat1 === "Post")
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

const images = [
  {
    url: "https://images.pexels.com/photos/715414/pexels-photo-715414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    url: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    url: "https://images.pexels.com/photos/8337433/pexels-photo-8337433.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    url: "https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    url: "https://images.pexels.com/photos/236148/pexels-photo-236148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    url: "https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const ImageSlide = () => {
  return (
    <div className="imageSlide">
      <div className="slider">
        <SimpleImageSlider
          width={800}
          height={450}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          slideDuration={2}
          loop
        />
      </div>
      <div className="slider-mobile">
        <SimpleImageSlider
          width={300}
          height={250}
          images={images}
          showBullets={false}
          showNavs={true}
          autoPlay={true}
          slideDuration={2}
          loop
        />
      </div>
      <div className="slider-tab">
        <SimpleImageSlider
          width={350}
          height={250}
          images={images}
          showBullets={false}
          showNavs={true}
          autoPlay={true}
          slideDuration={2}
          loop
        />
      </div>
    </div>
  );
};

function Stories() {
  const d = new Date();
  let date = d.toDateString();

  const [latestData] = useContext(Store);
  console.log(latestData);
  return (
    <div className="story">
      <div>
        <span className="heading">Latest Stories</span>
        <div className="ruler1"></div>
      </div>

      <div className="articlesHorizontal">
        {latestData
          .filter((item) => item.cat1 === "Story")
          .map((data) => {
            return (
              <div className="lat1">
                  <NavLink to={`/description/${data.id}`} className="navl">
                  <img src={data.image} alt="Technology" />
                  <figcaption>
                    <a href="#!">{data.heading}</a>
                    <p>{data.des}</p>
                    <span className="bold">{data.footer}</span>
                    <span> / {date}</span>
                  </figcaption>
              </NavLink>
                </div>
            );
          })}
      </div>
    </div>
  );
}
