<template>
    <div class="input" :style="{backgroundColor: bgColor, color: color, borderColor: color}">
        <input :value="value" @input="$emit('input', $event.target.value)" :type="password ? 'password' : 'text'" :placeholder="placeholder">
        <div class="icon">
            <BaseIcon :icon="icon"/>
        </div>
    </div>
</template>

<script>

import BaseIcon from './BaseIcon.vue';

export default {
    name: "BaseInput",
    props: {
        icon: String,
        placeholder: String,
        bgColor: String,
        color: String,
        password: Boolean,
        value: String
    },
    components: { BaseIcon }
}
</script>

<style scoped>
.input {
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

.input input {
    border: none;
    color: inherit;
    flex: 1;
}

.input input::placeholder {
    color: inherit !important;
    opacity: .8;
    font-family: Cocon;
}

@media (max-width: 768px) {
    .input {
        padding: 10px;
    }
}
</style>
