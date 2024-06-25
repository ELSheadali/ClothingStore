import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import renderClothingSection from './clothingSection.js';
import renderProductsSection_1 from './productsSection_1.js';
import renderSocialMediaSection_1 from './socialMediaSection_1.js';

import styles from './index.module.scss';

function Homepage(props) {
  return (
    <main className={cn(styles.main, props.className, 'homepage-page')}>
      {renderClothingSection(props)}
      {renderProductsSection_1(props)}
      {renderSocialMediaSection_1(props)}
    </main>
  );
}

Homepage.propTypes = {
  className: PropTypes.string
};

export default Homepage;
