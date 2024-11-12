<script setup lang="ts">
import { ref, Ref } from 'vue'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'

const pokemon: Ref<Pokemon | null> = ref(null)
interface Pokemon {
  name: string
  id: number
  sprites: {
    front_default: string
  }
}

async function fetchPokemonFromEndpoint(endpoint: string) {
  const response = await fetch(endpoint)
  pokemon.value = await response.json()
  console.log(pokemon.value)
}

async function fetchPokemonByName(name: string) {
  const endpoint = 'https://pokeapi.co/api/v2/pokemon/' + name
  fetchPokemonFromEndpoint(endpoint)
}

async function fetchPokemonById(id: number) {
  const endpoint = 'https://pokeapi.co/api/v2/pokemon/' + id
  fetchPokemonFromEndpoint(endpoint)
}

const MAX_POKEMON_ID = 1025
async function fetchRandomPokemon() {
  const id = Math.floor(Math.random() * MAX_POKEMON_ID)
  fetchPokemonById(id)
}

fetchRandomPokemon()
</script>

<template>
  <Card class="min-h-96 min-w-72 shadow-lg">
    <CardHeader>
      <p v-if="pokemon" class="flex justify-between">
        <span class="text-xl font-bold">
          {{ pokemon.name }}
        </span>
        <span class="opacity-50"> # {{ pokemon.id }} </span>
      </p>
    </CardHeader>
    <CardContent>
      <img
        v-if="pokemon"
        class="sprite w-full transition-transform hover:scale-125"
        :src="pokemon.sprites.front_default"
      />
    </CardContent>
    <CardFooter> </CardFooter>
  </Card>
</template>

<style>
/* Matyas: taken from https://stackoverflow.com/questions/8028864/using-nearest-neighbor-with-css-zoom-on-canvas-and-img */
.sprite {
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
}
</style>
