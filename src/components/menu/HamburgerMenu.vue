<script setup lang="ts">

    import { ref } from 'vue';
    
    const show = ref<boolean>(false);
    
    import {
        BarsOutlined,
        CloseOutlined
    } from '@ant-design/icons-vue';

</script>

<template>
    
    <button type="button" @click="show = !show" class="lg:hidden text-white font-10 opacity-on-hover p-0 flex items-center">
        <BarsOutlined v-if="!show" />
        <CloseOutlined v-else />
    </button>

    <div :class="[$style.overlay, {[$style.show]: show}]" @click="show = false" class="fixed left-0 w-full h-screen"> </div>
    
    <div class="fixed h-screen left-0 p-10 flex flex-col lg:hidden" :class="[$style.menu, {[$style.show]: show}]">
        
        <nav class="w-8/12" @click.stop="">

            <router-link to="/">
                <button type="button" @click="show = false" class="opacity-on-hover px-0 py-3 w-full text-start" :class="$style.link">
                    <span>HOME</span>
                </button>
            </router-link>

            <router-link to="/">
                <button type="button" @click="show = false" class="opacity-on-hover px-0 py-3 w-full text-start" :class="$style.link">
                    <span>OUR MENUS</span>
                </button>
            </router-link>

            <router-link to="/">
                <button type="button" @click="show = false" class="opacity-on-hover px-0 py-3 w-full text-start" :class="$style.link">
                    <span>CATERING & EVENTS</span>
                </button>
            </router-link>

            <router-link to="/">
                <button type="button" @click="show = false" class="opacity-on-hover px-0 py-3 w-full text-start" :class="$style.link">
                    <span>OUR LOCATION</span>
                </button>
            </router-link>

        </nav>

    </div>

</template>

<style src="@/assets/styles/components/HamburgerMenu.scss" lang="scss" scoped module />interfaces/MyComponents