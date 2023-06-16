<script setup>
import PersonalInfo from "./components/PersonalInfo.vue"
import SelectYourPlan from "./components/SelectYourPlan.vue"
import AddOn from "./components/AddOn.vue"
import FinishingUp from "./components/FinishingUp.vue"
import { store } from "./store"
</script>

<template>
    <div class="main-desktop-content">
        <div class="content-left">
            <div>
                <button
                    class="btn-display-num"
                    :class="{ 'selected-btn': store.count === 0 }"
                >
                    1
                </button>

                <div>
                    <p class="gray-text">STEP 1</p>
                    <p class="bold-text">YOUR INFO</p>
                </div>
            </div>

            <div>
                <button
                    class="btn-display-num"
                    :class="{ 'selected-btn': store.count === 1 }"
                >
                    2
                </button>
                <div>
                    <p class="gray-text">STEP 2</p>
                    <p class="bold-text">SELECT PLAN</p>
                </div>
            </div>
            <div>
                <button
                    class="btn-display-num"
                    :class="{ 'selected-btn': store.count === 2 }"
                >
                    3
                </button>
                <div>
                    <p class="gray-text">STEP 3</p>
                    <p class="bold-text">ADD-ONS</p>
                </div>
            </div>

            <div>
                <button
                    class="btn-display-num"
                    :class="{ 'selected-btn': store.count === 3 }"
                >
                    4
                </button>
                <div>
                    <p class="gray-text">STEP 4</p>
                    <p class="bold-text">SUMMARY</p>
                </div>
            </div>
        </div>
        <div class="content-right">
            <div>
                <div
                    class="content-wrapper"
                    :class="{ hide: store.count !== 0 }"
                >
                    <PersonalInfo />
                </div>

                <div
                    class="content-wrapper"
                    :class="{ hide: store.count !== 1 }"
                >
                    <SelectYourPlan />
                </div>

                <div
                    class="content-wrapper"
                    :class="{ hide: store.count !== 2 }"
                >
                    <AddOn />
                </div>

                <div
                    class="content-wrapper"
                    :class="{ hide: store.count !== 3 }"
                >
                    <FinishingUp />
                </div>
            </div>

            <div
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
                    class="confirm-btn"
                    :class="{ hide: store.count !== 3 }"
                >
                    Confirm
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-desktop-content {
    display: flex;
    height: 650px;
    padding: 15px;
    border-radius: 15px;
    background-color: white;
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
}

.content-left {
    background-image: url(./assets/images/bg-sidebar-desktop.svg);
    background-position: center;
    background-size: cover;
    border-radius: 15px;
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 25px;
}

.content-left > div {
    display: flex;
    gap: 15px;
    color: white;
    align-items: center;
}

.content-right {
    align-self: center;
    padding: 20px 50px;
    height: 100%;
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.btn-display-num {
    background-color: transparent;
    border: 2px solid white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
}

.selected-btn {
    background-color: rgb(184, 221, 248);
    color: rgb(6, 37, 76);
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

.content-bottom {
    padding: 15px;
    display: flex;
    justify-content: flex-end;
    background-color: white;
}

.content-wrapper {
    background-color: white;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 15px;
    padding: 15px;
    display: grid;
    gap: 15px;
    /* box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1); */
   
}

.space-between {
    justify-content: space-between;
}

.gray-text {
    color: lightgray;
}

.bold-text {
    font-weight: bold;
}

.hide {
    display: none;
}
</style>
