<script setup>
import {useLoading} from 'vue-loading-overlay'

const $loading = useLoading({
  transition:"fade",
  loader:"bars",
  color:"#fa0",
  backgroundColor:"#888",
});

function openLoading() {
  // 開啟讀取效果
  const loader = $loading.show();
  setTimeout(() => {
    // 關閉讀取效果
    loader.hide()
  }, 1000);
}
</script>

<template>
  <button type="button" @click="openLoading">開啟 Loading 效果</button>
</template>

<style scoped></style>
