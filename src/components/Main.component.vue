<script setup>
    import {
        ref,
        onMounted
    } from 'vue'
    let ancho = ref(window.innerWidth);
    console.log(ancho.value);
</script>

<template>
    <main class="tablet:overflow-x-hidden overflow-y-hidden">

        <h1 class="text-center mt-32 text-2xl font-semibold text-veryDarkBlue tablet:mb-12 desktopSmall:mb-[calc(50vh-8rem)]  desktopMedium:text-[2rem]">Designed for the future</h1>

        <div class="tablet:flex tablet tablet:flex-col desktopSmall:flex-row-reverse tablet:justify-center tablet:items-center ">

            <div v-if="ancho < 700" class="tablet:w-[50%]  desktopSmall:w-[100%]">
                <img 
                class="desktopMedium:scale-75"
                src="../assets/images/illustration-editor-mobile.svg" alt="Illustration Editor Mobile">

            </div>
            <div v-if="ancho > 700" class="tablet:w-[50%] desktopSmall:w-[75%] desktopSmall:scale-150 tablet:-mr-[12%] tablet:-mt-[12%] ">
                <img 
                class="desktopSmall:-mt-[5rem] desktopMedium:scale-[80%]"
                src="../assets/images/illustration-editor-desktop.svg" alt="">
            </div>

            <div class="px-6 tablet:flex desktopSmall:flex-col desktopSmall:scale-75 tablet:px-10  tablet:items-start desktopSmall:items-start  tablet:w-[100%] tablet:gap-8 desktopSmall:-mt-[10rem] desktopMedium:-mt-[15rem] tablet:justify-between  ">
                <div class="text-center tablet:text-center text-[0.8rem]  tablet:text-[0.9rem]  desktopSmall:text-[1.1rem] desktopBig:text-[1.5rem] tablet:w-[50%] desktopSmall:w-[85%] desktopSmall:text-left desktopBig:mb-16 desktopBig:mt-[calc(25vh-4rem)]">
                    <h2 class="text-center tablet:text-center desktopSmall:text-left text-veryDarkBlue text-[1.5rem] desktopSmall:text-[1.5rem] desktopBig:text-[2rem]  tablet:text-[1.5rem] desktopMedium:text-[2rem] font-semibold mb-3 ">
                        Introducing an<br v-if="ancho < 700" > extensible editor</h2>
                    <p class="desktopMedium:text-[1.3rem]"> Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating
                        content.
                        The editor supports management of multiple blogs and allows easy manipulation of embeds such as
                        images,
                        videos, and Markdown. Extensibility with plugins and themes provide easy ways to add
                        functionality or
                        change the looks of a blog.</p>
                </div>
                <div class="text-center tablet:text-center desktopSmall:text-left tablet:mt-0 mt-10 desktopSmall:mt-0 mb-10 text-[0.8rem] tablet:text-[0.9rem] desktopSmall:text-[1.1rem] desktopBig:text-[1.5rem] tablet:w-[50%] desktopSmall:w-[85%] ">
                    <h2 class="text-center desktopSmall:text-left text-veryDarkBlue text-[1.5rem] desktopSmall:text-[1.5rem] desktopBig:text-[2rem] tablet:text-[1.5rem] desktopMedium:text-[2rem] font-semibold mb-3 tablet:text-center">Robust
                        content <br class="tablet:block desktopMedium:hidden">management</h2>
                    <p class="desktopMedium:text-[1.3rem]">
                        Flexible content management enables users to easily move through posts. Increase the usability
                        of your blog
                        by adding customized categories, sections, format, or flow. With this functionality, you’re in
                        full control.
                    </p>
                </div>
            </div>
        </div>

        <div
            class="bg-backroundVeryDarkBlue  mb-10 rounded-tr-[15%] rounded-bl-[15%] py-[4rem]  mt-[18rem] desktopSmall:mt-[16rem] bg-cover bg-center bg-no-repeat phones relative tablet:mb-[16rem]">
            <div class="z-50 -mt-[17rem] tablet:-mt-[10rem] absolute desktopBig:rotate-180">
                <img
                class="tablet:-scale-75 desktopSmall:-scale-75 desktopBig:scale-110 desktopSmall:-ml-[2rem] tablet:-mt-[4rem] tablet:rotate-180 tablet:-ml-[5rem] desktopBig:ml-[5rem]  " 
                src="../assets/images/illustration-phones.svg" alt="phone">
            </div>
            <div class="z-10 relative overflow-hidden -mt-16 ">
                <div class="scale-150 w-[100%] h-[16rem] ml-20 mb-14  tablet:rotate-90">
                    <img class="absolute -top-32 -left-[4rem] opacity-50 tablet:scale-75 tablet:mt-[5rem]" src="../assets/images/bg-pattern-circles.svg"
                        alt="">
                </div>
            </div>

            <div class="desktopMedium:-ml-[15rem]" >

                <div
                    class="text-white -mt-[10%] desktopBig:-mt-[15%] mb-[2rem] relative z-50 tablet:w-[60%] tablet:scale-75 desktopBig:scale-90 desktopBig:px-0 desktopBig:pr-[5rem] tablet:pl-[5rem]  desktopSmall:px-[5%] tablet:-mt-[15rem]  tablet:float-right desktopBig:text-[1.5rem] tablet:text-[1.1rem]">
                    <h2 class="text-center tablet:text-left  text-3xl desktopSmall:text-[2rem] desktopMedium:text-[2.5rem] desktopBig:text-[2rem] font-semibold mb-6">State of the Art
                        Infrastructure</h2>
                    <p class="px-10 tablet:px-0 text-center tablet:text-left opacity-60 desktopSmall:text-[1.1rem] desktopMedium:text-[1.4rem]">
                        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast
                        connectivity.
                        This ensures your site will load instantly, no matter where your readers are, keeping your site
                        competitive.
                    </p>
                </div>
            </div>
        </div>

        <div class="text-center px-10 mb-16 tablet:flex tablet:flex-col desktopSmall:flex-row tablet:items-center tablet:mt-[12rem] desktopSmall:-ml-[10%] ">
            <div class="tablet:w-[60%]  desktopSmall:w-[100%] tablet:-ml-[0%] desktopSmall:mr-[5%]">
                <img class="tablet:scale-150 tablet:w-[100%]  desktopSmall:-mt-10 desktopSmall:w-[100%]" src="../assets/images/illustration-laptop-mobile.svg" alt="laptop"
                    title="laptop">
            </div>
            <div class="tablet:w-[100%] tablet:mt-[5rem] desktopSmall:scale-75 desktopBig:scale-100 desktopSmall:text-left desktopSmall:w-[100%] desktopSmall:text-[1.1rem] desktopBig:text-[1.4rem] desktopSmall:-mt-16 desktopMedium:-mt-[2rem] tablet:flex tablet:flex-row tablet:items-start desktopSmall:flex-col ">
                <div class="mb-10 mt-10  tablet:w-[50%] desktopSmall:w-[100%]">
                    <h2 class="text-veryDarkBlue text-2xl desktopMedium:text-[2rem]  font-semibold mb-5">Free, open, simple</h2>
                    <p class="desktopMedium:text-[1.4rem]">Blogr is a free and open source application backed by a large community of helpful developers. It
                        supports
                        features such as code syntax highlighting, RSS feeds, social media integration, third-party
                        commenting tools,
                        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to
                        learn.</p>
                </div>
                <div class="mb-10 mt-10 tablet:w-[50%] desktopSmall:w-[100%] desktopMedium:mt-16">
                    <h2 class="text-veryDarkBlue text-2xl desktopMedium:text-[2rem] font-semibold mb-5">Powerful tooling</h2>
                    <p class="desktopMedium:text-[1.4rem]">Batteries included. We built a simple and straightforward CLI tool that makes customization and
                        deployment a breeze, but
                        capable of producing even the most complicated sites.</p>
                </div>
            </div>
        </div>
    </main>
</template>