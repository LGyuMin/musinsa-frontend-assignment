import React from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom: 10px;

    button {
        width: 100%;
        font-size: 20px;
        font-weight: 700;
        padding: 8px 15px;
        border: 2px solid #fff;
        background: #000;
        color: #fff;
        border-radius: 20px;
        cursor: pointer;
        transition: all .3s;
        &:hover {
            background: #fff;
            color: #000;
        }
    }
`;

const Filter = () => {
  return (
    <StyledDiv>
        <button className='btn'>생존인물만</button>
        <button className='btn'>여자</button>
        <button className='btn'>tvSeries 없음</button>
        <button className='btn'>초기화</button>
    </StyledDiv>
  )
}

export default Filter