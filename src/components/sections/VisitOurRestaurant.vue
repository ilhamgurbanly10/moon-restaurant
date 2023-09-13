<script setup lang="ts">

    import { ref, onMounted, computed, watch } from 'vue';
    //@ts-ignore
    import { useStore } from 'vuex';
    import IsLoading from '@/components/loaders/IsLoading.vue';
    import ErrorOcurred from '@/components/errors/ErrorOcurred.vue';
    import type {VisitObj} from '@/../../interfaces/Common';

    // vuex
    const store = useStore();

    const loading = ref<boolean>(false);

    const data = computed<VisitObj>(() => {
        return store.getters.visit;
    });

    const getData = async (): Promise<void> => {
        loading.value = true;
        await store.dispatch('getVisit');
        loading.value = false;
    }

    const bgUrl = ref<string>('');

    watch(data, (newData, oldData) => {
        bgUrl.value = "url(" + newData?.data?.bg_img + ")";
    })

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

               

               <div class="flex flex-col lg:flex-row">

                    <div class="bg-img w-full lg:w-5/12 p-5 lg:p-10 text-white" :class="$style.left" :style="{ backgroundImage: 'url(https://grandrestaurantv6-7.b-cdn.net/wp-content/uploads/2022/09/footer-pattern.png)'}">
                        
                        <h1 v-text="data?.data?.title" class="font-10 font-lg-20 lg:w-8/12"></h1>

                        <div class="mt-7">
                            <h6 class="font-bold">Lunch</h6>
                            <p v-for="(item, i) in data?.data?.lunch_txt" :key="i" v-text="item"></p>
                        </div>

                        <div class="mt-7">
                            <h6 class="font-bold">Dinner</h6>
                            <p v-for="(item, i) in data?.data?.dinner_txt" :key="i" v-text="item"></p>
                        </div>

                    </div>

                    <div class="bg-img w-full relative lg:w-7/12 text-white" :class="$style.right">
                        
                        <img :class="$style.img" class="lg:absolute w-full h-full" :src="data?.data?.bg_img" :alt="data?.data?.title">

                    </div>

               </div>
                
            </div>
        
        </Transition>

    </section>

</template>

<style src="@/assets/styles/components/VisitOurRestaurant.scss" lang="scss" scoped module />
