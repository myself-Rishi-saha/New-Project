import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Homepage({ messagesuc = "", datanames = [] }) {

  useEffect(() => {
    const left = document.getElementById("left-side");

    const handleMove = e => {
      left.style.width = `${e.clientX / window.innerWidth * 100}%`;
    }

    document.onmousemove = e => handleMove(e);
    document.ontouchmove = e => handleMove(e.touches[0]);

    // Clean up event listeners on component unmount
    return () => {
      document.onmousemove = null;
      document.ontouchmove = null;
    };
  }, []);

  const handleArrow1Click = () => {
    const arrow2 = document.getElementById('arrow2');
    arrow2.scrollLeft += 510;
  };

  const handleArrow3Click = () => {
    const arrow2 = document.getElementById('arrow2');
    arrow2.scrollLeft -= 510;
  };

  return (
    <div>
      <Header />
      <main>
        {messagesuc.length > 0 && (
          <div className="notificationdivindex">
            <div id="notification-container">
              <div className="notification1 notification-successed" style={{ right: '483px', width: '539px', height: '16px' }}>
                <button className="notification-close"></button>
                <div className="notification-message">{messagesuc}</div>
              </div>
            </div>
          </div>
        )}

        <div style={{ height: '15em' }}>
          <div className="blackpanda-animation">
            <div id="left-side" className="side" style={{ height: '15em', marginTop: '114px' }}>
              <h2 className="title" style={{ paddingLeft: '9vw' }}>
                TITLE
                <span className="fancy">TITLE</span>
              </h2>
            </div>
            <div id="right-side" className="side" style={{ height: '15em', marginTop: '114px' }}>
              <h2 className="title" style={{ paddingLeft: '6vw' }}>
                TITLE
                <span className="fancy">
                  <img src="assets/img/babypanda.png" alt="" style={{ height: '8.1vw' }} />
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="big-categories topmargin" id="arrow2">
          <div className="scroll-left">
            <div className="arrow-left" id="arrow3" onClick={handleArrow3Click}>
              <div className="arrow-top"></div>
              <div className="arrow-bottom"></div>
            </div>
          </div>
          <div className="bigCategories" style={{ marginTop: '114px' }}></div>
          <div className="bigCategories"></div>
          <div className="bigCategories"></div>
          <div className="bigCategories"></div>
          <div className="bigCategories"></div>
          <div className="scroll-right">
            <div className="arrow-right" id="arrow1" onClick={handleArrow1Click}>
              <div className="arrow-top"></div>
              <div className="arrow-bottom"></div>
            </div>
          </div>
        </div>

        <div className="most-updated-tshirt topmargin" style={{ marginLeft: '0.5vw', marginRight: '0.5vw' }}>
          MOST UPDATED T-SHIRT
        </div>

        <div className="content" id="content" style={{ maxWidth: '95vw', overflow: 'auto', whiteSpace: 'nowrap' }}>
          {datanames.length > 0 &&
            datanames.map((element, index) => (
              <img key={index} src={element.ImageLink} alt="" className="tshirt" />
            ))}
        </div>

        <div className="arrowRight" id="rightSlide">
          <div className="arrow-top"></div>
          <div className="arrow-bottom"></div>
        </div>
        <div className="arrowLeft" id="leftSlide">
          <div className="arrow-top1"></div>
          <div className="arrow-bottom1"></div>
        </div>
        <div className="special-lunch topmargin" style={{ marginLeft: '0.5vw', marginRight: '0.5vw' }}>
          SPECIAL LUNCH
        </div>
        <div className="popular-categories-l1" style={{ marginLeft: '0.5vw', marginRight: '0.5vw', maxWidth: '95vw', overflow: 'auto', whiteSpace: 'nowrap' }}>
          <div className="categories"></div>
          <div className="categories"></div>
          <div className="categories"></div>
          <div className="categories"></div>
          <div className="categories"></div>
          <div className="categories"></div>
        </div>
        <div className="popular-categories-l2" style={{ marginLeft: '0.5vw', marginRight: '0.5vw', maxWidth: '95vw', overflow: 'auto', whiteSpace: 'nowrap' }}>
          <div className="categories"></div>
          <div className="categories"></div>
          <div className="categories"></div>
          <div className="categories"></div>
          <div className="categories"></div>
          <div className="categories"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
