import React from 'react';
import styled from 'styled-components';

import Title from './components/Title';
import Filter from './components/Filter';
import List from './components/List';

const StyledDiv = styled.div`
    max-width: 1000px;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #000;
    margin: 0 auto;
    padding: 20px;
`;

function App() {

    return (
        <StyledDiv>
        <Title />
        <Filter />
        <List />
        </StyledDiv>
    )
}

export default App
