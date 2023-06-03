<template>
    <div class="header">
        <div class="left">
          <img alt="Website logo" src="../assets/logo.png" class="logo">
        </div>
        <div class="right">
          <BaseButton icon="basket" bgColor="#F26173" color="white"/>
          <router-link to="account-portal">
          <BaseButton icon="account" bgColor="#F26173" color="white"/>
        </router-link>
        </div>
        
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
  name: 'BaseHeader',
  components: {
    BaseButton
},
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

.header .logo {
  max-height: 80px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  color: white;
}

.header .right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

</style>