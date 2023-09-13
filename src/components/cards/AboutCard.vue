<script setup lang="ts">

    import type {AboutUsPost} from "@/../interfaces/Common";
    import { computed } from 'vue';

    const { item } = defineProps<{
      item: AboutUsPost
    }>();

    const bgUrl = computed<string>(() => {
        return "url(" + item?.img + ")";
    });

</script>

<template>

    <router-link :to="`/our-menus/${item?.slug}`" class="w-full relative" :class="$style.card">

        <div class="bg-img cursor-pointer h-full" :class="$style.box" :style="{ backgroundImage: bgUrl}">

            <div :class="$style.inner" class="absolute flex flex-col overflow-hidden z-10 justify-end items-center text-white">
                
                <div class="relative pb-5 px-5 text-center" :class="$style.textBox">

                    <h2 :class="$style.title" v-text="item?.title" class="font-15"></h2>

                    <p :class="$style.description" v-text="item?.description" class="mt-4"></p>

                </div>

            </div>

        </div>

    </router-link>

</template>

<style src="@/assets/styles/components/AboutCard.scss" lang="scss" scoped module />