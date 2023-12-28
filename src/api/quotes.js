import { quotesCategories } from '../helpers/quotesCategories';
import { v4 as uuid } from 'uuid';

export const getQuote = async (category) => {
    if (!quotesCategories.includes(category)) return null;

    const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        headers: {
            'X-Api-Key': 'gXOBWLE4XasnBlXg/8fprQ==T7RApdt0O99qEO8r'
        }
    });
    
    const id = uuid();
    const quote = await (await res.json())[0]

    return {
        id,
        ...quote,
    };
};
