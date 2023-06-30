export interface Publication {
    id: string;
    slug: string;
    name: string;
    coverUrl: string;
    publishFrom: string;
    publishUntil: string;
    categories: string[];
}
export declare const publications: Publication[];
