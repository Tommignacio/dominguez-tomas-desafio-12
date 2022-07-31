import { Router } from "express";


const logoutRouter = Router()

//logout ruta
logoutRouter.get("/", async (req, res) => {
    //verifica si existe el usuario en session(registrado)
    const user = await req.session?.user
    if (user) {
        req.session.destroy(err => {
            //si no hay error
            if (!err) {
                res.render("logout", { user })
            } else {
                res.sendFile(process.cwd() + "/src/public/login.html")
            }
        })
    } else {
        res.sendFile(process.cwd() + "/src/public/login.html")
    }

})

export default logoutRouter