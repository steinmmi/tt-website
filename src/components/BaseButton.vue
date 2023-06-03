<template>
    <div class="button" :style="{backgroundColor: bgColor, color, borderColor: color }" :class="{
        'icon-only': (!text || !text.length) && icon && icon.length
    }">
        <div class="icon" v-if="icon && icon.length">
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

.button:hover {
    scale: 1.1;
}

.button.icon-only .icon {
    margin-right: 0;
}

.button .icon {
    margin-right: 5px;
}
.button {
    display: flex;
    transition: all .3s ease-in-out;
    border: 1px solid;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    cursor: pointer;
    padding: 10px 20px;
    width: fit-content;
    
}

.light .icon {
    fill: red;
}   


</style>