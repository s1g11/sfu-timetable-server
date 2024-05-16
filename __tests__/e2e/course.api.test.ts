import request from "supertest"

import {app} from "../../src/app";

describe('/course', () => {

    it('should return 200 and empty array', async () => {
        await request(app)
            .get('/products')
            .expect(200, [
                {id: 1, title: 'tomato'},
                {id: 2, title: 'orange'}
            ])
    })

    it('should return 404 for not existing product', async () => {
        await request(app)
            .get('/products/-10')
            .expect(404)
    })
})