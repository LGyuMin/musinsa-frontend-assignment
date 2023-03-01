import React, {useCallback} from 'react'
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ListAtom, FilteredList } from '../atoms/CharacterList';
import ListItem from './ListItem';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    .no-result {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 300px;
        font-size: 2.5rem;
        color: #fff;
        text-align: center;
    }
`;

const List = () => {
    const [CharactorList, setCharactorList] = useRecoilState(ListAtom);
    const filteredCharactorList = useRecoilValue(FilteredList)

    const deleteItem = useCallback((id: string) => {
        setCharactorList(oldVal =>  
            oldVal.map(item => item.id === id ? {...item, deleted: true} : item)
        )
    }, [CharactorList])
    
    return (
        <StyledDiv>
            {
                filteredCharactorList.length > 0
                ?
                    filteredCharactorList.map(item => 
                        <ListItem 
                            listItem={item} 
                            key={item.id}
                            deleteItem={deleteItem}
                        />
                    ) 
                :
                <div className='no-result'>검색 결과가 없습니다.</div>
            }
        </StyledDiv>
    )
}

export default List