import db from '../db';

class CryptoService {
  static getCryptoPriceByName(
    {
      cryptoSymbol,
      cryptoSymbolConvertTo,
    }: {
      cryptoSymbol: string;
      cryptoSymbolConvertTo: string;
    },
  ): number {
    console.log('db.data', db.data);

    let price: number = 0;
    if (db.data) {
      price = db.data[cryptoSymbol][cryptoSymbolConvertTo];
    }

    return price;
  }
}

export default CryptoService;
