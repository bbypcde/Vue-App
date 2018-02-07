<template>
<v-touch class="photo" :style="{background:bg}" @swipeleft="next" @swiperight='prev' v-if="isShow">
    <router-link to='/photoList' class="link"></router-link>
</v-touch>
</template>

<script>
import VueTouch from 'vue-touch'
import Vue from 'vue'
import axios from 'axios'
Vue.use(VueTouch,{name:'v-touch'});
    export default {
        data() {
            return {
                idx:this.$route.params.id,
                Photo:[],
                isShow:false
                
            }
        },
        components:{
            VueTouch
        },
        computed:{
            bg:function(){
                // return `#000 url(${this.$store.state.photoData[this.idx].src}) no-repeat center/contain`;
                return `#000 url(${this.Photo[this.idx].src}) no-repeat center/contain`;
            }
        },
        methods:{
            next(){
                this.idx++;
                // if(this.idx==this.$store.state.photoData.length)
                if(this.idx==this.Photo.length)
                {
                    this.idx=0;
                }
                this.$router.push('/PhotoInfo/'+this.idx);
            },
            prev(){
                this.idx--;
                if(this.idx==-1){
                    // this.idx=this.$store.state.photoData.length-1;
                    this.idx=this.Photo.length-1;
                }
                this.$router.push('/PhotoInfo/'+this.idx);
            }
        },
        mounted:function(){
              this.$store.commit('change',{bgColor:'rgb(243, 33, 223)',text:'Photo'});
              axios.get('/static/data/photodata.json').then(res=>{
                  this.Photo=res.data.photoData;
                  this.isShow=true;
            
                  
              })

        }
       
        
    }
</script>

<style scoped>
    .photo{
        position: absolute;
        left: 0;
        right: 0;
        top:1rem;
        bottom: 1rem;
    }
    .link{
        display: block;
        height:100%;
        outline:none;
    }
    

</style>