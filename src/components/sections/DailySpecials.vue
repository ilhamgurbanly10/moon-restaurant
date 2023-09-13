<script setup lang="ts">

    import { ref, onMounted, computed, watch } from 'vue';
    //@ts-ignore
    import { useStore } from 'vuex';
    import IsLoading from '@/components/loaders/IsLoading.vue';
    import ErrorOcurred from '@/components/errors/ErrorOcurred.vue';
    import type {DailySpecialsObj} from '@/../../interfaces/Common';

    // vuex
    const store = useStore();

    const loading = ref<boolean>(false);

    const data = computed<DailySpecialsObj>(() => {
        return store.getters.dailySpecials;
    });

    const getData = async (): Promise<void> => {
        loading.value = true;
        await store.dispatch('getDailySpecials');
        loading.value = false;
    }

    const bgUrl = ref<string>('');
    const bgLeftUrl = ref<string>('');
    const bgRightUrl = ref<string>('');

    watch(data, (newData, oldData) => {
        bgUrl.value = "url(" + newData?.data?.top?.bg_img + ")";
        bgLeftUrl.value = "url(" + newData?.data?.body?.bg_img + ")";
        bgRightUrl.value = "url(" + newData?.data?.bottom?.bg_img + ")";
    })

    onMounted(() => {
        getData();
    })
    // end-vuex

</script>

<template>

    <section class="page-top-spacing">

        <Transition name="to-top">
            
            <IsLoading v-if="loading" class="loader" />

            <ErrorOcurred v-else-if="data.error" class="error" />

            <div v-else-if="!loading && !data.error">

                <div :class="$style.top" class="bg-img main-container flex justify-center lg:justify-end" :style="{ backgroundImage: bgUrl}">
                    
                    <div class="py-10 w-full flex justify-end items-start">

                        <div :class="$style.box" class="relative p-10 mt-10 text-white w-full lg:w-6/12">

                            <h1 v-text="data.data?.top?.title" class="absolute left-0 font-16 font-lg-25 text-center w-full" :class="$style.topTitle"></h1>

                            <div v-for="(item, i) in data.data?.top?.data" :key="i" :class="$style.topCard">

                                <div class="flex mt-5 justify-between items-center w-full">
                                    <h3 v-text="item?.title"></h3>
                                    <h3 v-text="item?.price"></h3>
                                </div>

                                <p v-text="item.description" class="mt-1 text-gray-400"></p>

                            </div>

                        </div>

                    </div>

                </div>

                <div :class="$style.body" class="main-container-2 flex flex-col lg:flex-row">

                    <div class="w-full g:w-6/12 bg-img  p-5 lg:p-10" :class="$style.bodyLeft" :style="{ backgroundImage: bgLeftUrl}"></div>
                    
                    <div class="w-full g:w-6/12 bg-img p-5 lg:p-10 text-center lg:text-start" :class="$style.bodyRight" :style="{ backgroundImage: 'url(https://grandrestaurantv6-7.b-cdn.net/wp-content/uploads/2022/09/footer-pattern.png)'}">
                        
                        <h1 v-text="data.data?.body?.title" class="lg:w-6/12" :class="$style.bodyTitle"></h1>

                        <p v-text="data.data?.body?.description" class="mt-3 lg:w-10/12"></p>

                        <router-link to="/view-our-events" class="mt-10 inline-block">
                            <button class="white-btn mt-7"><span>VIEW OUR EVENTS</span></button>
                        </router-link>

                    </div>

                </div>

                <div :class="$style.bottom" class="main-container-2 flex flex-col lg:flex-row">

                    <div class="w-full g:w-6/12 bg-img p-5 lg:p-10 text-center lg:text-start" :class="$style.bottomRight" :style="{ backgroundImage: 'url(https://grandrestaurantv6-7.b-cdn.net/wp-content/uploads/2022/09/footer-pattern.png)'}">
                        
                        <h1 v-text="data.data?.bottom?.title" class="lg:w-6/12" :class="$style.bottomTitle"></h1>

                        <p v-text="data.data?.bottom?.description" class="mt-3 lg:w-10/12"></p>

                        <router-link to="/view-our-menu" class="mt-10 inline-block">
                            <button class="white-btn mt-7"><span>VIEW OUR MENU</span></button>
                        </router-link>

                    </div>

                    <div class="w-full g:w-6/12 bg-img  p-5 lg:p-10" :class="$style.bottomLeft" :style="{ backgroundImage: bgRightUrl}"></div>

                </div>
                
            </div>
        
        </Transition>

    </section>

</template>

<style src="@/assets/styles/components/DailySpecials.scss" lang="scss" scoped module />
