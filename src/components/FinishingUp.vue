<script setup></script>

<template>
    <h2>Finishing up</h2>
    <p class="gray-text">Double-check everything looks OK before confirming.</p>
    <div class="finishing-up-wrapper">
        <div>
            <p><strong>Arcade (monthly)</strong></p>
            <p><strong>$9/mo</strong></p>
        </div>
        <hr />

        <div>
            <p class="gray-text">Online service</p>
            <p>+$1/mo</p>
        </div>

        <div>
            <p class="gray-text">Larger Storage</p>
            <p>+$2/mo</p>
        </div>
    </div>
    <div class="flex-group">
        <p class="gray-text">Total (per month)</p>
        <p class="purple-text"><strong>+$12/mo</strong></p>
    </div>
</template>

<style scoped>
hr {
    background-color: lightgray;
    height: 1px;
    border: none;
}

.finishing-up-wrapper {
    background-color: rgb(247, 248, 253);
    border-radius: 5px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.finishing-up-wrapper > div {
    display: flex;
    justify-content: space-between;
}

.flex-group {
    display: flex;
    justify-content: space-between;
    padding: 15px;
}

.purple-text {
    color: rgb(63, 60, 247);
}

.gray-text {
    color: gray;
}
</style>
