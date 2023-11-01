import React, { useContext } from "react";
import "./stories.css"
import { Store } from "../../Data/DataStore";

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
          .filter((item) => item.cat === "Story")
          .map((data) => {
            return (
              <div className="lat1">
                <img src={data.image} alt="Technology" />
                <figcaption>
                  <a href="https://techcrunch.com/2023/07/27/a-high-tech-third-eye-for-neurosurgeons-proprio-could-change-the-or-forever/">
                    {data.heading}
                  </a>
                  <p>{data.description}</p>
                  <span className="bold">{data.footer}</span>
                  <span> / {date}</span>
                </figcaption>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Stories