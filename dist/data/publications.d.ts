export interface Publication {
    id: string;
    slug: string;
    name: string;
    coverurl: string;
    publishfrom: string;
    publishuntil: string;
    categories: string[];
}
export declare const publications: Publication[];
