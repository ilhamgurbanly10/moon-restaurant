<script setup lang="ts">

import {
    WhatsAppOutlined,
    FacebookFilled,
    InstagramOutlined,
    YoutubeOutlined,
    MailFilled
} from '@ant-design/icons-vue';

</script>

<template>

    <footer class="main-container">

        <div class="bg-img flex relative flex-col items-center justify-end" :class="$style.box" :style="{ backgroundImage: 'url(https://grandrestaurantv6-7.b-cdn.net/wp-content/uploads/2022/09/footer-pattern.png)'}">

            <h3 class="text-white pb-10 mb-10">© 2023 By Ilham Gurbanly, All Rights Reserved</h3>
            
            <div :class="$style.innerBox" class="absolute p-10 w-full text-white flex flex-col lg:justify-between lg:flex-row items-center lg:items-start">
                
                <div class="flex flex-col items-center lg:items-start">

                    <div class="flex flex-col items-center lg:items-start">

                        <router-link to="/">
                            <span class="font-15 font-lg-20">About Us</span>
                        </router-link>

                        <router-link to="/">
                            <span class="mt-2 font-15 font-lg-20">Our Menus</span>
                        </router-link>

                        <router-link to="/">
                            <span class="mt-2 font-15 font-lg-20">Events</span>
                        </router-link>

                        <router-link to="/">
                            <span class="mt-2 font-15 font-lg-20">Contact</span>
                        </router-link>

                    </div>

                    <div class="flex items-center justify-center lg:justify-start mt-7">

                        <a href="#" class="white-iconic-btn mr-5">
                            <WhatsAppOutlined class="" />
                        </a>

                        <a href="#" class="white-iconic-btn mr-5">
                            <FacebookFilled class="" />
                        </a>

                        <a href="#" class="white-iconic-btn mr-5">
                            <InstagramOutlined class="" />
                        </a>

                        <a href="#" class="white-iconic-btn mr-5">
                            <YoutubeOutlined class="" />
                        </a>

                        <a href="#" class="white-iconic-btn">
                            <MailFilled class="" />
                        </a>

                    </div>

                </div>

                <div class="flex flex-col mt-10 lg:mt-0 flex-wrap lg:pl-10 lg:ml-10 lg:flex-row justify-between items-center lg:items-start">

                    <div class="w-full lg:w-5/12 mb-7 text-center lg:text-start">

                        <h3 :class="$style.listHead" class="mb-5 inline-block py-2 px-4">Hours</h3>
                        <p :class="$style.listItem" class="font-7">Monday-Wednesday: 11a-9p</p>
                        <p :class="$style.listItem" class="font-7">Thursday-Saturday: 11a-10p</p>
                        <p :class="$style.listItem" class="font-7">Happy Hour: Everyday 2p-6p</p>

                    </div>

                    <div class="w-full lg:w-5/12 mb-7 text-center lg:text-start">

                        <h3 :class="$style.listHead" class="mb-5 inline-block py-2 px-4">Contact</h3>
                        <p :class="$style.listItem" class="font-7">+994705182860</p>
                        <p :class="$style.listItem" class="font-7">ilhamgurbanly@gmail.com</p>

                    </div>

                    <div class="w-full lg:w-5/12 mb-5 text-center lg:text-start">

                        <h3 :class="$style.listHead" class="mb-7 inline-block py-2 px-4">Hours</h3>
                        <p :class="$style.listItem" class="font-7">Monday-Wednesday: 11a-9p</p>
                        <p :class="$style.listItem" class="font-7">Thursday-Saturday: 11a-10p</p>
                        <p :class="$style.listItem" class="font-7">Happy Hour: Everyday 2p-6p</p>

                    </div>

                    <div class="w-full lg:w-5/12 mb-5 text-center lg:text-start">

                        <h3 :class="$style.listHead" class="mb-7 inline-block py-2 px-4">Contact</h3>
                        <p :class="$style.listItem" class="font-7">+994705182860</p>
                        <p :class="$style.listItem" class="font-7">ilhamgurbanly@gmail.com</p>

                    </div>

                </div>

            </div>

        </div>
        
    </footer>

</template>

<style src="@/assets/styles/components/Footer.scss" lang="scss" scoped module />