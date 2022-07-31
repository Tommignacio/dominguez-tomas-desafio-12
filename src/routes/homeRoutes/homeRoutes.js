import { Router } from "express";

const homeRouter = Router();

homeRouter.get("/", async (req, res) => {
    //verifica si existe el usuario en session(registrado)
    const user = await req.session?.user;
    if (user) {
        res.render("chats", { user: user })
    } else {
        res.redirect("/api/login");
    }
})

homeRouter.post("/", (req, res) => {
    const { name } = req.body
    //crea session 
    req.session.user = name
    req.session.save((err) => {
        if (err) {
            console.log("error al iniciar session", err);
            res.redirect("/api/login");
        }
    })
    res.render("chats", { user: name })

})

export default homeRouter