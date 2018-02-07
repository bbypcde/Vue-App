import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movies/MovieList'
import MusicList from '@/components/musics/MusicsList'
import BookList from '@/components/books/BookList'
import PhotoList from '@/components/photos/PhotosList'
import MovieInfo from '@/components/movies/MovieInfo'
import MusicInfo from '@/components/musics/MusicInfo'
import PhotoInfo from '@/components/photos/PhotoInfo'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component:MovieList 
    }, {
      path: '/musicList',
      component:MusicList 
    },
    {
      path: '/bookList',
      component:BookList 
    },
    {
      path: '/photoList',
      component:PhotoList 
    },
    {
      path:'/MovieInfo/:id',
      component: MovieInfo
    },
    {
      path:'/MusicInfo/:id',
      component: MusicInfo

    },
    {
      path:'/PhotoInfo/:id',
      component: PhotoInfo

    }

  ]
})
