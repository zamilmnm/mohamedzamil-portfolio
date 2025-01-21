import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
// import BannerImg from "./BannerImg";
import Typewriter from "typewriter-effect";
import myImage from "../../assets/Zamil suit Compressed.jpg";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";
export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.orange }}>
                {greeting.title}
              </h1>
              <h1 className="greeting-sub" style={{ color: theme.grayText }}>
                I'm <mark data-entity="person">{greeting.sub}</mark>
              </h1>
              <h1 className="greeting-typewriter" style={{color: theme.blue}}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Data Analyst")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("BI Analyst")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Data Visualization")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("IT Engineer")
                      .pauseFor(200)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}>
                <div className="entities">
                  A <mark data-entity="noun">Data Analytics Enthusiast</mark>{" "}
                  committed to extracting{" "}
                  <mark data-entity="verb">Valuable Insights</mark> from data,
                  creating intuitive {" "}
                  <mark data-entity="skill">Visualizations</mark> and enabling smarter
                  <mark data-entity="freelance">Business Strategies</mark>.
                </div>
              </span>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
              <div className="button-greeting-div">
                <Button text="Contact me" href="/contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {/*<BannerImg /> */}
            <img style={{borderRadius: "50%",}} src={myImage} alt="Description" />
          </div>
        </div>
      </div>
    </Fade>
  );
}       
          