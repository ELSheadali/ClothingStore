import React from 'react';
import Dropdown from 'antd/es/dropdown';
import Input from 'antd/es/input';
import Menu from 'antd/es/menu';
import 'antd/dist/antd.css';

import Card from './Card';  // Import the Card component
import productsSection_1Styles from './productsSection_1.module.scss';

function renderProductsSection_1(props) {
  const items = [
    { image: '/assets/Outfit1.jpg', name: 'Pants' },
    { image: '/assets/Outfit1.jpg', name: 'Shirt' },
    { image: '/assets/Outfit1.jpg', name: 'Jacket' },
    { image: '/assets/Outfit1.jpg', name: 'Pants' },
    { image: '/assets/Outfit1.jpg', name: 'Shirt' },
    { image: '/assets/Outfit1.jpg', name: 'Pants' },
    { image: '/assets/Outfit1.jpg', name: 'Pants' },
    { image: '/assets/Outfit1.jpg', name: 'Pants' },
  ];

  return (
    <section className={productsSection_1Styles.productsSection}>
      <div className={productsSection_1Styles.flexCol}>
        <div className={productsSection_1Styles.rect} />

        <div className={productsSection_1Styles.flexRow}>
          <div className={productsSection_1Styles.flex_row}>
            <div className={productsSection_1Styles.flexRow1}>
              <Input className={productsSection_1Styles.rect1} placeholder="" />
              <img
                className={productsSection_1Styles.productIcon}
                src={process.env.PUBLIC_URL + '/assets/2789a0c49bb25eec07868c313c1bdcaf.svg'}
                alt="alt text"
              />
            </div>

            <Dropdown
              className={productsSection_1Styles.content_box}
              overlay={
                <Menu className={productsSection_1Styles.dropdownMenu}>
                  <Menu.Item className={productsSection_1Styles.dropdownMenuItem}>High price first</Menu.Item>
                  <Menu.Item className={productsSection_1Styles.dropdownMenuItem}>Low price first</Menu.Item>
                  <Menu.Item className={productsSection_1Styles.dropdownMenuItem}>Name A to Z</Menu.Item>
                  <Menu.Item className={productsSection_1Styles.dropdownMenuItem}>Name Z to A</Menu.Item>
                </Menu>
              }>
              <a className={productsSection_1Styles.dropdownLink}>Sort by</a>
            </Dropdown>
          </div>
        </div>

        <div className={productsSection_1Styles.productsGrid}>
          {items.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>

        <div className={productsSection_1Styles.rect2} />
      </div>
    </section>
  );
}

export default renderProductsSection_1;
