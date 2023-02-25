import React, { memo } from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 100%;
    background: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    padding: 2rem;

    .info {
        width: 75%;
        font-size: 18px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px 5px;
        p:nth-child(3) {
            grid-column: 1 / span 2;
        }
        span { color: #cc4e63; }
    }

    button {
        width: 90px;
        height: 40px;
        border: 2px solid #000;
        background: #fff;
        color: #000;
        font-size: 16px;
        font-weight: 700;
        border-radius: 20px;
        cursor: pointer;
        transition: all .3s;
        &:hover {
            background: #000;
            color: #fff;
        }
    }
`;

const ListItem = memo(() => {
    return (
        <StyledDiv>
            <div className="info">
                <p>
                    <span>name: </span>홍길동
                </p>
                <p>
                    <span>aliases: </span>소설 주인공, 도둑, 열혈청년
                </p>
                <p>
                    <span>title: </span>신홍길동전, 도둑들
                </p>
                <p>
                    <span>books: </span> 2
                </p>
                <p>
                    <span>tvSeries: </span> 4
                </p>
            </div>
            <button className='btn'>삭제</button>
        </StyledDiv>
    )
})

export default ListItem