import { useState } from "react";
import "./qualifacation.css";
const Qualifacation = () => {
  const [toggle, setToggle] = useState(1);

  const ToggleTap = (index) => {
    setToggle(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personel Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggle === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => {
              ToggleTap(1);
            }}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggle === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => {
              ToggleTap(2);
            }}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__section">
          <div
            className={
              toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  The Islamic University of Gaza
                </h3>
                <span className="qualification__subtitle">
                  IT - web development
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2019 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <sapn className="qualification__line"></sapn>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Gaza sky geeks</h3>
                <span className="qualification__subtitle">freelancer</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">front-end Development</h3>
                <span className="qualification__subtitle">Idrak - Gaza</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2019 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <sapn className="qualification__line"></sapn>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">
                  udemy - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2019 - 2021
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">
                  spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2019 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <sapn className="qualification__line"></sapn>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">
                  spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2019 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <sapn className="qualification__line"></sapn>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UI Design</h3>
                <span className="qualification__subtitle">
                  spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2019 - 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifacation;
