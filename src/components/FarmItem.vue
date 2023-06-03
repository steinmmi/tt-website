<template>
    <div class="card">
        <div class="top-infos">
            <div class="farm-cover">
                <img :src="require(`@/assets/farms/${farm.id}.png`)" alt="farm-cover">
                <div class="mask"></div>
            </div>
            <div class="farm-name">
                {{ farm.name }}
            </div>
            <div class="farm-infos">
                <div class="adress">
                    <div class="street">{{ farm.adress.street }}</div>
                    <div class="city">{{ farm.adress.zip }} {{ farm.adress.city }}</div>
                </div>
                <div class="stars">
                    <span v-for="n in farm.stars" :key="n" class="full">★</span>
                    <span v-for="n in 5 - farm.stars" :key="n" class="empty">★</span>
                </div>
            </div>

        </div>
        <div class="farm-bar">
            <div class="plus-btn" v-if="retracted" @click="retracted = false">
                Plus
                <BaseIcon icon="arrowD" color="#F26173" />
            </div>
            <div class="moins-btn" v-else @click="retracted = true">
                Moins
                <BaseIcon icon="arrowU" color="#F26173" />
            </div>
            <div class="picto">
                <BaseCategoryPicto v-for="category in categories" :key="category.id" :category="category" />
            </div>
        </div>
        <div class="more-info-container" v-if="!retracted">
            <hr/>
            <div class="more-info">
                <div class="labels">
                    <span class="label-title">Labels</span>
                    <div class="label" v-for="label in labels" :key="label.id">
                        <img :src="require(`@/assets/labels/${label.id}.png`)" alt="label">
                        {{ label.name }}
                    </div>
                </div>
                <div class="description">
                    {{ farm.description }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BaseCategoryPicto from './BaseCategoryPicto.vue';
import BaseIcon from './BaseIcon.vue';



export default {
    name: "FarmItem",
    props: {
        farm: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            retracted: true
        }
    },
    computed: {
        categories() {
            let allProducts = this.$store.state.products.filter(product => this.farm.products.includes(product.id));
            let allCategories = [];
            allProducts.forEach(product => {
                if (allCategories.includes(product.category)) return;
                allCategories.push(product.category)
            })

            return allCategories.map(categoryId => this.$store.state.categories.find(category => category.id === categoryId)).filter(category => category)
        },
        labels() {
            return this.$store.state.labels.filter(label => this.farm.labels.includes(label.id))
        }
    },
    components: { BaseCategoryPicto, BaseIcon }
}
</script>

<style scoped>
.card {
    max-width: 390px;
    width: 100%;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 10px;

}

.stars .full {
    color: #FFCD3C;
}

.stars .empty {
    color: white;
}

.plus-btn,
.moins-btn {
    display: flex;
    cursor: pointer;
    gap: 5px;
}

.plus-btn div,
.moins-btn div {
    scale: 0.7;
}

.picto {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.top-infos {
    height: 180px;
    position: relative;
    color: white;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-between;
}

hr {
    margin-top: 0;
    border: 2px #F26173 solid;
}

.top-infos .farm-name {
    font-size: 24px;
    padding: 0 20px;
    margin-top: 10px;
}

.farm-infos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 10px;
}
.label img {
    height: 20px;
    width: 20px;
    margin-right: 5px;
}
.label {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 5px;
}
.farm-infos .adress {
    font-size: 14px;
}

.mask {
    background-color: rgba(0, 0, 0, 0.452);
    height: 100%;
    width: 100%;
    position: absolute;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    top: 0;
    left: 0;
}

.farm-cover {
    z-index: -1;
    position: absolute;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.more-info-container {
    padding: 10px 20px;
    padding-top: 1px;
    background-color: #FFF6E9;
}

.more-info {
    display: flex;
    gap: 10px;
}

.more-info > * {
    flex: 1;
    text-align: left;
}
.label-title {
    color: #F26173;
}
.farm-bar {
    background-color: #FFF6E9;
    display: flex;
    flex-wrap: nowrap;
    padding: 10px 20px;
    align-items: center;
    justify-content: space-between;
}

.farm-cover img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 100%;
    object-fit: cover;
}
</style>