<script setup>
import { email } from "@vee-validate/rules";
import { ZipCodeMap, cityList } from "~/utils/zipcodes";
definePageMeta({
  middleware: ["auth"]
})

const submitButtonRef= ref(null)

const bookingStore = useBookingStore();
const{ bookingInfo, userAddersInfo } = storeToRefs(bookingStore)

const router = useRouter();
const route = useRoute();
const { roomId } = route.params;
if(!bookingInfo.value.roomId) navigateTo(`/rooms/${roomId}`)


const { data:room, error } = await useFetch(`/api/v1/rooms/${roomId}`, {
  baseURL: "https://nuxr3.zeabur.app",
});
const roomInfo = ref({});
roomInfo.value = room.value.result
// const bookingInfo = ref({});

const form = ref(null)
const city = ref("臺北市");
const zipcodeList = ref([]);
const countyList = (city) => ZipCodeMap.filter(value => value.name == city);

watch(
  city,
  () => {
    const list = countyList(city.value);
    zipcodeList.value = list[0].districts;
  },
  { immediate: true }
);

const getUserAdderss = async() => {
  await bookingStore.getUserAddersInfo()
  const getCity = ( zipcode ) => ZipCodeMap.find(value => {
    return value.districts.find(item =>item.zip == zipcode)
  });
  const cityObj = getCity(userAddersInfo.value.address.zipcode)
  form.value.setValues({
    "姓名": userAddersInfo.value.name,
    "電子信箱": userAddersInfo.value.email,
    "手機號碼": userAddersInfo.value.phone,
    "縣市": cityObj.name,
    "行政區": userAddersInfo.value.address.zipcode,
    "地址": userAddersInfo.value.address.detail
  })
}

const discountPrice = 1000;

const createOrder = async (userInfo) => {
  bookingInfo.value.userInfo = {
    name:userInfo["姓名"],
    email:userInfo["電子信箱"],
    phone:userInfo["手機號碼"],
    address:{
      zipcode:userInfo["行政區"],
      detail:userInfo["地址"]
    }
  }
  delete bookingInfo.value.bookingDays
  bookingStore.createOder(bookingInfo.value)
};
</script>

<template>
  <main>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-7">
          <section>
            <h2 class="mb-4 fw-bold">訂房人資訊</h2>
            <button
              class="text-primary-100 bg-transparent border-0 fw-bold text-decoration-underline"
              type="button"
              @click.prevent="getUserAdderss()"
              >
              套用會員資料
            </button>
            <Form ref="form" @submit="createOrder" v-slot="{ errors }">
              <div class="mb-4">
                <label for="name" class="form-label fw-bold">姓名</label>
                <Field
                  id="name"
                  name="姓名"
                  rules="required|min:2"
                  type="text"
                  class="form-control p-3 rounded-3"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入姓名"
                />
                <ErrorMessage name="姓名" class="invalid-feedback" />
              </div>

              <div class="mb-4">
                <label for="phone" class="form-label fw-bold">手機號碼</label>
                <Field
                  id="phone"
                  name="手機號碼"
                  rules="required|isPhone"
                  type="tel"
                  class="form-control p-3 rounded-3"
                  :class="{ 'is-invalid': errors['手機號碼'] }"
                  placeholder="請輸入手機號碼"
                />
                <ErrorMessage name="手機號碼" class="invalid-feedback" />
              </div>

              <div class="mb-4">
                <label for="email" class="form-label fw-bold">電子信箱</label>
                <Field
                  id="email"
                  name="電子信箱"
                  rules="required|email"
                  type="email"
                  class="form-control p-3 rounded-3"
                  :class="{ 'is-invalid': errors['電子信箱'] }"
                  placeholder="請輸入電子信箱"
                />
                <ErrorMessage name="電子信箱" class="invalid-feedback" />
              </div>

              <div class="mb-4">
                <label for="road" class="form-label fw-bold">地址</label>
                <div className="d-flex gap-2 mb-4">
                  <Field
                    v-model="city"
                    as="select"
                    v-slot="value"
                    name="縣市"
                    rules="required"
                    class="form-select w-50 p-3 fw-medium rounded-3"
                    :class="{ 'is-invalid': errors['縣市'] }"
                  >
                    <option selected disabled value="">請選擇縣市</option>
                    <option
                      v-for="item in cityList"
                      :key="item"
                      :value="item"
                      :selected="item == '臺北市'"
                    >
                      {{ item }}
                    </option>
                  </Field>
                  <Field
                    as="select"
                    name="行政區"
                    rules="required"
                    class="form-select w-50 p-3 fw-medium rounded-3"
                    :class="{ 'is-invalid': errors['行政區'] }"
                  >
                    <option selected disabled value="">請選擇行政區</option>
                    <option v-for="item in zipcodeList" :value="item.zip">
                      {{ item.name }}
                    </option>
                  </Field>
                </div>
                <Field
                  id="road"
                  name="地址"
                  rules="required"
                  type="text"
                  class="form-control p-3 rounded-3"
                  :class="{ 'is-invalid': errors['地址'] }"
                  placeholder="請輸入詳細地址"
                />
                <ErrorMessage name="地址" class="invalid-feedback" />
              </div>
              <button
                ref="submitButtonRef"
                type="submit"
                class="d-none"
              ></button>
            </Form>
          </section>
        </div>
        <div class="col-md-5">
          <img
            class="img-fluid rounded-3"
            :src="roomInfo.imageUrl"
            :alt="roomInfo.name"
          />
          <div class="my-5">
            <h2 className="mb-3 fw-bold">價格詳情</h2>
            <div
              class="d-flex justify-content-between align-items-center mb-3 fw-medium"
            >
              <span
                >NT$ {{ roomInfo.price }} X {{ bookingInfo.bookingDays }}晚
              </span>
              <span>NT$ {{ roomInfo.price * bookingInfo.bookingDays }}</span>
            </div>
            <div
              class="d-flex justify-content-between align-items-center fw-medium"
            >
              <p class="mb-0">住宿折扣</p>
              <span class="text-info">-NT$ {{ discountPrice }}</span>
            </div>
            <hr class="my-3" />
            <div
              class="d-flex justify-content-between align-items-center fw-bold"
            >
              <p class="mb-0">總價</p>
              <span
                >NT$
                {{
                  roomInfo.price * bookingInfo.bookingDays - discountPrice
                }}</span
              >
            </div>
          </div>

          <button
            class="btn btn-lg btn-primary w-100 fw-bold rounded-3"
            type="button"
            @click="submitButtonRef.click()"
          >
            確認訂房
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>
