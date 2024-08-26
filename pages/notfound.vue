<script setup>
const page = "xxx";
</script>

<template>
  <div class="not-found">
    <h1>404 - 找不到頁面</h1>
    <p>抱歉，您所尋找的 {{ page }} 頁面不存在。</p>
    <!-- 返回首頁的連結 -->
  </div>
</template>

<script setup></script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.not-found h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.not-found p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.not-found a {
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;
  border: 2px solid #007bff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.not-found a:hover {
  background-color: #007bff;
  color: #fff;
}
</style>
