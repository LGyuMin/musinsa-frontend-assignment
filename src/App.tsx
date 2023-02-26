import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { ListAtom } from './atoms/CharacterList';

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
    const setList = useSetRecoilState(ListAtom)
    useEffect(() => {
        axios.get('https://www.anapioficeandfire.com/api/characters?page=2&pageSize=10')
        .then(res => {
            const newList = res.data.map((item: any) => (
                {
                    id: item.url,
                    name: item.name === '' ? '-' : item.name,
                    aliases: item.aliases,
                    title: item.titles,
                    gender: item.gender,
                    books: item.books[0] === '' ? 0 : item.books.length,
                    tvSeries: item.tvSeries[0] === '' ? 0 : item.tvSeries.length,
                    died: item.died
                }
            ))

            setList(oldVal => [...oldVal, ...newList])
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    // useEffect(() => {
    //     document.addEventListener('scroll', () => {
    //         console.log('scroll!!');
    //     })

    //     return () => {
    //         document.removeEventListener("scroll", () => {});
    //     }
    // }, [])
    return (
        <StyledDiv>
        <Title />
        <Filter />
        <List />
        </StyledDiv>
    )
}

export default App
