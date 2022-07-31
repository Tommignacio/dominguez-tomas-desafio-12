import { Router } from "express";
import cartsRouter from "./cartRoutes/CartRoutes.js";
import chatsRouter from "./ChatRoutes/chatRoutes.js";
import homeRouter from "./homeRoutes/homeRoutes.js";
import loginRouter from "./loginRoutes/loginRoutes.js";
import logoutRouter from "./logoutRoutes/logoutRoutes.js";
import productsRouter from "./ProductRoutes/ProductRoutes.js";
import testProductsRouter from "./test/testProductsRouter.js";


const router = Router();

router.use("/", homeRouter);
router.use("/api/login", loginRouter);
router.use("/api/productos", productsRouter);
router.use("/api/carrito", cartsRouter);
router.use("/api/productos-test", testProductsRouter);
router.use("/api/chat", chatsRouter)
router.use("/api/logout", logoutRouter)
export default router;
