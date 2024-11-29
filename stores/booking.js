import { defineStore } from "pinia";
export const useBookingStore = defineStore('bookingStore', () => {
    const router = useRouter()
    const roomData = ref([])

    const getRoomData = async (id) => {
        try{
            const res = await $fetch(`/rooms/${id}`,{
                baseURL: "https://nuxr3.zeabur.app/api/v1"
            })
            roomData.value = res.result
        }catch(error){
            alert("發生錯誤 ! ");
            router.push("/room");
        }
    }

    const bookingInfo = ref({});
    
    const goBookingPage = () => {
        bookingInfo.value = roomData.value
    }

    return {
        roomData,
        getRoomData,
        bookingInfo,
        goBookingPage,
    }
});

