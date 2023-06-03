import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accounts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        password: '123456',
        favorite: {
          farm: [
            1,1,1,1,1,1, 1
          ],
          products: [
            1, 2, 3, 4
          ]
        }
      }
    ],
    currentAccount: 1,
    farms: [
      {
        id: 1,
        name: 'La ferme de Jeanne',
        adress: {
          street: 'Rue de la ferme',
          city: 'Rennes',
          zip: '35000'
        },
        labels: [ "fair-trade" ],
        products: [ 1, 2 ],
        stars: 4,
        description: 'La ferme de Jeanne est une ferme bio qui produit du lait et du fromage',
      }
    ],
    labels: [
      {
        id: 'fair-trade',
        name: 'Fair Trade',
      }, {
        id: 'bio',
        name: 'Agriculture Biologique',
      }, {
        id: 'v',
        name: 'V-Label',
      }
    ],
    categories: [
      //"milk", 'cheese', 'cereal', 'fish', 'fruits', 'meat'
      {
        id: 'milk',
        name: 'Milk',
        color: '#78BBE8'
      },
      {
        id: 'cheese',
        name: 'Cheese',
        color: '#FDC321'
      },
      {
        id: 'cereal',
        name: 'Cereal',
        color: '#f5f5f5'
      },
      {
        id: 'fish',
        name: 'Fish',
        color: '#2B74B9'
      },
      {
        id: 'fruits',
        name: 'Fruits',
        color: '#f5f5f5'
      },
      {
        id: 'meat',
        name: 'Meat',
        color: '#f5f5f5'
      }
    ],
    products: [
      {
        id: 1,
        name: 'Milk',
        category: 'milk',
        price: 1.5,
        unit: 'L',
        stock: 100,
      },
      {
        id: 3,
        name: 'Special Milk',
        category: 'milk',
        price: 2.5,
        unit: 'L',
        stock: 100,
      },
      {
        id: 2,
        name: 'Cheese',
        category: 'cheese',
        price: 2.5,
        unit: 'kg',
        stock: 100,
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
