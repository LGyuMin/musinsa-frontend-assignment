import React, {useCallback} from 'react'
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ListAtom, FilteredList } from '../atoms/CharacterList';
import ListItem from './ListItem';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
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
            { filteredCharactorList.map(item => 
                    <ListItem 
                        listItem={item} 
                        key={item.id}
                        deleteItem={deleteItem}
                    />
                ) 
            }
        </StyledDiv>
    )
}

export default List