import React, { useState } from 'react';
import styled from 'styled-components';

const CountUp = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <Wrapper>
                <h1>{count}</h1>
                <button type="button" onClick={() => setCount(count + 1)}>+</button>
            </Wrapper>
        </>
    );
};
const Wrapper = styled.div`
       border: 3px solid #7C9B2F;
       position: relative;
       padding: 1rem;
       &::after {
         content: "team decide";
         background: #7C9B2F;
       }
       &not(:empty)::after {
         position: absolute;
         color: white;
         display: block;
         bottom: -1.5rem;
         line-height: 1.5rem;
         padding: 0 0.5em;
       }
       &not(:empty)::after {
         left: -3px;
         bottom: 0;
       }
    `;
export default CountUp;