<script setup>
import { ref, onMounted, watchEffect } from 'vue'

let ancho = ref(window.innerWidth);
let openMenu = ref(false);
let openConnect = ref(false);
let overflow = ref(true);
let rotate = ref(true);
let gradient = ref(true);


    if (ancho.value < 608) {
        openMenu.value = false
    } else if (ancho.value > 608) {
        openMenu.value = true
    }
    

const showMenu = () => {
    openMenu.value = !openMenu.value
    overflow.value = !overflow.value
    gradient.value = !gradient.value
   
}

const showConnect = () => {
    openConnect.value = !openConnect.value
    rotate.value = !rotate.value
}

</script>

<template>
<main >
    <div 
    :class="overflow ? 'overflow-hidden' : ''"
    class="relative  bg-gradient-to-b from-backroundVeryLightRed  to-backroundLightRed   rounded-bl-[30%] text-center text-white px-[10%]  tablet:px-[5%] py-[10%] tablet:py-[5%] tablet:mb-[5rem]">
        
        
        <header class="w-[100%] mx-auto flex tablet:flex justify-between tablet:px-[10%] desktopSmall:px-[5%]">
            <img 
            class="tablet:-ml-10 z-50 w-[30%] desktopBig:scale-50 desktopBig:-mt-4 h-[20%] tablet:w-[30%]"
            src="../assets/images/logo.svg" alt="logo">

            <div 
            v-if="openMenu"
            class="bg-white  flex flex-col tablet:bg-transparent  tablet:flex-row justify-between z-[1000]  items-center absolute tablet:relative right-[5%] tablet:right-0 top-[20%] tablet:top-0 w-[90%] tablet:w-[120%] h-[78vh] tablet:h-auto rounded-md shadow-lg shadow-black tablet:shadow-none pb-6 pt-6 tablet:pt-0 tablet:ml-10 ">
                <div >
                    <ul class="flex flex-col gap-6 justify-start text-[.8rem] text-black tablet:text-white font-semibold tablet:flex-row  tablet:text-[.7rem] desktopSmall:text-[.9rem]">
                        <li>Product <i 
                            class="fa-solid fa-angle-down text-LightRed"></i></li>
                        <li>Comoabyte <i class="fa-solid fa-angle-down text-LightRed"></i></li>
                        <li>
                        <button
                        @click="showConnect"
                        class="cursor-pointer"
                        >Connect <i 
                        :class="!rotate ? 'rotate-180' : ''"
                        class="fa-solid fa-angle-down text-LightRed"></i></button></li>
                    </ul>
                    <div 
                    v-if="openConnect"
                    class="bg-gray-100 w-64 mt-6  p-4 rounded-md relative tablet:absolute tablet:-left-4"
                     >
                        <ul class="text-gray-500 font-semibold flex flex-col gap-4">
                            <li>Contact</li>
                            <li>Newsletter</li>
                            <li><a href="https://www.linkedin.com/in/breynerustariz/" aria-label="Linkedin">Linkedin</a></li>
                        </ul>
                    </div>
                    <hr class="tablet:hidden bg-gray-300 w-[90%] left-[5%] absolute  mt-6 text-black px-4 ">
                </div>
                <div class="flex flex-col  gap-4 mt-8 tablet:flex-row tablet:items-end tablet:mt-0 tablet:absolute  tablet:-right-[15%] desktopSmall:-right-0 ">
                    <button class="text-lg text-black tablet:text-white">
                        Login
                    </button>
                    <button 
                    :class="!gradient ? 'bg-gradient-to-r from-backroundVeryLightRed to-LightRed' : 'bg-white' " 
                    class=" tablet:bg-white text-white tablet:text-LightRed px-8 font-medium text-xs tablet:px-4 tablet:py-2 py-3 rounded-2xl">
                        Sign Up
                    </button>
                </div>
            </div>
            <i
            :class="!openMenu ? 'fa-bars' : 'fa-times' "
            @click="showMenu" 
            class="fa-solid  text-3xl z-50 cursor-pointer tablet:hidden"></i>
        </header>
        <div class="mt-32 z-50 relative">
            <h1 class="opacity-90 text-2xl tablet:text-[2.5rem] desktopBig:text-[3rem] desktopBig:mb-10 font-semibold mobile:w-[80%] mb-5 mx-auto">A modern<br class="tablet:hidden ">publishing platform</h1>
            <p class="z-50 opacity-70 text-lg desktopBig:mb-12">Grow your audience and build your online brand</p>
        </div>
        <div class="flex justify-center font-bold gap-4 my-8 z-50 relative desktopBig:scale-125 desktopBig:font-bold">
            <button class="bg-white text-LightRed text-xs px-4 py-2 rounded-2xl">Start for Free</button>
            <button class="border-2 border-gray-200 text-white text-xs px-4 py-2 rounded-2xl">Learn More</button>
        </div>
        <div 
        v-if="overflow"
        class="opacity-80 h-full w-[400%] absolute -top-[90%] -left-[110%] z-0"> 
            <img 
            class="z-0"
            src="../assets/images/bg-pattern-intro-desktop.svg" alt="" > 
        </div>
        
    </div>

    
</main>
</template>

<style scoped>
</style>
