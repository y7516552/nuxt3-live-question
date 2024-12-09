export default defineNuxtRouteMiddleware(async (to, from) => {
    const accountToken = useCookie("accountToken");
    if (!accountToken.value) {
        return navigateTo("/login");
    }
    try{
      const res = await $fetch("/api/v1/user/check", {
        baseURL: "https://nuxr3.zeabur.app",
        headers:{
          Authorization: accountToken.value
        }
      });
    }catch(error){
      return navigateTo("/login");
    }
})
