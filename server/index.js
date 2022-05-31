const express = require('express');
const cors = require('cors');
const controller = require('./controller');

const app = express();
app.use(express.json());
app.use(cors());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);

app.get(`/api/getGoals`, controller.getGoals);
app.post(`/api/goals`, controller.createGoals);
app.put(`/api/editGoal/:newGoal`, controller.editGoals);
app.delete(`/api/deleteGoal`, controller.deleteGoals);

app.listen(4002, () => console.log('Server is running on 4002'))
