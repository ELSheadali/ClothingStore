import React from 'react';
import cn from 'classnames';

import socialMediaSection_1Styles from './socialMediaSection_1.module.scss';

function renderSocialMediaSection_1(props) {
  // Example social media data with keys
  const socialMediaData = [
    { id: 1, src: process.env.PUBLIC_URL + '/assets/507f9e9221fde01b05291e250795db83.svg', alt: 'Twitter', name: 'Twitter' },
    { id: 2, src: process.env.PUBLIC_URL + '/assets/1e263e16d37232325b4a083640db89e3.svg', alt: 'Instagram', name: 'Instagram' },
    { id: 3, src: process.env.PUBLIC_URL + '/assets/a2a3756ffa0832b9cc221fead03889db.svg', alt: 'TikTok', name: 'TikTok' },
    { id: 4, src: process.env.PUBLIC_URL + '/assets/4d33c81c0c9932a50216ff4f3dcb24ca.svg', alt: 'Telegram', name: 'Telegram' },
  ];

  return (
    <section className={socialMediaSection_1Styles.socialMediaSection}>
      <div className={socialMediaSection_1Styles.flexCol}>
        <div className={socialMediaSection_1Styles.rectangle} />

        <div className={socialMediaSection_1Styles.flexRow}>
          <div className={socialMediaSection_1Styles.flexColSocialMedia}>
            <div className={socialMediaSection_1Styles.flex_col}>
              {socialMediaData.map((item) => (
                <div key={item.id} className={socialMediaSection_1Styles.flex_row}>
                  <img
                    className={socialMediaSection_1Styles.imageSocial}
                    src={item.src}
                    alt={item.alt}
                  />
                  <h2 className={socialMediaSection_1Styles.mediumTitle}>{item.name}</h2>
                </div>
              ))}
            </div>
          </div>

          <h2 className={socialMediaSection_1Styles.mediumTitleYear}>2024</h2>
          <h2 className={socialMediaSection_1Styles.mediumTitleContactSupport}>Contact Support</h2>
        </div>
      </div>
    </section>
  );
}

export default renderSocialMediaSection_1;
