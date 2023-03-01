import React, { useCallback } from 'react'
import styled from 'styled-components';
import classNames from 'classnames';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { IFilter, FilterAtom, ListAtom } from '../atoms/CharacterList';

const StyledDiv = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom: 10px;

    button {
        width: 100%;
        font-size: 2rem;
        font-weight: 700;
        padding: 0.8rem 1.5rem;
        border: 2px solid #fff;
        background: #000;
        color: #fff;
        border-radius: 20px;
        cursor: pointer;
        transition: all .3s;
        &.selected {
            background: #fff;
            color: #000;
        }
    }

    @media (hover: hover) and (pointer: fine) {
        button:hover {  
            background: #fff;
            color: #000;
        }
    }
`;

interface IFilterBtn {
    type: keyof IFilter | 'reset';
    title: string;
}

const FilterBtnArr: IFilterBtn[] = [
    { type: 'died', title: '생존인물만' },
    { type: 'female', title: '여자' },
    { type: 'tvSeries', title: 'tvSeries 없음' },
    { type: 'reset', title: '초기화' }
]

const Filter = () => {
    const [filter, setFilter] = useRecoilState(FilterAtom);
    const setList = useSetRecoilState(ListAtom);
    const clickFilterBtn = useCallback((type: keyof IFilter | 'reset') => {
        if (type === 'reset') {
            setList(oldVal => oldVal.map(item => ({...item, deleted: false})))
        } else {
            setFilter(oldVal => ({...oldVal, [type]: !filter[type]}))
        }
    }, [filter])
    return (
        <StyledDiv>
            {
                FilterBtnArr.map(item => (
                    <button 
                        className={ classNames('btn', { selected: item.type !== 'reset' && filter[item.type] }) }
                        key={item.type}
                        onClick={() => clickFilterBtn(item.type)}
                    >
                        { item.title }
                    </button>
                ))
            }
        </StyledDiv>
    )
}

export default Filter