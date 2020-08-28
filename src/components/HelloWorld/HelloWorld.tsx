import React, { FC } from 'react';

interface IHelloWorld {
    actions: any,
    helloData: any;
}

type Item = {
    completed: boolean,
    id: number,
    title: string,
    userId: number
}

const HelloWorld: FC<IHelloWorld> = ({
    actions,
    helloData
}) => {
    const tmpArray = [helloData]

    return (
        <div>
            <p>HelloWorld</p>
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
