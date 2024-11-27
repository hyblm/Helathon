import HomeView from '@/components/views/HomeView.vue'
import PokemonCard from '@/components/views/PokemonCard.vue'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: HomeView },
  { path: '/pokemon/', component: PokemonCard },
  { path: '/pokemon/:id', component: PokemonCard },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
