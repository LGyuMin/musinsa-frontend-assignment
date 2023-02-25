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

interface IList {
    name: string
    aliases: string[]
    title: string[]
    books: number
    tvSeries: number
    gender: string
    died: string
}