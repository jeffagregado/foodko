import React from 'react'

import mapoTofu from '../../images/mapotofu.jpg'
import Button from '../Button'
import Card from '../Card'

function SectionThree() {
    return (
        <div className='section popular'>
            <div className="row title">
                <span>Fresh & local</span>
                <h1>Our Most Popular Recipes</h1>
            </div>
            <div className="row recipes-card">
                <Card src={mapoTofu} alt='Mapo Tofu' className='popular-card'>
                    <div className='pop-card-content'>
                        <span>Mapo Tofu</span>
                        <div className='addCard-content'>
                            <Button text='ADD TO CART' className='addCart' />
                            <span className='price'>$ 99.99</span>
                        </div>
                    </div>
                </Card>
                <Card src={mapoTofu} alt='Mapo Tofu' className='popular-card'>
                    <div className='pop-card-content'>
                        <span>Mapo Tofu</span>
                        <div className='addCard-content'>
                            <Button text='ADD TO CART' className='addCart' />
                            <span className='price'>$ 99.99</span>
                        </div>
                    </div>
                </Card>
                <Card src={mapoTofu} alt='Mapo Tofu' className='popular-card'>
                    <div className='pop-card-content'>
                        <span>Mapo Tofu</span>
                        <div className='addCard-content'>
                            <Button text='ADD TO CART' className='addCart' />
                            <span className='price'>$ 99.99</span>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="row btn-moreRecipes">
                <Button secondary text='Load more recipes' />
            </div>
        </div>
    )
}

export default SectionThree
