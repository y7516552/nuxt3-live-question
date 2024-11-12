<script setup>
const route = useRoute();
const router = useRouter();
</script>

<template>
    {{ route.fullPath }}
  <h2>房型詳細頁面</h2>
  <button type="button" @click="router.go(-1)">回上一頁</button>
</template>

<style>
</style>

