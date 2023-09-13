<script setup lang="ts">

    import { ref, onMounted, computed } from 'vue';
    //@ts-ignore
    import { useStore } from 'vuex';
    import IsLoading from '@/components/loaders/IsLoading.vue';
    import ErrorOcurred from '@/components/errors/ErrorOcurred.vue';
    import AboutCard from '@/components/cards/AboutCard.vue';
    import type {AboutUsObj} from '@/../../interfaces/Common';

    // vuex
    const store = useStore();

    const loading = ref<boolean>(false);

    const data = computed<AboutUsObj>(() => {
        return store.getters.aboutUs;
    });

    const getData = async (): Promise<void> => {
        loading.value = true;
        await store.dispatch('getAboutUs');
        loading.value = false;
    }

    onMounted(() => {
        getData();
    })
    // end-vuex

</script>

<template>

    <section class="main-container page-top-spacing">

        <Transition name="to-top">
            
            <IsLoading v-if="loading" class="loader" />

            <ErrorOcurred v-else-if="data.error" class="error" />

            <div v-else-if="!loading && !data.error">

                <div class="flex flex-col items-center">

                    <img width="48" height="48" :src="data.data?.icon" :alt="data.data?.title">

                    <h1 class="font-15 font-lg-18 text-center mt-8 lg:w-9/12" v-text="data.data?.title"></h1>

                    <div class="w-full flex flex-col lg:flex-row justify-between mt-10">
                        <AboutCard v-for="(item, i) in data.data?.data" :key="i" :item="item" :class="{'mt-5 lg:mt-0': i != 0}" />
                    </div>

                </div>
                
            </div>
        
        </Transition>

    </section>

</template>

<style src="@/assets/styles/components/AboutUs.scss" lang="scss" scoped />
