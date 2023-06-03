<template>
    <div class="container">
        <h1>Créer un compte</h1>
        <div class="options">
            <div class="left">
                Consommateur
                <div class="buttons">
                    <BaseButton icon="account" text="S'inscrire" bgColor="#229451" color="white" />
                </div>
            </div>
            <div class="separator">

            </div>
            <div class="right">
                Producteur
                <div class="buttons">
                    <BaseButton icon="farm" text="Professionnel" bgColor="#229451" color="white" />
                    <BaseButton icon="garden" text="Particulier" bgColor="#229451" color="white" />
                </div>
            </div>
        </div>
        <div class="account-exists">
            Vous avez déjà un compte ?
        <router-link to="sign-in">
            <BaseButton icon="account" text="Se connecter" bgColor="#FFF6E9" color="#229451" />
        </router-link>
        </div>
    </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';

export default {
    name: "SignInUp",
    components: { BaseButton }
}
</script>

<style scoped>

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 30px 50px;
    background: #FFF6E9;
    width: 730px;
}
.separator {
    width: 1px;
    height: 100px;
    background-color: #F26173;
}

.container h1 {
    color: #F26173;
    font-size: 24px;
    
}

.options {
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.account-exists {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #252525;
    flex-direction: column;
    font-size: 14px;
}
.options .left, .options .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    flex: 1;
}

.options .buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
}

</style>