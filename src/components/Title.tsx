import React from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    height: 250px;
    align-items: center;
    text-align: center;

    h1 { 
        width: 100%;
        font-size: 55px;
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