import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const StyledButton = styled.button``

export const StyledInput = styled.input`
    opacity: 0;

    + label {
        position: relative;
    }

    &:checked + label div {
        width: 20px;
        height: 20px;
        position: absolute;
        z-index: 1;
        top: -5%;
        left: 15%;

        &:before {
            position: absolute;
            left: 0;
            top: 50%;
            height: 50%;
            width: 3px;
            background-color: white;
            content: "";
            transform: translateX(10px) rotate(-45deg);
            transform-origin: left bottom;
        }

        &:after {
            position: absolute;
            left: 0;
            bottom: 0;
            height: 3px;
            width: 100%;
            background-color: white;
            content: "";
            transform: translateX(10px) rotate(-45deg);
            transform-origin: left bottom;
        }
    }
`

export const StyledBox = styled(Box)`
    @media (max-width: 940px) {
        flex-direction: column;
        margin-top: 60px;

        .left-column {
            img {
                width: 300px;
            }
        }
        .right-column,
        .left-column {
            width: 100% !important;
        }
    }

    @media (max-width: 535px) {
        .left-column img {
            width: 220px;
        }
    }

    max-width: 1200px;
    margin: 0 auto;
    padding: 15px;
    display: flex;

    .left-column {
        width: 65%;
        position: relative;

        img {
            width: 100%;
            left: 0;
            top: 0;
            opacity: 0;
            transition: all 0.3s ease;

            &.active {
                opacity: 1;
            }
        }
    }
    .right-column {
        width: 35%;
        margin-top: 60px;

        .product-price {
            display: flex;
            align-items: center;

            span {
                font-size: 26px;
                font-weight: 300;
                color: #43474D;
                margin-right: 20px;
            }
        }

        .cart-btn {
            display: inline-block;
            background-color: #7DC855;
            border-radius: 6px;
            font-size: 16px;
            color: #FFFFFF;
            text-decoration: none;
            padding: 12px 30px;
            transition: all .5s;

            &:hover {
                background-color: #64af3d;
            }
        }

        .cable-choose {
            margin-bottom: 20px;

            button {
                border: 2px solid #E1E8EE;
                border-radius: 6px;
                padding: 13px 20px;
                font-size: 14px;
                color: #5E6977;
                background-color: #fff;
                cursor: pointer;
                transition: all .5s;

                &:focus {
                    border: 2px solid #86939E;
                    outline: none;
                }
            }
        }

        .cable-config {
            border-bottom: 1px solid #E1E8EE;
            margin-bottom: 20px;

            a {
                color: #358ED7;
                text-decoration: none;
                font-size: 12px;
                position: relative;
                margin: 10px 0;
                display: inline-block;

                &:before {
                    content: &amp;quot;?&amp;quot;;
                    height: 15px;
                    width: 15px;
                    border-radius: 50%;
                    border: 2px solid rgba(53, 142, 215, 0.5);
                    display: inline-block;
                    text-align: center;
                    line-height: 16px;
                    opacity: 0.5;
                    margin-right: 5px;
                }
            }
        }

        .product-description {
            border-bottom: 1px solid #E1E8EE;
            margin-bottom: 20px;

            span {
                font-size: 12px;
                color: #358ED7;
                letter-spacing: 1px;
                text-transform: uppercase;
                text-decoration: none;
            }

            h1 {
                font-weight: 300;
                font-size: 52px;
                color: #43484D;
                letter-spacing: -2px;
            }

            p {
                font-size: 16px;
                font-weight: 300;
                color: #86939E;
                line-height: 24px;
            }
        }

        .product-color {
            margin-bottom: 30px;

            .color-choose {
                div {
                    display: inline-block;
                }

                label span {
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    margin: -1px 4px 0 0;
                    vertical-align: middle;
                    cursor: pointer;
                    border-radius: 50%;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.33);
                }

                label[for=red] span {
                    background-color: #C91524;
                }

                label[for=blue] span {
                    background-color: #314780;
                }

                label[for=black] span {
                    background-color: #323232;
                }
            }
        }
    }
`;
