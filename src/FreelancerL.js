import faker from 'faker';

const freelancerList = [
    {
        "avatar": faker.image.avatar(),
        "name": faker.name.firstName(),
        "description": faker.lorem.text(),
        "rating": faker.random.number({ min: 1, max: 5 })
    },
    {
        "avatar": faker.image.avatar(),
        "name": faker.name.firstName(),
        "description": faker.lorem.text(),
        "rating": faker.random.number({ min: 1, max: 5 })
    },
    {
        "avatar": faker.image.avatar(),
        "name": faker.name.firstName(),
        "description": faker.lorem.text(),
        "rating": faker.random.number({ min: 1, max: 5 })
    },
    {
        "avatar": faker.image.avatar(),
        "name": faker.name.firstName(),
        "description": faker.lorem.text(),
        "rating": faker.random.number({ min: 1, max: 5 })
    },
    {
        "avatar": faker.image.avatar(),
        "name": faker.name.firstName(),
        "description": faker.lorem.text(),
        "rating": faker.random.number({ min: 1, max: 5 })
    },
    {
        "avatar": faker.image.avatar(),
        "name": faker.name.firstName(),
        "description": faker.lorem.text(),
        "rating": faker.random.number({ min: 1, max: 5 })
    }
]

export default freelancerList;