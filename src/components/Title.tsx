import React from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    padding: 75px;

    h1 { 
        width: 100%;
        font-size: 5.5rem;
    }
`
const Title = () => {
  return (
    <StyledDiv>
        <h1>무신사 Front-End 과제</h1>
    </StyledDiv>
  )
}

export default Title