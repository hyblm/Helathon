<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="m-auto">
    <h1 class="text-xl">Welcome to our little app</h1>
    <RouterLink to="/pokemon">
      <Button class="my-8"> Get a random Pokemon card </Button>
    </RouterLink>
  </div>
</template>
