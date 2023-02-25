import React from 'react'
import styled from 'styled-components';
import ListItem from './ListItem';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const List = () => {
  return (
    <StyledDiv>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
    </StyledDiv>
  )
}

export default List