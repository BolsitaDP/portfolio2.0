import React from "react";
import { useState } from "react";

const AboutmeInfo = () => {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  const select = (data) => {
    switch (data) {
      case "1":
        setActive1(true);
        setActive2(false);
        setActive3(false);
        setActive4(false);
        break;
      case "2":
        setActive1(false);
        setActive2(true);
        setActive3(false);
        setActive4(false);
        break;
      case "3":
        setActive1(false);
        setActive2(false);
        setActive3(true);
        setActive4(false);
        break;
      case "4":
        setActive1(false);
        setActive2(false);
        setActive3(false);
        setActive4(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="aboutmeInfo">
      <div className="aboutmeInfoLeft">
        <div className="aboutmeQuestions">
          <div className={`aboutmeQuestion1 ${active1}`}>
            <button className="aboutmeQuestion" onClick={() => select("1")}>
              Who I am?
            </button>
          </div>
          <div className={`aboutmeQuestion2 ${active2}`}>
            <button className="aboutmeQuestion" onClick={() => select("2")}>
              Why I became a web developer?
            </button>
          </div>
          <div className={`aboutmeQuestion3 ${active3}`}>
            <button className="aboutmeQuestion" onClick={() => select("3")}>
              Question 3
            </button>
          </div>
          <div className={`aboutmeQuestion4 ${active4}`}>
            <button className="aboutmeQuestion" onClick={() => select("4")}>
              Question 4
            </button>
          </div>
        </div>
      </div>
      <div className="aboutmeInfoRight">
        <div className={`aboutmeInfo1 ${active1}`}>
          21-year-old web developer in training who found what he was passionate
          about a few years ago and decided to turn it into a sustainable way of
          living. For this, he opted for self-taught training, finding the
          balance between what he likes and what is profitable.
        </div>
        <div className={`aboutmeInfo2 ${active2}`}>
          I have always been very close to technology in general, that is why in
          my school I decided to study software programming. There I leaned
          towards video game programming and learned languages ​​like Unity or
          the GameMaker Studio 2 language, which helped me improve my logic.
          After graduating I focused on my professional career (psychology) for
          1 year but I realized that what I really like is code and I decided to
          learn something that would give me a job but that I also liked.
        </div>
        <div className={`aboutmeInfo3 ${active3}`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum maiores
          neque totam fugit deserunt optio ad velit quam quis temporibus. info3
        </div>
        <div className={`aboutmeInfo4 ${active4}`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum maiores
          neque totam fugit deserunt optio ad velit quam quis temporibus. info4
        </div>
      </div>
    </div>
  );
};

export default AboutmeInfo;
