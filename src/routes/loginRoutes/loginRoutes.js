import { Router } from "express";


const loginRouter = Router()

loginRouter.get("/", async (req, res) => {
    //verifica si existe el usuario en session(registrado)
    const user = await req.session?.user
    if (user) {
        res.render("chats", { user: user })
    } else {
        res.sendFile(process.cwd() + "/src/public/login.html")
    }

})


export default loginRouter