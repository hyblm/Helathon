<script setup lang="ts">
import { Button } from "@/components/ui/button";
import HelloWorld from "@/components/HelloWorld.vue";
import ModeToggle from "@/components/ui/ModeToggle.vue";
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="min-h-svh flex flex-col">
    <header class="flex gap-3 p-5 items-center justify-between">
      <p class="text-lg font-black tracking-tight">ELMM™</p>
      <ModeToggle />
    </header>
    <slot />
    <footer class="mt-auto p-5 flex gap-3 items-center">
      <a href="https://github.com/hyblm/hellathon-4">
        <Button variant="secondary">
          <Icon icon="lineicons:github" />
          Browse Source Code
        </Button>
      </a>
    </footer>
  </div>
</template>
