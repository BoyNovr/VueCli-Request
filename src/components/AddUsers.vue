<template>
    <h2> Add Users </h2>
<div v-show="loading">
<app-loader></app-loader>
</div>
    <div v-show="!loading">
        <div class="form-group">
        <label>Name</label>
        <input class="form-control" type="text" v-model="user.name">
    </div>

    <div class="form-group">
        <label>Lastname</label>
        <input class="form-control" type="text" v-model="user.lastname">
    </div>

    <button class="btn btn-primary" @click="submit">Submit</button>
    </div>
    

</template>

<script>
import axios from 'axios';
export default{
    data(){
        return{
            loading:false,
            user:{
                name:'',
                lastname:''
            }
        }
    },
    methods:{
        submit(){
            this.loading=true;
            axios({
                method:'post',
                url:'http://localhost:3004/users',
                data:this.user
            })
            .then(()=>{
                this.$toast.success('This User has been added',{
                    position:'top',
                    duration:2000
                })
            })
            .catch(error=>{
                console.log(error)
                
            })
            .finally(()=>{
                this.loading=false
                this.user.name=''
                this.user.lastname=''
            })
        }
    }
}
</script>