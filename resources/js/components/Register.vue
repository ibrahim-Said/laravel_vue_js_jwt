<template>
<div class="col-md-6 offset-md-3">
    <h2 class="display-4 text-center mt-5">
        register
    </h2>
    <hr class="mt-5 mb-5">
    <div class="alert alert-danger" v-if="getErrors">
        {{getErrors}}
    </div>
    <form>
        <div class="form-group">
            <label for="name">
                Name
            </label>
            <input type="text" v-model="form.name"  class="form-control">
        </div>
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
        <button class="btn btn-primary btn-block" @click.prevent='submit'>register</button>
    </form>
</div>
</template>

<script>
import {register} from '../auth.js';
export default {
data(){
    return {
        form:{
            name:'',
            email:'',
            password:''
        }
    }
},
methods:{
    submit(){
        register(this.$data.form).then(response=>{
            this.$store.commit('registerSuccess',response.data);
            this.$router.push('/login');
        }).catch(errors=>{
            this.$store.commit('registerFailed',errors);
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
