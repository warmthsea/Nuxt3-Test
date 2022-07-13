<template>
  <div class="flex flex-col mh-container">
    <Bread></Bread>
    <div class="mt-4 flex-grow bg-gray-200 mx-3 md:mx-0">
      <div v-if="!$route.query.id">
        user one : {{ $route.params.one }} {{ $route.params.two }}
      </div>
      <div v-else>
        <div>detail {{ $route.query.id }} user one : {{ $route.params.one }}</div>
        <div>id: {{ $route.params.two }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Bread from "~~/components/menu/Bread.vue";

const route = useRoute();

watch(
  route,
  (val) => {
    if (val.name == "user-one-user-two") {
      console.log(val.name);
      console.log(val.query);
      console.log(val.params);
    }
  },
  {
    immediate: true,
  }
);

onMounted(() => {
  console.log("onMounted");
});
</script>
