import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Book {
    id: bigint;
    title: string;
    description: string;
}
export interface CompanyInfo {
    name: string;
    description: string;
}
export interface backendInterface {
    addBook(title: string, description: string): Promise<void>;
    editBook(id: bigint, title: string, description: string): Promise<void>;
    getAllBooks(): Promise<Array<Book>>;
    getBio(): Promise<string>;
    getBook(id: bigint): Promise<Book | null>;
    getCompanyInfo(): Promise<CompanyInfo>;
    updateBio(newBio: string): Promise<void>;
    updateCompanyInfo(name: string, description: string): Promise<void>;
}
