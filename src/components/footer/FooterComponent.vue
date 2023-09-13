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
            
            <div :class="$style.innerBox" class="absolute p-10 w-full h-full text-white">
                
            </div>

        </div>
        
    </footer>

</template>

<style src="@/assets/styles/components/Footer.scss" lang="scss" scoped module />