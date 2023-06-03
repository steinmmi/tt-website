<template>
<div class="card">
    <div class="card-image">
        <img :src="require(`@/assets/products/${product.id}.png`)" alt="product">
        <div class="add-to-card">
            <BaseIcon icon="basket" bgColor="#F26173" color="white"/>
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
            {{ product.price }}€
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
    components: { BaseIcon }
}
</script>

<style scoped>

.card {
    max-width: 390px;
    width: 100%;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    background-color: #FFF6E9;
    padding: 10px;

}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}
.add-to-card {
    position: absolute;
    bottom: 5px;
    right: 5px;
}
.card-image {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    
}

</style>