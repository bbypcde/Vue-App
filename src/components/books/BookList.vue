<template>
    <div >
        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
    </div>
</template>

<script>
  import  vueswipe from 'vue-swipe/dist/vue-swipe.css';
  import {Swipe,SwipeItem} from 'vue-swipe';
    export default {
        mounted:function(){
            this.$store.commit('change',{bgColor:'rgb(184, 33, 243)',text:'Book'});
            // this.change({bgColor:'rgb(184, 33, 243)',text:'Book'});
          
        },
        components:{
            Swipe,
            SwipeItem
        }
    }
</script>

<style scoped>

.my-swipe {
 
  height: 400px;
 
}

.slide1 {
  /* background-color: #0089dc; */
  background: url("/static/img/1.jpg") 0/cover no-repeat;
}

.slide2 {
  /* background-color: #ffd705; */
   background: url("/static/img/2.jpg") 0/cover no-repeat;

}

.slide3 {
  /* background-color: #ff2d4b; */
   background: url("/static/img/3.jpg") 0/cover no-repeat;
}

</style>