export default defineNuxtRouteMiddleware( async (to, from) => {
    const token = useCookie("auth");
	if (!token.value) return navigateTo("/login");

    try{
        const res = await $fetch("/user/check", {
            baseURL: "https://nuxr3.zeabur.app/api/v1",
            method: "GET",
            headers:{
                Authorization:'Bearer '+token.value
            }
          })
        console.log("驗證成功")

    }catch(error){
        const { message } = error.response._data;
        console.log( "驗證失敗",message)
        token.value = null
        return await navigateTo("/login");
    }

})
