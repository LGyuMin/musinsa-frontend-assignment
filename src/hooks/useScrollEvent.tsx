import { useState, useEffect, useCallback } from "react";
import throttle from '../modules/Throttle';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { ListAtom, IListItem } from '../atoms/CharacterList';

interface IResData {
    url: string
    name: string
    aliases: string[]
    titles: string[]
    gender: 'Male' | 'Female'
    books: string[]
    tvSeries: string[]
    died: string
}

const useScrollEvent = () => {
    const setList = useSetRecoilState(ListAtom);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const getList = useCallback(async () => {
        await axios.get(`https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=10`)
        .then(res => {
            const newList: IListItem[] = res.data.map((item: IResData) => (
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

            setList(oldVal => oldVal.concat(newList));
            setLoading(false);
        })
        .catch(err => {
            alert('리스트를 불러오는데 문제가 생겼습니다. 관리자에게 문의해주세요.')
            console.log(err);
        })

        setPage(page + 1);
    }, [page])

    useEffect(() => {
        const url = new URL(window.location.href);
        const searchPage = url.searchParams.get('page');
        
        if (searchPage !== null) setPage(Number(searchPage));     
        setLoading(true);

        const listener = throttle(() => {
            if((window.innerHeight + window.scrollY + 10) >= document.body.offsetHeight) {          
                setLoading(true);
            }
        })
        
        document.addEventListener('scroll', listener)

        return () => {
            document.removeEventListener("scroll", listener);
        }
    }, [])

    useEffect(() => {
        if (loading && page < 11) getList();
        else if (page > 10) setLoading(false);
    }, [loading])

    return loading;
}

export default useScrollEvent;