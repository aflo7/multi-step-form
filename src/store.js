// store.js
import { reactive } from "vue"

export const store = reactive({
    count: 0,
    selectedPlan: "arcade",
    increment() {
        if (this.count === 3) return
        this.count++
    },
    decrement() {
        if (this.count === 0) return
        this.count--
    },
    setSelectedPlan(plan) {
      this.selectedPlan = plan

    }
})
