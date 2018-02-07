<template>
    <div class="movieList">
        <ul>
            <li  v-for="(obj,index) in movies" :key="index" @click="fn(obj.id)">
                <div class="img-box">
                    <img :src="obj.img" alt="">
                </div>
                <div class="img-info">
                    <h2 class="title">{{obj.nm}}</h2>
                    <p>{{obj.ver}}</p>
                    <p>{{obj.star}}</p>
                    <p>{{obj.showInfo}}</p>
                </div>
            </li>
        </ul>
        <div class="load" v-show="isLoad">
            <img src="@/assets/load.gif" alt="">
        </div>
        <!-- 图片资源已经没有了 -->
        <div class="end" v-show="isEnd">
            已经到底了。。。
        </div>
       
        
    </div>
</template>

<script>
// import {mapState,mapMutations} from 'vuex'
import axios from 'axios';
    export default {
        data() {
            return {
               movies:[],
               isLoad:true,
               isEnd:false,//数据没到底
               flag:true//当前没有请求
            }
        },
        methods:{
            load(){
                if(this.flag){
                
                    axios.get(API_INTERFACE+'http://m.maoyan.com/movie/list.json?type=hot&offset='+this.movies.length+'&limit=10').then((res)=>{
                        //res.data.data.movies是一个数组，数组的成员是对象
                   //   console.log(res);
                        if(res.data.data.movies.length<10){
                            this.isEnd=true;//数据到底了
                        }
                        //  this.movies = [...this.movies,...res.data.data.movies];
                            // console.log(this.movies.concat(res.data.data.movies));
                            this.movies= this.movies.concat(res.data.data.movies);
                            this.isLoad=false;
                            this.flag=true;

                    }).catch(()=>{
                            console.log("请求失败...");
                    });
                } 
            },
            fn(id){
                this.$router.push('/Movieinfo/'+id);
            }

        },
        // computed:mapState(['bgColor','text']),
        // methods:mapMutations(['change']),
        mounted:function(){
            this.$store.commit('change',{bgColor:'rgb(33, 150, 243)',text:'Movie'});
            // this.change({bgColor:'rgb(33, 150, 243)',text:'Movie'});用mapMutations要在
            // this.$store.commit('changetext','电影');

            //axios请求
            this.load();
            window.onscroll=()=>{
                //滚动条滚动的高度(documentElement是html)
                var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
                //可视区的高度
                var  clientHeight=document.documentElement.clientHeight;
                //所有（包括待加载+已加载）电影图片的高度
                var scrollHeight=document.documentElement.scrollHeight;
                if(scrollTop+clientHeight==scrollHeight){
                    if(!this.isEnd){//this.isEnd是false,表示图片数据没到底的时候 发请求 loading show
                        this.isLoad = true;
                        this.load();
                        
                    } 
                }
            }
           
            
             
        }
         
        }
      
    
</script>

<style scoped>
.movieList li{
    display:flex;
    padding: 0.2rem;
    border-bottom:0.02rem solid rgba(204, 204, 204, 0.527);
}
.img-box{
    flex-grow:1;
    width: 0;
    margin-right:0.2rem;
}
.img-box img{
    width:100%;
}
.img-info{
    flex-grow:2;
    width: 0;
}
.title{
    font-size:0.33rem;
    font-weight: bold;
}
.img-info p{
    font-size:0.22rem;
}
.load{
    text-align: center;
}
.end{
    text-align: center;
}

</style>