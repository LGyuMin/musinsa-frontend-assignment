import { atom, selector } from 'recoil';

export interface IFilter {
    survived: boolean;
    female: boolean;
    noTvSeries: boolean;
}

export const FilterAtom = atom<IFilter>({
    key: 'filter_atom',
    default: {
        survived: false,
        female: false,
        noTvSeries: false
    }
})

export interface IListItem {
    id: string
    name: string
    aliases: string[]
    title: string[]
    books: number
    tvSeries: number
    gender: string
    died: string
    deleted: boolean
}

const test_data: IListItem[] = [
    { 
        id: '0',
        name: 'Balon Greyjoy',
        aliases: [
            "Balon the Brave",
            "Balon the Blessed",
            "Balon the Twice Crowned",
            "Balon the Widowmaker",
            "The Kraken King"
        ],
        title: [
            "Iron King",
            "King of the Isles and the North",
            "King of Salt and Rock",
            "Son of the Sea Wind",
            "Lord Reaper of Pyke",
            "The Greyjoy",
            "Captain of the Great Kraken"
        ],
        books: 5,
        tvSeries: 3,
        gender: 'Male',
        died: '',
        deleted: false
    }
]

export const ListAtom = atom<IListItem[]>({
    key: 'list_atom',
    default: [] as IListItem[]
    // default: test_data
})

export const FilteredList = selector({
    key: 'filtered_list',
    get: ({get}) => {
        const filter = get(FilterAtom);
        let filteredList = get(ListAtom);

        filteredList = filteredList.filter(item => !item.deleted) 
        // TODO: 리팩토링 필요
        if (filter.survived) filteredList= filteredList.filter(item => item.died !== '')
        if (filter.female) filteredList= filteredList.filter(item => item.gender === 'Female')
        if (filter.noTvSeries) filteredList= filteredList.filter(item => item.tvSeries === 0)

        return filteredList;
    }
})