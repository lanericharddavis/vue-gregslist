<template>
  <div class="houses container">
    <div class="row">
      <div class="col  py-3">
        <h2>Houses</h2>
        <button title="Open Create House Form"
                type="button"
                class="btn btn-outline-success"
                data-toggle="modal"
                data-target="#new-house-form"
        >
          <i class="fas fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <!--This is where the houses go with 'v-for'-->
      <House v-for="house in state.houses" :key="house.id" :house="house" />
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, computed } from 'vue'
import { housesService } from '../services/HousesService'
import { AppState } from '../AppState'
import House from '../components/HouseComponent'

export default {
  name: 'HousesPage',
  setup() {
    const state = reactive({
      houses: computed(() => AppState.houses)
    })

    onMounted(async() => {
      try {
        await housesService.getHouses()
      } catch (error) {
        console.error(error)
      }
    })

    return {
      state
    }
  },
  components: {
    House
  }
}
</script>

<style lang="scss" scoped>

</style>
