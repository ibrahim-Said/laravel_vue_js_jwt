<template>
<div class="col-md-6 offset-md-3">
    <h2 class="display-4 text-center mt-5">
        login
    </h2>
    <hr class="mt-5 mb-5">
    <div class="alert alert-danger" v-if="getErrors">
        {{getErrors}}
    </div>
    <form>
        <div class="form-group">
            <label for="email">
                Email
            </label>
            <input type="email" v-model="form.email"  class="form-control">
        </div>
        <div class="form-group">
            <label for="password">
                Password
            </label>
            <input type="password" v-model="form.password"  class="form-control">
        </div>
        <button class="btn btn-primary btn-block" @click.prevent='submit'>login</button>
    </form>
</div>
</template>

<script>
import {login} from '../auth.js';
export default {
data(){
    return {
        form:{
            email:'',
            password:''
        }
    }
},
methods:{
    submit(){
        this.$store.dispatch('login');
        login(this.$data.form).then(response=>{
            this.$store.commit('loginSuccess',response.data);
            this.$router.push('/');
        }).catch(errors=>{
            this.$store.commit('loginFailed',errors);
        })
    }
},
computed:{
    getErrors(){
        console.log(this.$store.getters.getErrors)
        console.log(this.$store.state.errors)
        return this.$store.getters.getErrors;
    }
}
}
</script>

<style>

</style>
