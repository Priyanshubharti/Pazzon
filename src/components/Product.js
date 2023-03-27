import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

// Components
import Rating from './Rating'

import close from '../assets/close.svg'

const Product = ({ item, provider, account, dappazon, togglePop }) => {

  return (
    <div className="product">
        <div className="product__details">
              <div className="product__image">
                <img src={item.image} alt="Product" />
              </div>
              <div className="product__overview">
                <h1>{item.name}</h1>

                <Rating value={item.rating} />
                 <hr />
                 <h2>{ethers.utils.formatUnits(item.cost.toString(),"ether")} ETH</h2>
                 <hr />
                 <h2>Overview</h2>
                 <p>
                  {item.description}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem excepturi deserunt rem est aperiam, itaque ut praesentium, odit corrupti, porro aliquid laboriosam atque! Iste sed, dolorem ullam nam aspernatur dolores?

                 </p>
                 </div>
                 <div className="product__order">
                  <h1>{ethers.utils.formatUnits(item.cost.toString(), "ether")} ETH</h1>
                  <p>
                    FREE delivery <br />
                    <strong>
                      {new Date(Date.now() + 345600000 ).toLocaleDateString(undefined,{weekday:'long', month:'long', day:'numeric'})}
                    </strong>
                  </p>
                   
                   

                 </div>
              
        </div>
    </div >
  );
}

export default Product;