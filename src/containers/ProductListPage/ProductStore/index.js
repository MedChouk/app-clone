/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsBySlug } from '../../../actions';
import './style.css';
import { useSelector } from 'react-redux';
import { generatePublicUrl } from '../../../urlConfig';
import { Link } from "react-router-dom";


/**
* @author
* @function ProductStore
**/

export const ProductStore = (props) => {

    const product = useSelector(state => state.product);
    const [priceRange, setPriceRange] = useState({
        under5k: 500,
        under10k: 1000,
        under15k: 1500,
        under20k: 2000,
        under30k: 3000,
    });
    const dispatch = useDispatch();

    useEffect(() => {
        const { match } = props;
        dispatch(getProductsBySlug(match.params.slug))
    }, []);

    return (
        <>
            {
                Object.keys(product.productsByPrice).map((item, index) => {

                    return (
                        <div className='card' key={index}>
                            <div className='cardHeader'>
                                <div>{props.match.params.slug} mobile under {priceRange[item]}</div>
                                <button>view all</button>
                            </div>
                            <div style={{ display: 'flex' }}>
                                {
                                    product.productsByPrice[item].map((product) =>
                                        <Link 
                                        to={`/${product.slug}/${product._id}/p`}
                                        style={{
                                          display: "block",
                                          textDecoration: "none",
                                          color: "#000",
                                        }}
                                        className='productContainer' 
                                        key={product._id}>
                                            <div className='productImgContainer'>
                                                <img src={generatePublicUrl(product.productPictures[0].img)} />
                                            </div>
                                            <div className='productInfo'>
                                                <div style={{ margin: '5px 0' }}>
                                                    {product.name}
                                                </div>
                                                <div>
                                                    <span>4.3</span>
                                                    <span>6554563</span>
                                                </div>
                                                <div className='productPrice'>{product.price}</div>
                                            </div>
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                    );
                })
            }
        </>
    )
}