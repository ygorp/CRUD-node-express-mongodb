import { Router } from "express";
import { listUsers, createUser } from "../services/user";

const router = Router()

router.get('/', async (req, res) => {
    const userList = await listUsers()
    res.send(userList)
})

router.post('/', async (req, res) => {
    try {
        const user = await createUser(req.body)
        res.status(201).send(user)
    } catch (error) {
       res.status(400).send(error)
    }
})

router.delete('/', (req, res) => {
    res.send('DELETE USER')
})

export default router