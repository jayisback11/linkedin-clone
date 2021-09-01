import React, { useEffect, useState } from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    var url =
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=003ad7fd780c4344a7579419ab256f47";
    var req = new Request(url);
    fetch(req)
      .then((res) => res.json())
      .then((data) => setNews(data.articles.slice(0, 5)));
  }, []);
  console.log(news);
  return (
    <div className="widgets">
      <div className="widgets__container">
        <div className="widgets__header">
          <InfoIcon />
          <h2>LinkedIn News</h2>
        </div>
        <div className="header__news">
          {news.map((item) => (
            <div className="header__article">
              <div className="header__articleLeft">
                <FiberManualRecordIcon />
              </div>
              <div className="header__articleRight">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Widgets;
