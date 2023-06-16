<script setup>

import { store } from "../store"
</script>

<template>
    <h2>Pick add-ons</h2>
    <p>Add-ons help enhance your gaming experience.</p>

    <div class="add-on-wrapper">
        <div class="option"
        
        :class="{ selected: store.addOns.onlineService }"


        >
            <div>
                <input type="checkbox" v-model="store.addOns.onlineService"/>
                <div>
                    <p><strong>Online service</strong></p>
                    <p>Access to multiplayer games</p>
                </div>
            </div>
            <p class="purple-text">+$1/mo</p>
        </div>

        <div class="option" 
        :class="{ selected: store.addOns.largerStorage }"
        
        >
            <div>
                <input type="checkbox" v-model="store.addOns.largerStorage"/>

                <div>
                    <p><strong>Larger storage</strong></p>
                    <p>Access to multiplayer games</p>
                </div>
            </div>
            <p class="purple-text">+$1/mo</p>
        </div>

        <div class="option"
        
        :class="{ selected: store.addOns.customizableProfile }"


        >
            <div>
                <input type="checkbox" v-model="store.addOns.customizableProfile"/>
                <div>
                    <p><strong>Customizable profile</strong></p>
                    <p>Custom theme on your profile</p>
                </div>
            </div>
            <p class="purple-text">+$1/mo</p>
        </div>
    </div>
</template>

<style scoped>
.add-on-wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.option {
    border: 2px solid lightgray;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    gap: 15px;
    align-items: center;
}

.selected {
    background-color: rgb(238,240,246);
    border: 2px solid rgb(63, 64, 250);
}

.purple-text {
    color: rgb(63, 64, 250);
}

.option > div {
    display: flex;
    gap: 20px;
    align-items: center;
}

.bold-text {
    font-weight: bold;
}

input[type="checkbox"] {
    height: 20px;
    width: 20px;
    cursor: pointer;
}
input[type="checkbox"]:checked {
    accent-color: rgb(63, 64, 250);
    height: 20px;
    width: 20px;
}
</style>
