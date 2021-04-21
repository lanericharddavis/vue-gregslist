<template>
  <header>
    <Navbar />
  </header>
  <!-- NOTE router-view allows the router to determine the component that should be injected -->
  <main>
    <router-view />
    <CreateCarModal />
    <CreateHouseModal />
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      <img src="../src/assets/myFace.png" width="45" height="45" alt="" loading="lazy">
      <p>Created by Lane Davis</p>
    </div>
  </footer>
</template>

<script>
import CreateCarModal from './components/CreateCarModal.vue'
import CreateHouseModal from './components/CreateHouseModal.vue'
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar,
    CreateCarModal,
    CreateHouseModal
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";

</style>
