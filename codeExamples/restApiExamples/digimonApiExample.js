import express from 'express';
import { json } from 'body-parser';

const app = express();
const PORT = 3000;

app.use(json()); // Middleware to parse JSON data

let digimons = [
    { id: 1, name: 'Agumon', type: 'Reptile' },
    { id: 2, name: 'Gabumon', type: 'Reptile' },
  ];
  let nextId = 3;

  
  app.get('/digimons', (req, res) => {
    res.status(200).send({ data: digimons});
  });

  app.get('/digimons/:id', (req, res) => {
    const digimon = digimons.find(d => d.id === parseInt(req.params.id));
    if (!digimon) {
      return res.status(404).send({ error: 'Digimon not found' });
    }
    res.status(200).send({ data: digimon});
  });
  

  
  app.post('/digimons', (req, res) => {
    const { name, type } = req.body;
    const newDigimon = { id: nextId++, name, type };
    digimons.push(newDigimon);
    res.status(201).send({ data: newDigimon});
  });


  app.put('/digimons/:id', (req, res) => {
    const digimon = digimons.find(d => d.id === parseInt(req.params.id));
    if (!digimon) {
      return res.status(404).send({ error: 'Digimon not found' });
    }
    const { name, type } = req.body;
    digimon.name = name;
    digimon.type = type;
    res.status(200).send({ data: digimon});
  });


  app.patch('/digimons/:id', (req, res) => {
    const digimon = digimons.find(d => d.id === parseInt(req.params.id));
    if (!digimon) {
      return res.status(404).send({ error: 'Digimon not found' });
    }
    const { name, type } = req.body;
    if (name) digimon.name = name;
    if (type) digimon.type = type;
    res.status(200).send({ data: digimon});
  });
  

  
  app.delete('/digimons/:id', (req, res) => {
    const index = digimons.findIndex(d => d.id === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).send({ error: 'Digimon not found' });
    }
    digimons.splice(index, 1);
    res.status(204).send();
  });
  


  app.options('/digimons/:id', (req, res) => {
    res.header('Allow', 'GET, PUT, PATCH, DELETE, OPTIONS');
    res.status(204).end();
  });

  
  app.head('/digimons/:id', (req, res) => {
    const digimon = digimons.find(d => d.id === parseInt(req.params.id));
    if (!digimon) {
      res.status(404).end();
      return;
    }

    res.status(200).end();
  });
  


app.listen(PORT, () => {
  console.log("Digimon API running at http://localhost", PORT);
});
