import { LowSync } from 'lowdb';
declare type ICryptoSymbol = {
    [key: string]: number;
};
declare type Data = {
    [key: string]: ICryptoSymbol;
};
declare const db: LowSync<Data>;
export default db;
