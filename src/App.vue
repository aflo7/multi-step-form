<script setup>
import Mobile from "./Mobile.vue"
import Desktop from "./Desktop.vue"
</script>

<template>
    <div class="main-mobile">
        <Mobile />
    </div>

    <div class="main-desktop">
        <Desktop />
    </div>
</template>

<style scoped>
.main-desktop {
    display: none;
    justify-content: center;
    height: 100vh;
    width: 100%;
    align-items: center;
    background-color: rgb(236, 243, 254);
}

.main-mobile {
    height: 100vh;
    display: flex;
    flex-direction: column;
}

@media screen and (min-width: 800px) {
    .main-mobile {
        display: none;
    }

    .main-desktop {
        display: flex;
    }
}
</style>
