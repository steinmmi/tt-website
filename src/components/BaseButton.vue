<template>
    <div class="button" :style="{backgroundColor: bgColor, color }" :class="{
        'icon-only': (!text || !text.length) && icon && icon.length
    }">
        <div class="icon">
            <BaseIcon :icon="icon"/>
        </div>
        <div class="text">
            {{ text }}
        </div>
    </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue';

export default {
    name: "BaseButton",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    props: {
        icon: String,
        text: String,
        bgColor: String,
        color: String
    },
    components: { BaseIcon }
}
</script>

<style scoped>

.button.icon-only {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 0px;
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    padding: 10px 20px;
    width: fit-content;
    gap: 10px;
}

.light .icon {
    fill: red;
}   


</style>