export interface Category {
    id: string;
    name: string;
    slug: string;
    iconurl: string;
    activefrom: string | null;
    activeuntil: string | null;
    createdat?: string;
    updatedat?: string;
}
export declare const categories: Category[];
