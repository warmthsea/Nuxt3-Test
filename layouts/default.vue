<template>
    <div class="flex flex-col">
        <TheHeader />
        <div class="flex-1 wrapper bg-gray-100 p-3">
            <slot />
        </div>
        <TheFooter />
    </div>
</template>