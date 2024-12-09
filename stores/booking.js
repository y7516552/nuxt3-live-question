import { defineStore } from "pinia";
export const useBookingStore = defineStore('bookingStore', () => {
    const accountToken = useCookie("accountToken");

    const bookingInfo = ref({});

    const setBookingInfo = (data) => {
        bookingInfo.value = data
    }

    const userAddersInfo=ref({})

    const getUserAddersInfo = async () => {
      try{
        const res = await $fetch("/api/v1/user/", {
          baseURL:"https://nuxr3.zeabur.app",
          headers:{
            authorization: accountToken.value
          }
        });
        userAddersInfo.value = res.result
      }catch(error){
        console.log(error)
      }
    }

    // const orderInfo = ref({})

    const createOder = async(data) => {
      try{
        const res = await $fetch("/api/v1/orders/", {
          baseURL:"https://nuxr3.zeabur.app",
          method:"POST",
          headers:{
            authorization: accountToken.value
          },
          body:data
        });
        // orderInfo.value = res.result
        navigateTo(`/booking/${res.result._id}`)
      }catch(error){
        console.log(error)
        alert('預約失敗!')
      }
    }

    return {
        bookingInfo,
        setBookingInfo,
        userAddersInfo,
        getUserAddersInfo,
        createOder,
    }
})