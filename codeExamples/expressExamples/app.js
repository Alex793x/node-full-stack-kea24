import setupServer from './serverConfig'; 

const app = setupServer();

const PORT = process.env.PORT || 3000; //.env would typically contain the port

app.listen(PORT, () => console.log("Server is running on port: ", PORT));
