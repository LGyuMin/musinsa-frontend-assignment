import { atom, selector } from 'recoil';

export interface IFilter {
    [K: string]: boolean
    died: boolean
    female: boolean
    tvSeries: boolean
}

export const FilterAtom = atom<IFilter>({
    key: 'filter_atom',
    default: {
        died: false,
        female: false,
        tvSeries: false
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

        filteredList = filteredList.filter(item => !item.deleted)

        if (filter.died) filteredList = filteredList.filter(item => item.died === '')
        if (filter.female) filteredList = filteredList.filter(item => item.gender === 'Female')
        if (filter.tvSeries) filteredList = filteredList.filter(item => item.tvSeries === 0)

        return filteredList;
    }
})