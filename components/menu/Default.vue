<template>
    <div class="default_menu mt-6">
        <NuxtLink to="/">index </NuxtLink>
        <NuxtLink to="/detail">detail </NuxtLink>
        <NuxtLink to="/detail/child">detail child </NuxtLink>
        <NuxtLink to="/user-1/user-2">/user-1/user-2 </NuxtLink>
        <NuxtLink to="/user">user </NuxtLink>
    </div>
</template>
    
<style lang="scss" scoped>
.default_menu a {
    @apply m-2 bg-gray-100 p-2 rounded-xl;
}
</style>