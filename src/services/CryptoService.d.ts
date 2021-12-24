declare class CryptoService {
    static getCryptoPriceByName({ cryptoSymbol, cryptoSymbolConvertTo, }: {
        cryptoSymbol: string;
        cryptoSymbolConvertTo: string;
    }): number;
}
export default CryptoService;
