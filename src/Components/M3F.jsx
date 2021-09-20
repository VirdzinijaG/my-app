import React, { useState } from 'react';

function M3F() {
    const [x, set3X] = useState(3); // x - state, set3X - funkcija, useState(3) - pradine reiksme
    const [z, set7Z] = useState(7);
    const [y, setY] = useState(10);

    // const do3 = () => {
    //     this.setState((state) => ({ x: state.x += 3 })) // is anskciau pavyzdis
    //     const newX = x + 3;
    //     set3X(newX);
    // }

    // const do7 = () => {
    //     set7Z(z + 7)
    // }

    return (
        <>
            <button onClick={() => set3X(x + 3)}>{x}X</button>
            {/* <button onClick={do3}>{x}X</button> */}
            <button onClick={() => set7Z(z + 7)}>{z}Z</button>
            {/* <button onClick={do7}>{z}Z</button> */}
            <button onClick={() => setY(x + z)}>{y}Y</button>
        </>
    );
}

export default M3F;