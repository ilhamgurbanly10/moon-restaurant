<script setup lang="ts">

import IsLoading from '@/components/loaders/IsLoading.vue';

import { defineAsyncComponent } from 'vue';

const HeroSection = defineAsyncComponent(() =>
  import('@/components/sections/HeroSection.vue')
);

const AboutUs = defineAsyncComponent(() =>
  import('@/components/sections/AboutUs.vue')
);

const DailySpecials = defineAsyncComponent(() =>
  import('@/components/sections/DailySpecials.vue')
);

const VisitOurRestaurant = defineAsyncComponent(() =>
  import('@/components/sections/VisitOurRestaurant.vue')
);

</script>

<template>

  <Suspense>

    <template #default>
      <HeroSection />
    </template>

    <template #fallback>
      <IsLoading />
    </template>

  </Suspense>

  <Suspense>

    <template #default>
      <AboutUs />
    </template>

    <template #fallback>
      <IsLoading />
    </template>

  </Suspense>

  <Suspense>

    <template #default>
      <DailySpecials />
    </template>

    <template #fallback>
      <IsLoading />
    </template>

  </Suspense>

  <Suspense>

    <template #default>
      <VisitOurRestaurant />
    </template>

    <template #fallback>
      <IsLoading />
    </template>

  </Suspense>
  
</template>

<style src="@/assets/styles/pages/Home.scss" lang="scss" scoped />
