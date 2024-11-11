<script setup lang="ts">
import { Button } from "@/components/ui/button";
import HelloWorld from "@/components/HelloWorld.vue";
import ModeToggle from "@/components/ui/ModeToggle.vue";
import { Icon } from "@iconify/vue";
import Layout from "@/components/Layout.vue";
</script>

<template>
  <Layout>
    <HelloWorld class="m-auto" msg="Count" />
  </Layout>
</template>
