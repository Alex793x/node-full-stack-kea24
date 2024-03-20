import useSetupServer from './config/serverConfig.js';
const app = useSetupServer();
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:`, PORT);
});
