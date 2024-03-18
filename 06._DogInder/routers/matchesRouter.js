import serverConfig from "../serverConfig.js";

const { router } = serverConfig

function setupMatchesRoutes() {
    router.get("/matches", (req, res) => {
        res.send(matchesPage);
    });

    router.get("/api/matches", async (req, res) => {
        const matches = await getMatches();
        res.send({data: matches});
    });
}

export default setupMatchesRoutes;