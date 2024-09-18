<script setup>
// modal
const modalRef = ref(null);
let modal;
const showModal = () => {
  // 開啟 modal
};
const closeModal = () => {
  // 關閉 modal
};

// offcanvas

const offcanvasRef = ref(null);
let offcanvas;
const showOffcanvas = () => {
  // 開啟 offcanvas
};
const closeOffcanvas = () => {
  // 關閉 offcanvas
};

onMounted(() => {
  // 初始化 modal 與 offcanvas 元件
});
</script>

<template>
  <div class="container mb-5">
    <button type="button" class="btn btn-primary" @click="">開啟 Modal</button>
  </div>
  <!-- modal 元件 -->
  <div
    class="modal fade"
    id="staticBackdrop"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
    ref=""
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click=""
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="">
            Close
          </button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <button type="button" class="btn btn-secondary" @click="">
      開啟 Offcanvas
    </button>
  </div>
  <!-- Offcanvas  元件 -->
  <div
    class="offcanvas offcanvas-bottom"
    tabindex="-1"
    id="offcanvasBottom"
    aria-labelledby="offcanvasBottomLabel"
    ref=""
  >
    <div class="offcanvas-header">
      <h3 class="offcanvas-title" id="offcanvasBottomLabel">
        Offcanvas bottom
      </h3>
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        @click=""
      ></button>
    </div>
    <div class="offcanvas-body small">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eius
      perferendis illum cum vero cumque totam repudiandae accusantium facere est
    </div>
  </div>
</template>

<style scoped></style>
