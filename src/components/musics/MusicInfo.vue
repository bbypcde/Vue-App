<template>
    <div>
     <!-- {{$route.params.id}} -->
      <aplayer autoplay :music="musicData"  v-if="isShow" theme="blue"></aplayer>
    </div>
</template>

<script>
import axios from 'axios'
import Aplayer from 'vue-aplayer';

    export default {
        data() {
            return {
               musicData:[],
               isShow:false
            }
        },
        components:{
             Aplayer
        },
        mounted:function(){
            this.$store.commit('change',{bgColor:'rgb(0, 150, 136)',text:'Music'});
            axios.get('/static/data/musicdata.json').then((res)=>{
                var arr=res.data.musicData;
                for(var i=0;i<arr.length;i++){
                    arr[i].lrc='/static/'+arr[i].lrc;
                    var {title,author,src:url,musicImgSrc:pic,lrc}=arr[i];
                    var obj= {title,author,url,pic,lrc};
                    this.musicData.push(obj);
                }
                 this.isShow=true;
               
            })
        }
        
    }
</script>

<style scoped>

</style>