import React from "react";

function FifthDiv() {
  const images = [
    "./assets/devices/mobile.jpg",
    "./assets/devices/earpods.jpg",
    "./assets/devices/tv.jpg",
    "./assets/devices/sub.jpg",
    "./assets/devices/laptops.jpg",
    "./assets/devices/earpods2.jpg",
  ];
  const text = [
    "شاومى Poco C40 - رامات 3 جيجا - 32 جيجا بايت - أسود",
    "لافينتو HP365 سماعة أذن لاسلكية تحكم باللمس و شحن لاسلكي - أبيض                            ",
    "أيفون 12 برو - رامات 4 جيجا - 256 جيجا بايت - ذهبي",
    "شاومى Poco C40 - رامات 3 جيجا - 32 جيجا بايت - أسود",
    "لافينتو HP365 سماعة أذن لاسلكية تحكم باللمس و شحن لاسلكي - أبيض                            ",
    "أيفون 12 برو - رامات 4 جيجا - 256 جيجا بايت - ذهبي",
  ];
  const price = ["3000", "5000", "8000", "5000", "1500", "8000"];

  return (
    <div className="container">
      <div className="row mt-5">
        {images.map((image, index) => (
          <div key={index} className="col">
            <div className="card" style={{ width: 190 }}>
              <img src={image} className="card-img-top w-75" alt="" />
              <div className="card-body">
                <p className="card-text">{text[index]}</p>
                <p className="fw-bold text-end">
                  <h4>
                    {price[index]} <span className="h5">pound/</span>
                  </h4>
                </p>
                <div className="row text-center">
                  <div className="col">
                    <a
                      href="#"
                      className="btn btn-center"
                      style={{ background: "orange", color: "white" }}
                    >
                      اضف الى سلة التسوق
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="./assets/exploresave_web_ar.png" alt="" />
    </div>
  );
}

export default FifthDiv;
