<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <Button type="button" @click="count++">{{ msg }} is {{ count }}</Button>
</template>
