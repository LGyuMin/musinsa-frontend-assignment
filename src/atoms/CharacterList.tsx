import { atom, selector } from 'recoil';

export interface IFilter {
    [K: string]: boolean
    died: boolean
    female: boolean
    tvSeries: boolean
    deleted: boolean
}

export const FilterAtom = atom<IFilter>({
    key: 'filter_atom',
    default: {
        died: false,
        female: false,
        tvSeries: false,
        deleted: true
    }
})

export interface IListItem {
    [K: string]: string | string[] | number | boolean
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

export const ListAtom = atom<IListItem[]>({
    key: 'list_atom',
    default: [] as IListItem[]
})

export const FilteredList = selector({
    key: 'filtered_list',
    get: ({get}) => {
        type KeyType = keyof IFilter;
        const filter = get(FilterAtom);
        let filteredList = get(ListAtom);

        for (let key in filter) {
            if (filter[key]) {
                if (key === 'female') filteredList = filteredList.filter(item => item.gender === 'Female')
                else filteredList = filteredList.filter(item => !item[key])
            } 
        }

        return filteredList;
    }
})