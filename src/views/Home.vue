<template>
  <div class="hello">


    <div class="video-container">
      <video muted autoplay loop class="home-video">
        <source src="../assets/home-video.mp4" type="video/mp4">
      </video>
      <div class="search-container">
        <div class="search-form">
          <div class="row">
            <BaseInput class="where" icon="gps" placeholder="Où ?" bgColor="white" color="#229451"></BaseInput>
            <BaseButton class="search" text="Search" icon="search" bgColor="#229451" color="white" />
          </div>
          <div class="row">
            <BaseInput class="what" placeholder="Quoi ?" bgColor="white" color="#229451"></BaseInput>
            <BaseSelect class="category" icon="arrow-down" text="Catégorie" bgColor="white" color="#229451"
              :options="['Tout', 'Restaurant', 'Hôtel', 'Bar', 'Café']" />
          </div>
        </div>
      </div>

    </div>
    <div class="how-it-works">
      <h1>Comment fonctionne 6près ?</h1>
      <div class="card-container">
        <div class="card">
          <div class="step">1</div>
          <div class="illustre">
            <img src="../assets/how_1.svg" alt="step1">
          </div>
          <hr />
          <div class="description">
            Je choisis un producteur, puis un produit que je veux acheter
          </div>
        </div>
        <div class="card">
          <div class="step">2</div>
          <div class="illustre">
            <img src="../assets/how_2.svg" alt="step2">
          </div>
          <hr />
          <div class="description">
            Je choisis un producteur, puis un produit que je veux acheter
          </div>
        </div>
        <div class="card">
          <div class="step">3</div>
          <div class="illustre">
            <img src="../assets/how_3.svg" alt="step3">
          </div>
          <hr />
          <div class="description">
            Je paye directement sur le site, et je vais chercher ma comande quand elle est prête
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';
import BaseSelect from '../components/BaseSelect.vue';
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: { BaseButton, BaseInput, BaseSelect }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.video-container {
  z-index: -1;
  position: relative;
  margin-top: -84.5px;
  width: 100%;
  height: 100%;
}

.illustre {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.illustre img {
  width: 100%;
  height: 100%;
}

.search-form {
  max-width: 50%;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 30px;
  width: 100%;
}

.card {
  background-color: #FFF6E9;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
  flex: 1;
  position: relative;
  padding: 30px;
}
.card hr {
  width: 80%;
  border: 1px solid #F26173;
  margin-top: 10px;
}
.card .description {
  text-align: center;
  font-size: 20px;
}

.card .step {
  background-color: #F26173;
  color: white;
  padding: 1em;
  border-radius: 10px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
}

.how-it-works {
  padding: 50px 100px;
  text-align: left;
}

.how-it-works h1 {
  margin-bottom: 50px;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 20px;
}

.where {
  flex: 3;
}

.search {
  flex: 1;
}

.home-video {
  width: 100%;
  top: 0;
  left: 0;
}

.what,
.category {
  flex: 1;
}

.search-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
