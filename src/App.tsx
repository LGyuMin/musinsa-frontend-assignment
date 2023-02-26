import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { ListAtom } from './atoms/CharacterList';

import Title from './components/Title';
import Filter from './components/Filter';
import List from './components/List';
import Loading from './components/Loading';

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
    const setList = useSetRecoilState(ListAtom);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getList();
    }, [])

    const getList = useCallback(() => {
        if (loading) return;
        setLoading(true);
        setPage(page + 1)
        axios.get(`https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=10`)
        .then(res => {
            const newList = res.data.map((item: any) => (
                {
                    id: item.url,
                    name: item.name,
                    aliases: item.aliases,
                    title: item.titles,
                    gender: item.gender,
                    books: item.books[0] === '' ? 0 : item.books.length,
                    tvSeries: item.tvSeries[0] === '' ? 0 : item.tvSeries.length,
                    died: item.died
                }
            ));

            setList(oldVal => [...oldVal, ...newList]);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
        })
    }, [page, loading])

    useEffect(() => {
        const listener = () => {
            if((window.innerHeight + window.scrollY + 10) >= document.body.offsetHeight) {
                getList();
            }
        }
        document.addEventListener('scroll', listener)

        return () => {
            document.removeEventListener("scroll", listener);
        }
    }, [getList])
    
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
