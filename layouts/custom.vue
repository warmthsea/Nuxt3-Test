<template>
    <div class="flex flex-col">
        <CustomHeader></CustomHeader>
        <div class="flex-1 wrapper bg-gray-100">
            <slot />
        </div>
        <TheFooter />
    </div>
</template>