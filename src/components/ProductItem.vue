<template>
    <div class="card">
        <div class="card-image">
            <img :src="require(`@/assets/products/${product.id}.png`)" alt="product">

        </div>
        <div class="add-to-card-container">
            <div class="add-to-card" v-if="!showAdd" @click="showAdd = true">
                <BaseIcon icon="basket" />
            </div>
            <div class="add-to-card new" v-else>
                <BaseIcon icon="delete" @click.native.prevent="showAdd = false; quantity = 0" />
                <BaseIcon icon="remove" @click.native.prevent="quantity--" />
                {{ quantity }} {{ product.unit }}
                <BaseIcon icon="add" @click.native.prevent="quantity++" />
                <BaseIcon icon="checkmark" @click.native.prevent="showAdd = false; quantity = 0" />
            </div>
        </div>
        <div class="card-content">
            <div class="title">
                {{ product.name }}
            </div>
            <div class="description">
                {{ product.description }}
            </div>
            <div class="price">
                {{ product.price }}€ / {{ product.unit }}
            </div>
        </div>
    </div>
</template>

<script>

import BaseIcon from './BaseIcon.vue';

export default {
    name: "ProductItem",
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            showAdd: false,
            quantity: 1
        }
    },
    components: { BaseIcon }
}
</script>

<style scoped>
.card {
    flex-basis: 28%;
    width: 100%;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    background-color: #FFF6E9;
    padding: 0 2%;
    margin-top: 50px;
}

.add-to-card-container {
    position: relative;
}

.price {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
}

.add-to-card.new {
    gap: 15px;
    border-radius: 25px;
}

.card-image {
    transform: translateY(-50px);
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.add-to-card {
    position: absolute;
    bottom: 0px;
    right: 20px;
    transform: translateY(-25px);
    color: #FFF6E9;
    background-color: #229451;
    padding: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}

.card-image {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

}
.card-content {
    text-align: left;
    transform: translateY(-50%);
}

.card-content .title {
font-size: 24px;
}
</style>