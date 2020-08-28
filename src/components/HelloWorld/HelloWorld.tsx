import React, { FC } from 'react';
import { IHelloWorld, Item } from './HelloWorld.types';
import { StyledHeader } from './HelloWorld.styled';

const HelloWorld: FC<IHelloWorld> = ({
    helloData
}) => {
    const tmpArray = [helloData]

    return (
        <div>
            <StyledHeader>HelloWorld</StyledHeader>
            {helloData.length !== 0 && tmpArray.map((item: Item) => {
                return (
                    <li key={item.id}>
                        {item.userId} | {item.id} | {item.completed} | {item.title}
                    </li>
                )
            })}
        </div>
    );
};

export default HelloWorld;
