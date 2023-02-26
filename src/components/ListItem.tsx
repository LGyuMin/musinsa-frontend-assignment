import React, { memo } from 'react'
import styled from 'styled-components';
import { IListItem } from '../atoms/CharacterList';

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
        p {
            display: flex;
            gap: 5px;
        }
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

interface IProp {
    listItem: IListItem
    deleteItem: (id: string) => void
}

const ListItem = memo(({listItem, deleteItem}: IProp) => {
    return (
        <StyledDiv>
            <div className="info">
                <p>
                    <span>name: </span> 
                    { listItem.name }
                </p>
                <p>
                    <span>aliases: </span>
                    { listItem.aliases[0] === '' ? '-' : listItem.aliases.join(', ')}
                </p>
                <p>
                    <span>title: </span>
                    { listItem.title[0] === '' ? '-' : listItem.title.join(', ')}
                </p>
                <p>
                    <span>books: </span>
                    { listItem.books }
                </p>
                <p>
                    <span>tvSeries: </span>
                    { listItem.tvSeries }
                </p>
            </div>
            <button className='btn' onClick={() => deleteItem(listItem.id)}>삭제</button>
        </StyledDiv>
    )
})

export default ListItem