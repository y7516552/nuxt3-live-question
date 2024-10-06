# Day 22 - Swiper 輪播套件運用 題目

請 clone 這一份模板，完成以下條件 :

- 在 `/pages/index.vue` 中，已使用 `useFetch()` 取得房型列表並透過 `v-for` 渲染。然而在模板第 17 ~ 19 行的 `imageUrlList` 缺少了呈現房型多圖的輪播功能，請使用 Swiper.js 來完成圖片輪播功能 ( Swiper.js 已包含在模板內，npm install 安裝後即可使用 ) 。
- 輪播需要包含以下功能 :
  - 需要使用頁碼 ( pagination ) 、導航 ( navigation ) 與自動撥放功能。
  - 頁碼 : 使用 bullets 的外觀，並能透過點擊頁碼切換輪播項目。
  - 導航: 可以通過前後按鈕導航輪播項目。
  - 自動撥放功能的延遲時間為 5 秒。
  - 允許輪播項目循環播放。
  - 每次顯示 1 個輪播項目。

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本建議為：`18.0.0` 以上

### 取得專案

```bash
git clone -b day22-swiper  https://github.com/jasonlu0525/nuxt3-live-question.git day22-swiper-question
```

### 移動到專案內

```bash
cd day22-swiper-question
```

### 安裝套件

```bash
npm install
```

### 運行專案

```bash
npm run dev
```

### 開啟專案

在瀏覽器網址列輸入以下即可看到畫面

```bash
http://localhost:3000/
```
