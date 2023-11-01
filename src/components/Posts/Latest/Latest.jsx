import React, { useContext } from "react";
import "./latest.css";
import { Store } from "../../Data/DataStore";

function Latest() {
  const d = new Date();
  let date = d.toDateString();

  const [latestData] = useContext(Store);
  console.log(latestData);
  return (
    <div className="latest">
      <div>
        <span className="heading">The Latest</span>
        <div className="ruler1"></div>
      </div>

      <div className="articlesHorizontal">
        {latestData
          .filter((item) => item.cat === "Latest")
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

export default Latest;
