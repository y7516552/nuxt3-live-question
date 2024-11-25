import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";

export default defineNuxtPlugin((nuxtApp) => {
   
    return {
        provide:{
            "OffcanvasList":(element) => new bootstrap.Offcanvas(element),
            "Modal":(element) => new bootstrap.Modal(element),
        }
    }
});
