<script setup>
import { useScreens } from 'vue-screen-utils';
/*
起始日期 => 當前日期
結束日期 => 下一天
日期格式需要是  YYYY-MM-DD

const date = ref({
  start: ..., 
  end: ...,
});
*/
const addDays = (date,days) => {
  const  newDate = new Date().setDate(date.getDate() + days);
  return new Date(newDate)
} 

const addYears = (date,years) => {
  const  newDate = new Date().setFullYear(date.getFullYear() + years);
  return new Date(newDate)
} 

const date = ref({
  start: new Date().toISOString().split("T")[0], 
  end: addDays(new Date(),1).toISOString().split("T")[0],
});


/*
調整日期的格式
const masks = {
 ...
};
*/
const masks = ref({
  title: "西元 YYYY 年 MM 月",
  modelValue: "YYYY-MM-DD",
});

const minDate = ref(new Date());

const maxDate = ref(addYears(new Date(),1));

/*
  使用  vue-screen-utils 套件調整響應式設定

  const rows = mapCurrent( ... );
*/
const { mapCurrent } = useScreens({
  // 螢幕尺寸為 mobile-first ( 從小尺寸到大尺寸 ) 
  xs: '0px',    // 等同於 (min-width: 0px) 
  sm: '640px',  // 等同於 (min-width: 640px)
  md: '768px',  // 等同於 (min-width: 768px)
  lg: '1024px', // 等同於 (min-width: 1024px)
});

const columns = mapCurrent({ md: 2, lg: 2 }, 1);

const rows = mapCurrent({ md: 1, lg: 1 }, 1);

const isExpended = mapCurrent({ md: false, lg: false }, true);
const titlePosition=   mapCurrent({ md: 'left', lg: 'left' }, 'center');
</script>

<template>
  <div class=".container-fluid container-md mt-5 date-picker">
    <ClientOnly>
      <!-- 加入 DatePicker 實作日期選取的功能  -->
      <VDatePicker 
        v-model.range.string="date" 
        :masks="masks"
        :min-date="minDate"
        :max-date="maxDate" 
        :columns="columns" 
        :rows="rows"
        :expanded="isExpended"
        :title-position="titlePosition"
      />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.date-picker {
  // 使用 CSS 變數覆蓋 VCalendar 套件的預設樣式
  :deep(.vc-attr) {
    --vc-highlight-light-bg:#f9f9f9
  }
  :deep(.vc-blue) {
    --vc-accent-600:#000000
  }

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
