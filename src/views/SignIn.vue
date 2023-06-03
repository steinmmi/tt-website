<template>
    <div class="sign-in">
        <div class="container">
            <h2>Information de connexion</h2>
            <BaseInput v-model="mail" placeholder="Mail" bgColor="white" color="#229451" />
            <BaseInput v-model="password" placeholder="Mot de passe" bgColor="white" color="#229451" password icon="farm" />
        </div>
        <div class="actions">
            <router-link to="/account-portal">
                <BaseButton icon="arrowL" text="Précédent" bgColor="#F26173" color="white" />
            </router-link>
            <BaseButton @click.native="onSignIn()" icon="checkmark" text="Se connecter" bgColor="#229451" color="white" />
        </div>
    </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';


export default {
    name: "SignIn",
    components: { BaseInput, BaseButton },
    data() {
        return {
            mail: '',
            password: ''
        }
    },
    computed: {
        accounts() {
            return this.$store.state.accounts
        }
    },
    methods: {
        onSignIn() {
            console.log(this.accounts);
            if (this.accounts.find(account => {
                return account.email === this.mail && account.password === this.password
            }
            )) {
                this.$router.push('/home-portal')
            } else {
                alert('Identifiants incorrects')
            }
        }
    }
}

</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);

    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 30px 100px;
    background: #FFF6E9;


}

.actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    margin-top: 30px;
}

.sign-in {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    width: 730px;
}

.container h2 {
    text-align: left;
    align-self: flex-start;
}

.container div {
    flex: 1;
    width: 100%;
}
</style>