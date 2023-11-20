export type AnimalsToRequest = {
  animal: Animal
  requesters: Requester[]
}

type Animal = {
  id: number,
  name: string,
  imageUrl: string
}

type Requester = {
  id: number,
  imageUrl: string
}
