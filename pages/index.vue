<script setup>
/*
起始日期 => 當前日期
結束日期 => 下一天
日期格式需要是  YYYY-MM-DD

const date = ref({
  start: ..., 
  end: ...,
});
*/

/*
調整日期的格式
const masks = {
 ...
};
*/

/*
  使用  vue-screen-utils 套件調整響應式設定

  const rows = mapCurrent( ... );
*/
</script>

<template>
  <div class="container mt-5 date-picker">
    <ClientOnly>
      <!-- 加入 DatePicker 實作日期選取的功能  -->
      <!-- <DatePicker v-model.range.string="date"  /> -->
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.date-picker {
  // 使用 CSS 變數覆蓋 VCalendar 套件的預設樣式

  :deep(.vc-title) {
    background: none;
  }
  :deep(.vc-arrow) {
    background: none;
  }
  :deep(.vc-pane-layout) {
    gap: 60px;
  }
}
</style>
