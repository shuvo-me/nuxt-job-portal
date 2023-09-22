import ErrorImage from '~/assets/images/company-place-holder.png'
export default defineNuxtPlugin(()=>{
   return{
    provide:{
        companyErrorLogo: (event: Event) => (event.target as HTMLImageElement).src = ErrorImage
    }
   }
})