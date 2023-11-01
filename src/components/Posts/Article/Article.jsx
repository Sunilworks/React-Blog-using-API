import React, { useContext } from 'react'
import "./article.css";
import { Store } from "../../Data/DataStore";

function Article() {
  const d = new Date();
  let date = d.toDateString();

  const [latestData] = useContext(Store);
  console.log(latestData);
  return (
    <div className='article'>

      <div>
        <span className="heading">Latest Articles</span>
        <div className="ruler1"></div>
      </div>

      <div className="articlesvertical">
        {latestData
          .filter((item) => item.cat === "Article")
          .map((data) => {
            return (
              <>
                <hr className='hr' />
                <div className="art1">

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
                <div className='ad-box'>
                ADVERTISEMENT
          </div>
              </>
            );
          })}
      </div>
      


    </div>
  )
}

export default Article