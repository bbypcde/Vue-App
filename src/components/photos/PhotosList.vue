<template>
    <ul class="photoData">
      <li v-for="(obj,index) in photoData" :key="index">
          <router-link :to="'/PhotoInfo/'+index" >
               <img :src="obj.src" alt="">
          </router-link>
         
      </li>
    </ul>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
               photoData:[]
            }
        },
       mounted:function(){
            this.$store.commit('change',{bgColor:'rgb(243, 33, 223)',text:'Photo'});
            // this.change({bgColor:'rgb(243, 33, 223)',text:'Photo'});
            // this.$store.commit('changetxt',"Photo");
            axios.get('/static/data/photodata.json').then(res=>{
                this.photoData=res.data.photoData;
                // this.$store.state.photoData=this.photoData;
            })

        }
    }
</script>

<style scoped>
    .photoData{
        overflow: hidden;
    }
    .photoData li{
        width:50%;
        float: left;
    }
    .photoData li img{
        width: 100%;
    }

</style>