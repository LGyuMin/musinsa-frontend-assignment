import React from 'react';
import styled from 'styled-components';
import useScrollEvent from './hooks/useScrollEvent';

import Title from './components/Title';
import Filter from './components/Filter';
import List from './components/List';
import Loading from './components/Loading';

const StyledDiv = styled.div`
    max-width: 1000px;
    min-width: 400px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #000;
    margin: 0 auto;
    padding: 20px;
`;

function App() {
    const loading = useScrollEvent()
    
    return (
        <StyledDiv>
            { loading && <Loading /> }
            <Title />
            <Filter />
            <List />
        </StyledDiv>
    )
}

export default App
