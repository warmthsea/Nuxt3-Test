<template>
    <div>
        <div> user one : {{$route.params.one}} {{$route.params.two}}  </div>
    </div>
</template>

<script>
    export default {
        layout: 'custom',
    }
</script>