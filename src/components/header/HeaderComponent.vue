<script setup lang="ts">

    import BackToTopBtn from '@/components/buttons/BackToTopBtn.vue';
    import HamburgerMenu from '@/components/menu/HamburgerMenu.vue';

</script>

<template>

    <header class="w-full absolute top-0">
        
        <div class="main-container-3" >

           <div :class="$style.head" class="flex w-full items-center justify-center lg:justify-between py-3">
                
                <div class="flex items-center text-white">
                    <div class="font-7 mr-5 py-2 px-4 bg-grey-opacitied">Open</div>
                    <p class="font-7 mr-5">Mon-Wed: 11a-9p</p>
                    <p class="font-7">Thurs-Sat: 11a-10p</p>
                </div>

                <div class="lg:flex lg:items-center text-white hidden">
                    <p class="font-7 mr-5">+994705182860</p>
                    <p class="font-7">ilhamgurbanly@mail.ru</p>
                </div>

           </div>
           
        </div>

        <div class="main-container-3" >

        <div :class="$style.bottom" class="flex w-full items-center justify-between py-4 px-7 lg:px-0">
            
            <div class="hidden lg:flex lg:items-center text-white">

                <router-link to="/" class="mr-16">
                    <p class="font-7">
                        Our <br/> Menus
                    </p>
                </router-link>
                
                <router-link to="/" class="mr-16">
                    <p class="font-7">
                        Catering <br/> & Events
                    </p>
                </router-link>

                <router-link to="/" >
                    <p class="font-7">
                        Our <br/> Location
                    </p>
                </router-link>

            </div>

            <router-link to="/" class="inline-block" >
                <h1 class="text-center text-white font-bold font-8 font-lg-11">MOON <br/> RESTAURANT</h1>
            </router-link>

            <div class="lg:flex lg:items-center text-white hidden">
                <router-link to="/reservation" class="inline-block">
                    <button class="white-btn-2"><span>Make a Reservation</span></button>
                </router-link>
            </div>

            <KeepAlive>
                <HamburgerMenu />
            </KeepAlive>

        </div>

</div>
        
    </header>

    <Teleport to="body">
        <BackToTopBtn />
    </Teleport>

</template>

<style src="@/assets/styles/components/Header.scss" lang="scss" scoped module />