import React, { FC, useState } from 'react';
import {
    StyledBox,
    StyledInput,
    StyledButton
} from './ProductCard.styles';

interface IProductCard {
    product: any,
}

const ProductCard: FC<IProductCard> = ({ product }) => {
    const [color, setColor] = useState<string>('red');

    const colorButtons = [
        'red',
        'blue',
        'black'
    ]

    return (
        <StyledBox>
            <div className="left-column">
                <img data-image="'black'" className="active" src="../../../assets/paper.jpg" alt="" />
            </div>
            <div className="right-column">
                <div className="product-description">
                    <span>Headphones</span>
                    <h1>Beats EP</h1>
                    <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
                </div>
                <div className="product-configuration">
                    <div className="product-color">
                        <span>Color</span>
                        <div className="color-choose">
                            {colorButtons.map((c) => (
                                <div key={c}>
                                    <StyledInput type="radio" id={c} name="color" value={c} checked={color === c} onChange={() => setColor(c)} />
                                    <label htmlFor={c}>
                                        <div />
                                        <span />
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="cable-config">
                        <span>Cable configuration</span>
                        <div className="cable-choose">
                            <StyledButton>Straight</StyledButton>
                        </div>
                        <a href="#">How to configurate your headphones</a>
                    </div>
                </div>
                <div className="product-price">
                    <span>148$</span>
                    <a href="#" className="cart-btn">Add to cart</a>
                </div>
            </div>
        </StyledBox>
    );
};

export default ProductCard;
