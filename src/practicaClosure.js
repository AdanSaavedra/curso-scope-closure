export function createPetList() {
    const mascotas = [];
    return function receivePets(pets) {
      if (pets){
        mascotas.push(pets)
      }
      return mascotas
    }
}
  