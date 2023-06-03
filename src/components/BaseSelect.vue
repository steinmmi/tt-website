<template>
    <div class="select" :style="{backgroundColor: bgColor, color: color, borderColor: color}">
        <div class="icon">
            <BaseIcon :icon="icon"/>
        </div>
        <select>
            <option value="tout" :style="{
                display: 'none'
            }" disabled selected>Catégorie</option>
            <option :key="option" v-for="option in options" :value="option">{{ option }}</option>
        </select>

    </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
export default {
    name: "BaseSelect",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    props: {
        icon: String,
        text: String,
        bgColor: String,
        color: String,
        options: Array
    },
    components: { BaseIcon }
}
</script>

<style scoped>
.select {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    cursor: pointer;
    padding: 10px 20px;
    width: fit-content;
    gap: 10px;
    border: 2px solid;
}

.select select {
    font-family: Cocon;
    border: none;
    color: inherit;
    flex: 1;
}
</style>