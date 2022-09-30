import React from "react";
import "./DataDigest.css";

const DataDigest = () => {
  return (
    <div>
      <div className="mainDiv">
        <div className="midBodyMainDiv">
          <div className="midBodyHeaderDiv">
            <div className="headLineDiv">
              <h2>DATA DIGEST</h2>
            </div>
            <hr />

            <div className="dataDigestImageContainer">
              <div className="singleImageContainer">
                <div className="singleImageDiv">
                  <img
                    alt="1st"
                    src="https://s3.ap-south-1.amazonaws.com/image.cricket.com/datadigest/d2093c655fff970c893d62e6f355715b2ce27a26.png"
                  />
                </div>

                <div className="singleImageDiv">
                  <img
                    alt="2nd"
                    src="https://s3.ap-south-1.amazonaws.com/image.cricket.com/datadigest/453aaf421bc1087199fbd51833b77738cf4f6377.png"
                  />
                </div>

                <div className="singleImageDiv">
                  <img
                    alt="3rd"
                    src="https://s3.ap-south-1.amazonaws.com/image.cricket.com/datadigest/f62a6cf67cbce5037a4c02a023a5b806ef3534dd.png"
                  />
                </div>
                <div className="singleImageDiv">
                  <img
                    alt="2nd last"
                    src="https://s3.ap-south-1.amazonaws.com/image.cricket.com/datadigest/4eec0f8505aa7b1172a8ca8126389c5b88384981.png"
                  />
                </div>
                <div className="singleImageDiv">
                  <img
                    alt="last"
                    src="https://s3.ap-south-1.amazonaws.com/image.cricket.com/datadigest/6257d2eda461af5fe1f4168c13d13c457d73cf21.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDigest;
