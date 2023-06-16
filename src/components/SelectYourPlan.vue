<script setup>
import { store } from "../store"
import MonthlyYearlySlider from "./MonthlyYearlySlider.vue"
</script>

<template>
    <h2>Select your plan</h2>
    <p>You have the option of monthly or yearly billing.</p>

    <div class="plan-wrapper">
        <div
            class="option"
            @click="store.setSelectedPlan('arcade')"
            :class="{ selected: store.selectedPlan === 'arcade' }"
        >
            <img src="../assets/images/icon-arcade.svg" />
            <div>
                <h3>Arcade</h3>
                <p>$9/mo</p>
            </div>
        </div>
        <div
            class="option"
            @click="store.setSelectedPlan('advanced')"
            :class="{ selected: store.selectedPlan === 'advanced' }"
        >
            <img src="../assets/images/icon-advanced.svg" />
            <div>
                <h3>Advanced</h3>
                <p>$12/mo</p>
            </div>
        </div>
        <div
            class="option"
            @click="store.setSelectedPlan('pro')"
            :class="{ selected: store.selectedPlan === 'pro' }"
        >
            <img src="../assets/images/icon-pro.svg" />
            <div>
                <h3>Pro</h3>
                <p>$15/mo</p>
            </div>
        </div>

        <div class="slider-wrapper">
            <p><strong>Monthly</strong></p>
            <MonthlyYearlySlider />
            <p><strong>Yearly</strong></p>

        </div>
    </div>
</template>

<style scoped>
.plan-wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.option {
    border: 2px solid lightgray;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    gap: 15px;
    cursor: pointer;
    align-items: center;
}

.selected {
    background-color: rgb(247, 248, 254);
    border: 2px solid rgb(63, 64, 250);

}

.slider-wrapper {
    display: flex;
    justify-content: center;
    gap: 30px;
    background-color: rgb(247, 248, 254);
    padding: 15px;
    align-items: center;
}
</style>
