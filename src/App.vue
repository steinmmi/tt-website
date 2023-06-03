<template>
  <div id="app">
    <div id="nav">
      <BaseHeader/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import BaseHeader from './components/BaseHeader.vue'

export default {
  name: 'App',
  components: {
    BaseHeader
  }
}
</script>

<style>

@font-face {
    font-family: Cocon;
    src: url("assets/CoconRegularFont.otf") format("opentype");
}


#app {
  font-family: Cocon;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
