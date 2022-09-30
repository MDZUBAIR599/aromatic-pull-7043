import React from "react";
import "./FeaturedVideo.css";
import v from "../../Assets/v.svg"
import { Link } from "react-router-dom";

const data = [
  "https://img.youtube.com/vi/STmW8tM4uHo/mqdefault.jpg",
  "https://img.youtube.com/vi/sZizpr_VzfI/mqdefault.jpg",
  "https://img.youtube.com/vi/LMy0LHt9Tpw/mqdefault.jpg",
  "https://img.youtube.com/vi/vaarOjNfMQQ/mqdefault.jpg",
];

const discription = [
  "This series is a HUGE chance for others to shine, I Indias tour of the Windies 2022 I Cricket.co",
  "The Cricket.com Vodcast I Episode 7: Stokes, Shafique and should Virat Kohli play the T20 World Cup?",
  "It was one of the best days ever in Barbados I Swanny’s English Treble I Part 1",
  "Give Rishabh Pant wings and he will fly, let him bat higher in ODIs too I ENG vs IND I 3rd ODI Review ft. Gough",
];

const FeathuredVideo = () => {
  return (
    <>
      <div class="mainDiv">
        <div class="midBodyMainDiv">
          <div class="midBodyHeaderDiv">
            <div class="headLineDiv">
              <h2>FEATURED VIDEOS</h2>
              <a href="">
                <Link to={`/videos`}>
                  <img alt="" src={v} />
                </Link>
              </a>
            </div>

            <hr />

            <div class="outerContainer">
              <div class="fVideosContainer">
                <a class="fVideosScreenLink" href="">
                  <div class="fVideosScreenImageDiv">
                    <span class="fVideosScreenImageSpan">
                      <Link to={`/videos`}>
                        <img src={data[0]} />
                      </Link>
                    </span>
                  </div>
                  <span class="fvideosScreenHeading">{discription[0]}</span>
                </a>

                <a class="fVideosScreenLink" href="">
                  <div class="fVideosScreenImageDiv">
                    <span class="fVideosScreenImageSpan">
                      <Link to={`/videos`}>
                        <img src={data[1]} />
                      </Link>
                    </span>
                  </div>
                  <span class="fvideosScreenHeading">{discription[1]}</span>
                </a>

                <a class="fVideosScreenLink" href="">
                  <div class="fVideosScreenImageDiv">
                    <span class="fVideosScreenImageSpan">
                      <Link to={`/videos`}>
                        <img src={data[2]} />
                      </Link>
                    </span>
                  </div>
                  <span class="fvideosScreenHeading">{discription[2]}</span>
                </a>

                <a class="fVideosScreenLink" href="">
                  <div class="fVideosScreenImageDiv">
                    <span class="fVideosScreenImageSpan">
                      <Link to={`/videos`}>
                        <img src={data[3]} />
                      </Link>
                    </span>
                  </div>
                  <span class="fvideosScreenHeading">{discription[3]}</span>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default FeathuredVideo;
