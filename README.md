# Day 6 - NuxtLink 與 路由基礎配置 題目

![題目示意圖](image.png)

請 clone 這一份模板，完成以下條件 :
- 根據課程 [API 文件](https://nuxr3.zeabur.app/swagger/#/) 規劃前台 首頁、房型、訂單頁面 對應的 Nuxt3 路由結構。路由結構只需設計第一層， 嵌套式路由 ( 巢狀路由 ) 與動態路由不需實作，例如 : /home 需設計，”最新消息” 的 home/news  與 home/news/{id} 不需實作。
- 首頁頁面的元件名稱需使用 index.vue。
- 頁面的 template 只需顯示 、 “首頁頁面” 、 “訂單頁面” 、 “房型頁面”  即可 。
- 將 Nuxt3 預設的歡迎頁面改成可以顯示頁面的內容 。
- 在 layouts/default.vue 的 Layout 中已有載入 Bootstrap5 SCSS 及 Navbar 元件。需在 layouts/default.vue 的 Navbar 加入 `<NuxtLink>` 元件，實現切換頁面的功能。
- 修改路由預設的 `linkActiveClass` 和 `linkExactActiveClass` ，使 `<NuxtLink>` 匹配到路由的時候可以套用 Bootstrap5 的 `.active` class 。


## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本建議為：`18.0.0` 以上

### 取得專案

```bash
git clone -b day6-router  https://github.com/jasonlu0525/nuxt3-live-question.git day6-router-question
```

### 移動到專案內

```bash
cd  day6-router-question
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