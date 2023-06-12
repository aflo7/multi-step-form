<script setup>
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <h2>Personal info</h2>
    <p>Please provide your name, email address, and phone number.</p>

    <form class="mobile-form">
        <div>
            <label>Name</label>
            <input type="text" placeholder="e.g. Stephen King" />
        </div>

        <div>
            <label>Email Address</label>
            <input type="text" placeholder="e.g. stephenking@lorem.com" />
        </div>

        <div>
            <label>Phone Number</label>
            <input type="text" placeholder="e.g. +1 234 567 890" />
        </div>
    </form>
</template>

<style scoped>
.mobile-form {
    display: grid;
    gap: 15px;
}

.mobile-form input[type="text"] {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid lightgray;
}

.mobile-form > div {
    display: grid;
}

.mobile-form label {
    font-weight: bold;
}
</style>
