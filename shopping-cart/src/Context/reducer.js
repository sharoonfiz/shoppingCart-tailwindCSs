import { faker, it } from '@faker-js/faker'

const product = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.urlPicsumPhotos(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),

}));

console.log("json", product);

export const initialState = {
    products: product,
    cart: [],
    total: 0,
    // qty: 0,
}

console.log("cartss", initialState.cart);


export const reducerCallBack = (state, action) => {

    const { type, payload } = action;


    switch (type) {



        case "ADD_CART":

            return { ...state, cart: [...state.cart, { ...payload, qty: 1 }] }


        case "REMOVE_CART":

            return { ...state, cart: state.cart.filter((cart) => cart.id !== payload) }


        case "CHANGE_CART_QTY":

            return { ...state, cart: state.cart.filter((items) => (items.id === payload.id ? items.qty = payload.qty : items.qty)) }

        // doubt in abouve line why not map



    }

}