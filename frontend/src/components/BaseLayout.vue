<script setup lang="ts">
import { Button } from '@/components/ui/button'
import ModeToggle from '@/components/ui/ModeToggle.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="flex min-h-svh flex-col">
    <header class="flex items-center justify-between gap-3 p-5">
      <p class="text-lg font-black tracking-tight">ELMM™</p>
      <ModeToggle />
    </header>
    <div class="container flex h-full flex-grow">
      <slot />
    </div>
    <footer class="flex items-center gap-3 p-5">
      <a href="https://github.com/hyblm/hellathon-4">
        <Button variant="secondary">
          <Icon icon="lineicons:github" />
          Browse Source Code
        </Button>
      </a>
    </footer>
  </div>
</template>
