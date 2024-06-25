import React, { useState } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import Login from './Login'; // Adjust the path as per your project structure
import clothingSectionStyles from './clothingSection.module.scss';

function RenderClothingSection(props) {
  const [isLoginOpen, setLoginOpen] = useState(false);

  const openLogin = () => {
    setLoginOpen(true);
  };

  const closeLogin = () => {
    setLoginOpen(false);
  };

  return (
    <section className={clothingSectionStyles.clothingSection}>
      <img
        className={clothingSectionStyles.clothingCoverImage}
        src={`${process.env.PUBLIC_URL}/assets/6307f030a2c97111e1377ba71e41624c.png`}
        alt="alt text"
      />

      <div className={clothingSectionStyles.contentBox}>
        <div className={clothingSectionStyles.flexCol}>
          <div className={clothingSectionStyles.flexRow}>
            <Link
              to="/assortment"
              className={cn(clothingSectionStyles.mediumTitle, clothingSectionStyles.placeholderRedirect)}
            >
              <h2>ASSORTMENT</h2>
            </Link>
            <Link
              to="/clothing-shop"
              className={cn(clothingSectionStyles.heroTitle, clothingSectionStyles.placeholderRedirect)}
            >
              <h1>CLOTHING SHOP</h1>
            </Link>
            <Link
              to="/about-us"
              className={cn(clothingSectionStyles.mediumTitle, clothingSectionStyles.placeholderRedirect)}
            >
              <h2>ABOUT US</h2>
            </Link>

            <div className={clothingSectionStyles.flexRow1}>
              <img
                className={clothingSectionStyles.wrapper1}
                src={`${process.env.PUBLIC_URL}/assets/a1787d50ef20c88a7f0b10f084ea69e9.svg`}
                alt="alt text"
              />
              <img
                className={clothingSectionStyles.image1}
                onClick={openLogin}
                src={`${process.env.PUBLIC_URL}/assets/e71c62de59aeabd78ab97f1227945a3b.svg`}
                alt="alt text"
              />
            </div>
          </div>

          <div className={clothingSectionStyles.flexRow2}>
            <img
              className={clothingSectionStyles.clothingImage}
              src={`${process.env.PUBLIC_URL}/assets/1257819942cb9e3491dda5349c3babd8.png`}
              alt="alt text"
            />
            <img
              className={clothingSectionStyles.clothingImage}
              src={`${process.env.PUBLIC_URL}/assets/ed40ee0e769fab22651e274292f8f3c2.png`}
              alt="alt text"
            />
            <img
              className={clothingSectionStyles.image3}
              src={`${process.env.PUBLIC_URL}/assets/b8492411c8515aeac3220cc19ba61128.png`}
              alt="alt text"
            />
          </div>
        </div>

        <div className={clothingSectionStyles.rectangleDecoration} />
      </div>

      <img
        className={clothingSectionStyles.image6}
        src={`${process.env.PUBLIC_URL}/assets/894384210e9f67d770c171929388ad34.png`}
        alt="alt text"
      />
      <img
        className={clothingSectionStyles.separatorLine}
        src={`${process.env.PUBLIC_URL}/assets/270ed31ba8ddedf5bc7723bffcc5bfdc.png`}
        alt="alt text"
      />

      {/* Render the Login popup */}
      {isLoginOpen && <Login isOpen={isLoginOpen} onClose={closeLogin} />}
    </section>
  );
}

export default RenderClothingSection;
