import { Router } from "express";
import { listUsers, createUser, deletUser, updateUser } from "../services/user";

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

router.delete('/:userId', async (req, res) => {
    await deletUser(req.params.userId)
    res.send()
})

router.put('/:userId', async (req, res) => {
    await updateUser(req.params.userId, req.body)
    res.send()
})

export default router