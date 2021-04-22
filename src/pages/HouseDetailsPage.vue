<template>
  <div class="house-details">
    <h1>House Details</h1>
    <div class="col-md-4 mb-3">
      <div class="card shadow" v-if="state.house">
        <img class="card-img-top" :src="state.house.imgUrl" alt="">
        <div class="card-body">
          <h4 class="card-title">
            <!-- {{ route.params.id }}
            {{ state.house }} -->
            ${{ house.price.toFixed(2) }}
          </h4>
          <p class="card-title">
            bed:{{ state.house.bedrooms }} | bath:{{ state.house.bathrooms }} | levels:{{ state.house.levels }} | built:{{ state.house.year }}
          </p>
          <p class="card-text">
            {{ state.house.description }}
          </p>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-danger" @click="deleteHouse">
      Delete
    </button>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { AppState } from '../AppState'
import { reactive, computed, onMounted } from 'vue'
import { housesService } from '../services/HousesService'

export default {
  name: 'HouseDetails',
  setup() {
    // ROUTE is the current page info
    const route = useRoute()
    // ROUTER is the toolset of changing routes automatically
    const router = useRouter()
    const state = reactive({
      house: computed(() => AppState.activeHouse)
    })

    onMounted(async() => {
      try {
        await housesService.getHouseById(route.params.id)
      } catch (error) {
        console.error(error)
      }
    })

    return {
      route,
      state,
      async deleteHouse() {
        try {
          await housesService.deleteHouse(state.house.id)
          // Router is a toolset, here used to change the page after the delete is completed
          // returning the user to the houses page
          AppState.activeHouse = null
          router.push({ name: 'Houses' })
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
