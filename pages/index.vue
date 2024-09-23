<script setup>
function openLoading() {
  // 開啟讀取效果
  setTimeout(() => {
    // 關閉讀取效果
  }, 1000);
}
</script>

<template>
  <button type="button" @click="openLoading">開啟 Loading 效果</button>
</template>

<style scoped></style>
