import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_Vo3Ix65TavBG3LsL1y8Yjiqv2UnlPbPYTswYTnCD');

export async function convertCurrency(fromCurrency,toCurrency,units){
    const res= await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });

    const multiplier=res.data[toCurrency];
    return multiplier*units;
}


