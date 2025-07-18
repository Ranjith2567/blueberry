import React from 'react'
import Fruits from '../Images/Fruits.svg';
import Drinks from '../Images/Drinks.svg';
import Bakery from '../Images/Bakery.svg';
import FastFood from '../Images/Fast Food.svg';
import Snacks from '../Images/Snacks.svg';
import Vegetables from '../Images/Vegetables.svg';
const Explore = () => {
  return (

    <div className='image-row'>
        <div className="image-box green">
            <img src={Fruits} alt="Fruits" />
            <p>Fruits</p>
            <span>291 items</span>
          </div>
          <div className="image-box purple">
            <img src={Drinks} alt="Cold Drinks" />
            <p>Cold Drinks</p>
            <span>49 items</span>
          </div>
    <div className="image-box yellow">
            <img src={Bakery} alt="Bakery" />
            <p>Bakery</p>
            <span>8 items</span>
          </div>
<div className="image-box pink">
            <img src={FastFood} alt="Fast Food" />
            <p>Fast Food</p>
            <span>291 items</span>
          </div>
<div className="image-box green">
            <img src={Snacks} alt="Snacks" />
            <p>Snacks</p>
            <span>49 items</span>
          </div>
<div className="image-box purple">
            <img src={Vegetables} alt="Vegetables" />
            <p>Vegetables</p>
            <span>485 items</span>
            </div>
    </div>
  
  )
}
export default Explore