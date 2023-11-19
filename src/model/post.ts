export type Post = {
    animal: {
        id: string
        rescuerId: string
        name: string
        type: string
        size: string
        status: string
        ageInMonths: number
        registeredAt: number
        shelteredAt: number
        imageUrl: string
    }
    author: {
        id: string
        username: string
        email: string
        emailVerified: string
        imageUrl: string
    }
    id: string
    ownerId: string
    animalId: string
    description?: string
    createdAt: number
    imageUrl: string
};