<template>
  <div class="modal fade"
       id="new-house-form"
       tabindex="-1"
       role="dialog"
       aria-labelledby="exampleModalLabel"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            New House
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <!-- when submitted run the function provided
                                    this can be triggered by the button or the enter key -->
        <form @submit.prevent="createHouse">
          <div class="modal-body">
            <!-- Form to create a house  -->
            <div class="form-group">
              <label for="price">Price</label>
              <!-- the id determines the property on the form object -->
              <input type="number"
                     class="form-control"
                     id="price"
                     placeholder="Price..."
                     required
                     min="0"
                     max="999999999"
                     v-model="state.newHouse.price"
              >
            </div>
            <div class="form-group">
              <label for="bedrooms">Bedrooms</label>
              <input type="number"
                     class="form-control"
                     id="bedrooms"
                     placeholder="Bedrooms..."
                     required
                     v-model="state.newHouse.bedrooms"
              >
            </div>
            <div class="form-group">
              <label for="bathrooms">Bathrooms</label>
              <input type="number"
                     class="form-control"
                     id="bathrooms"
                     placeholder="Bathrooms..."
                     required
                     v-model="state.newHouse.bathrooms"
              >
            </div>
            <div class="form-group">
              <label for="levels">Levels</label>
              <input type="number"
                     class="form-control"
                     id="levels"
                     placeholder="Levels..."
                     min="1"
                     v-model="state.newHouse.levels"
              >
            </div>
            <div class="form-group">
              <label for="year">Year Built</label>
              <input type="number"
                     class="form-control"
                     id="year"
                     placeholder="Year Built..."
                     min="1700"
                     max="2021"
                     v-model="state.newHouse.year"
              >
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <input type="text"
                     class="form-control"
                     id="description"
                     placeholder="Description..."
                     minlength="3"
                     maxlength="20"
                     v-model="state.newHouse.description"
              >
            </div>
            <div class="form-group">
              <label for="imgUrl">Image Url</label>
              <input type="text" class="form-control" id="imgUrl" placeholder="Url..." v-model="state.newHouse.imgUrl">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="submit" class="btn btn-primary">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { housesService } from '../services/HousesService'
import $ from 'jquery'

export default {
  name: 'HouseModal',
  setup() {
    const state = reactive({
      newHouse: {}
    })
    return {
      state,
      async createCar() {
        try {
          await housesService.createHouse(state.newHouse)
          console.log('click')
          state.newHouse = {}
          $('#new-house-form').modal('hide')
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
