<script setup>
import PersonalInfo from "./components/PersonalInfo.vue"
import SelectYourPlan from "./components/SelectYourPlan.vue"
import AddOn from "./components/AddOn.vue"
import FinishingUp from "./components/FinishingUp.vue"
import { store } from "./store.js"
</script>
<template>
    <div class="content-top">
        <div class="button-wrapper">
            <button
                class="btn-display-num"
                :class="{ 'selected-btn': store.count === 0 }"
            >
                1
            </button>
            <button
                class="btn-display-num"
                :class="{ 'selected-btn': store.count === 1 }"
            >
                2
            </button>
            <button
                class="btn-display-num"
                :class="{ 'selected-btn': store.count === 2 }"
            >
                3
            </button>
            <button
                class="btn-display-num"
                :class="{ 'selected-btn': store.count === 3 }"
            >
                4
            </button>
        </div>

        <div v-if="!store.thankYouPage">
            <div v-if="store.count === 0" class="top-content-wrapper">
                <PersonalInfo />
            </div>

            <div v-if="store.count === 1" class="top-content-wrapper">
                <SelectYourPlan />
            </div>

            <div v-if="store.count === 2" class="top-content-wrapper">
                <AddOn />
            </div>

            <div v-if="store.count === 3" class="top-content-wrapper">
                <FinishingUp />
            </div>
        </div>

        <div class="thank-you-wrapper" v-if="store.thankYouPage">
            <div class="thank-you-icon"></div>
            <p class="thank-you-text">Thank you!</p>
            <p class="gray-text">
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@gmail.com
            </p>
        </div>
    </div>

    <div class="content-middle"></div>

    <div
        v-if="!store.thankYouPage"
        class="content-bottom"
        :class="{ 'space-between': store.count !== 0 }"
    >
        <button
            v-if="store.count !== 0"
            class="go-back-btn"
            @click="store.decrement()"
        >
            Go Back
        </button>
        <button
            class="next-step-btn"
            :class="{ hide: store.count === 3 }"
            @click="store.increment()"
        >
            Next Step
        </button>

        <button
            v-if="store.count === 3"
            class="confirm-btn"
            @click="store.showThankYouPage"
        >
            Confirm
        </button>
    </div>
</template>

<style scoped>
.content-top {
    background-image: url(./assets/images/bg-sidebar-mobile.svg);
    height: 200px;
    background-size: cover;
    background-position: center;
}

.button-wrapper {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 25px;
}

.btn-display-num {
    background-color: transparent;
    border: 2px solid white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    font-weight: bold;
    text-align: center;
}

.selected-btn {
    background-color: rgb(184, 221, 248);
    color: rgb(6, 37, 76);
}

.button-wrapper > button:hover {
    background-color: rgb(184, 221, 248);
    color: rgb(6, 37, 76);
}

.content-middle {
    background-color: rgb(236, 243, 254);
}

.content-middle {
    flex: 1;
    background-color: rgb(236, 243, 254);
}

.top-content-wrapper {
    background-color: white;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 15px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
    position: relative;
}
.thank-you-wrapper {
    background-color: white;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 15px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-align: center;
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
    padding: 100px 40px;
}

.thank-you-icon {
    width: 80px;
    height: 80px;
    background-image: url(./assets/images/icon-thank-you.svg);
    background-size: cover;
}

.thank-you-text {
    font-size: 2rem;
    font-weight: bold;
}

.gray-text {
    color: gray;
}

.content-bottom {
    padding: 15px;
    display: flex;
    justify-content: flex-end;
    background-color: white;
}

.space-between {
    justify-content: space-between;
}

.next-step-btn {
    background-color: rgb(6, 37, 76);
    border-radius: 5px;
    color: white;
    border: none;
    padding: 10px 20px;
}

.confirm-btn {
    background-color: rgb(63, 60, 247);
    border-radius: 5px;
    color: white;
    border: none;
    padding: 10px 20px;
}

.go-back-btn {
    background-color: transparent;
    border: none;
    padding: 10px 10px;
    color: gray;
}

.hide {
    display: none;
}
</style>
