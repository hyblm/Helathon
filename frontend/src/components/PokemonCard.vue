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

async function fetchPokemon(ident: number | string) {
  const endpoint = 'https://pokeapi.co/api/v2/pokemon/' + ident
  const response = await fetch(endpoint)
  pokemon.value = await response.json()
  console.log(pokemon.value)
}

const MAX_POKEMON_ID = 1025
async function fetchRandomPokemon() {
  const id = Math.floor(Math.random() * MAX_POKEMON_ID)
  fetchPokemon(id)
}

fetchRandomPokemon()

const BoundingRef: Ref<DOMRect | null> = ref(null)

function setBoundingRef(event) {
  BoundingRef.value = event.currentTarget.getBoundingClientRect()
  console.log(BoundingRef.value)
}

function unsetBoundingRef(event) {
  BoundingRef.value = null
  event.currentTarget.style.setProperty('--x-rotation', `0deg`)
  event.currentTarget.style.setProperty('--y-rotation', `0deg`)
}

function shiftCard(event) {
  const x_percentage =
    (event.y - BoundingRef.value.top) / BoundingRef.value.height
  const x_rotation = (x_percentage - 0.5) * -20
  const y_percentage =
    (event.x - BoundingRef.value.left) / BoundingRef.value.width
  const y_rotation = (y_percentage - 0.5) * 20
  event.currentTarget.style.setProperty('--x-rotation', `${x_rotation}deg`)
  event.currentTarget.style.setProperty('--y-rotation', `${y_rotation}deg`)
  event.currentTarget.style.setProperty('--x', `${x_percentage * 100}%`)
  event.currentTarget.style.setProperty('--y', `${y_percentage * 100}%`)
}
</script>

<template>
  <div class="[perspective:800px]">
    <Card
      class="relative min-h-96 min-w-72 shadow-lg transition-transform ease-out [--glare:0.5] after:pointer-events-none after:absolute after:inset-0 hover:[transform:scale(1.1)_rotateX(var(--x-rotation))_rotateY(var(--y-rotation))] after:hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,var(--glare))_20%,transparent_90%)] dark:[--glare:0.1]"
      @mouseenter="setBoundingRef"
      @mouseleave="unsetBoundingRef"
      @mousemove="shiftCard"
    >
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
          class="sprite w-full"
          :src="pokemon.sprites.front_default"
        />
      </CardContent>
      <CardFooter> </CardFooter>
    </Card>
  </div>
</template>

<style>
/* Matyas: taken from https://stackoverflow.com/questions/8028864/using-nearest-neighbor-with-css-zoom-on-canvas-and-img */
.sprite {
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
}
</style>
