export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("textformat", {
        mounted(el,  binding) {
          if(binding.arg ==='uppercase') el.innerText = binding.value.toUpperCase()
          if(binding.arg ==='lowercase') el.innerText = binding.value.toLowerCase()
        },
    })
});
