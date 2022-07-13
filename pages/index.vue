<template>
  <div class=" mt-3 mb-3">
    <div class="flex flex-col md:flex-row">
      <div class="swipper-home">left</div>
      <div class="w-3"></div>
      <div class="swipper-home mt-3 md:mt-0">right</div>
    </div>
    <div class="flex mt-3 flex-col md:flex-row">
      <div class="flex-grow">
        <div class="h-60 bg-gray-200">left</div>
        <div class="mt-3 flex flex-col md:flex-row">
          <div class="flex-grow h-52 bg-gray-200">1</div>
          <div class="w-3"></div>
          <div class="md:mt-0 flex-grow h-52 bg-gray-200 mt-3">2</div>
        </div>
      </div>
      <div class="w-3"></div>
      <div class="md:w-1/4 md:mt-0 md:h-auto bg-gray-200 mt-3 h-28">right</div>
    </div>
    <div class="h-48 bg-gray-200 mt-3">info</div>
  </div>
</template>

<style lang="scss" scoped>
.swipper-home {
  @apply flex-grow bg-gray-200 h-96;
}
</style>
