import React from "react";
import styled from "styled-components";

export default function Testing() {
    return (
        <Wrapper>
            <h3>hello world</h3>
            <p>hello people</p>
            <button>click</button>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    h3 {
        color: red;
    }
`;
