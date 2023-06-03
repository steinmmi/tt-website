<template>
    <div class="category-picto" :style="{
        borderColor: category.color,
    }">
        <img :src="require(`@/assets/categories/${category.id}.png`)" alt="category-picto">
    </div>
</template>

<script>
export default {
    name: "BaseCategoryPicto",
    props: {
        category: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
img {
    width: 20px;
    height: 20px;
}
.category-picto {
    display: flex;
    border: 1px solid;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #ffffff;
}
</style>