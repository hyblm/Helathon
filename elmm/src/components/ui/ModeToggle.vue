<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icon } from '@iconify/vue'
import { useColorMode } from '@vueuse/core'

const mode = useColorMode({ disableTransition: false })
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" class="h-10 w-10">
        <Icon
          icon="lucide:moon"
          class="h-8 w-8 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Icon
          icon="lucide:sun"
          class="absolute h-8 w-8 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="mode = 'light'"> Light </DropdownMenuItem>
      <DropdownMenuItem @click="mode = 'dark'"> Dark </DropdownMenuItem>
      <DropdownMenuItem @click="mode = 'auto'"> System </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
