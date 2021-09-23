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
                    <span>Paper</span>
                    <h1>Happy office paper</h1>
                    <p>
                        Wood-free white photocopier paper suitable for everyday printing designed mainly for black and white documents,
                        which account for the majority of printouts in any office ensures fast printing and copying
                    </p>
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
                        <span>Paper Size</span>
                        <div className="cable-choose">
                            <StyledButton>A4</StyledButton>
                            <StyledButton>A5</StyledButton>
                        </div>
                        <a href="#">How to read paper size?</a>
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
