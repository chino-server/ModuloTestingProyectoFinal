import supertest from "supertest";
import { expect } from "chai";


const request = supertest('http://localhost:8001')


const product1 ={
    title:'carbon',
    price:54,
    descripcion:'carbon para el asado',
    category:'comestible',
    image:'4565465465',
    rating: 45,
    stock:85,
    code:5465489
}


describe('test de endpoint productos', function (){
    it('probar el metodo post de /api/product', async function (){
        const response = await  request.post ('/api/product/').send(product1)
        console.log(response)
    })
})