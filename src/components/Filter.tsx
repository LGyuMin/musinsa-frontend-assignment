import React, { useCallback } from 'react'
import styled from 'styled-components';
import classNames from 'classnames';
import { useRecoilState } from 'recoil';
import { IFilter, FilterAtom } from '../atoms/CharacterList';

const StyledDiv = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom: 10px;

    button {
        width: 100%;
        font-size: 2rem;
        font-weight: 700;
        padding: 8px 15px;
        border: 2px solid #fff;
        background: #000;
        color: #fff;
        border-radius: 20px;
        cursor: pointer;
        transition: all .3s;
        &:hover, &.selected {
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
    { type: 'survived', title: '생존인물만' },
    { type: 'female', title: '여자' },
    { type: 'noTvSeries', title: 'tvSeries 없음' },
    { type: 'reset', title: '초기화' }
]

const Filter = () => {
    const [filter, setFilter] = useRecoilState(FilterAtom);
    const clickFilterBtn = useCallback((type: keyof IFilter | 'reset') => {
        if (type === 'reset') {
            console.log('reset');
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