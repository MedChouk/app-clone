import React from 'react';
import Layout from '../../components/Layout';
import getParams from '../../utils/getParams';
import { ProductStore } from './ProductStore';
import './style.css';
import { ProductPage } from './ProductPage';

/**
* @author
* @function ProductListPage
**/

export const ProductListPage = (props) => {

  const renderProduct = () => {
    console.log(props);
    const params = getParams(props.location.search);
    let content = null;
    switch (params.type) {
      case "store":
        content = <ProductStore {...props} />;
        break;
      case "page":
        content = <ProductPage {...props} />;
        break;
      default:
        content = null
    }

    return content;

  };

  return (
    <Layout>
      <ProductStore {...props} />
      {renderProduct()}
    </Layout>
  )
}