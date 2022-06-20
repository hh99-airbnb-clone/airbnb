import React, { useState } from 'react';

const App = () => {
    const [counte, setCounte] = useState(0);
    const 증가 = () => {
        setCounte(counte + 10);
    };
    const 감소 = () => {
        setCounte(counte - 10);
    };
    return (
        <>
            <p>{counte}</p>
            <button onClick={증가}>10증가</button>
            <button onClick={감소}>10감소</button>
        </>
    );
};

export default App;
