// 建立名稱為 useBookingStore 的 store 

// export const
export const useBookingStore = defineStore("booking", () => {
    const bookingResult = ref({});

    const createOrder = ( data ) => {
        bookingResult.value = data
    }


    return{
        bookingResult,
        createOrder,
    }

})
