import serverConfig from "../serverConfig.js";
import { homepagePage, matchesPage, contactPage } from "../utils/readPages.js";


const { router } = serverConfig;


const setupPagesRouter = () => {
    router.get("/", (req, res) => {
        res.send(homepagePage);
    })

    router.get("/contact", (req, res) => {
        res.send(contactPage);
    })

    router.get("/page", (req, res) => {
        res.send("")
    })
}

export default setupPagesRouter