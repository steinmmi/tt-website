<template>
  <div id="app">
    <div id="nav">
      <BaseHeader/>
    </div>
    <router-view class="content"/>
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

html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
  
}
#app {
  font-family: Cocon;
  margin: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1440px;
  

}

#nav {
  padding: 0px 5%;
  position: fixed;
  width: 90%;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  background-color: white;
  z-index: 999;
  top: 0;
  left: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
a {
  text-decoration: none;
}
#app .content {
  max-width: 1440px;
  margin: auto;
  margin-top: 120px;
  padding-top: 0;
}

</style>
