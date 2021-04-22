import { AppState } from '../AppState.js'
import router from '../router/index.js'
// REVIEW router gets imported directly from the router file
import { api } from './AxiosService.js'

class HousesService {
  async getHouses() {
    const response = await api.get('houses')
    AppState.houses = response.data
  }

  async getHouseById(id) {
    const res = await api.get('house/' + id)
    AppState.activeHouse = res.data
  }

  async createHouse(newHouse) {
    const response = await api.post('newHouse', newHouse)
    AppState.houses.push(response.data)
    router.push({ name: 'HouseDetails', params: { id: response.data.id } })
  }

  async deleteHouse(id) {
    await api.delete('houses/' + id)
    AppState.houses = AppState.houses.filter(house => house.id !== id)
  }
}

export const housesService = new HousesService()
