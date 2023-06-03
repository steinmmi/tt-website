<template>
    <div class="container">
        <div class="favorite-farms">
            <div class="header-category">
                <span class="title">Fermes favorites</span>
                <BaseInput placeholder="Rechercher" color="#F26173" icon="search"/>
            </div>
            <div class="items">
                <FarmItem v-for="farm in favoriteFarms" :key="farm.id" :farm="farm" />
            </div>
        </div>
        <div class="favorite-products">
            <div class="header-category">
                <span class="title">Produits favoris</span>
                <BaseInput placeholder="Rechercher" color="#F26173" icon="search"/>
            </div>
            <div class="items">
                <ProductItem v-for="product in favoriteProducts" :key="product.id" :product="product" />
            </div>
        </div>
    </div>
</template>

<script>
import BaseInput from '../components/BaseInput.vue';
import FarmItem from '../components/FarmItem.vue';
import ProductItem from '../components/ProductItem.vue';

export default {
    name: "HomePortal",
    components: { BaseInput, FarmItem,ProductItem },
    computed: {
        currentAccount() {
            return this.$store.state.accounts.find(account => account.id === this.$store.state.currentAccount)
        },
        favoriteFarms() {
            return this.currentAccount.favorite.farm.map(farmId => this.$store.state.farms.find(farm => farm.id === farmId)).filter (farm => farm)
        },
        favoriteProducts() {
            return this.currentAccount.favorite.products.map(productId => this.$store.state.products.find(product => product.id === productId)).filter (product => product)
        }
    },
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px 100px;
}

.container .header-category {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    color: #F26173;
    margin-bottom: 10px;
}

.items {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    flex-wrap: wrap;
}
.title {
    text-transform: uppercase;
}
</style>