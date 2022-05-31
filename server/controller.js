let goal = {};

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Whatever you do is what shall be", "You will fall in love next Rensday, too bad Rensday doesn't exist", "You will sing songs of gemstones", "You will soon be recieving an important email", "Error 404, fortune not found"];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },
        
    getGoals: (req, res) => {
        res.status(200).send(goal) 
    },

    createGoals: (req, res) => {
        console.log(req.body);
        goal = req.body;
        res.sendStatus(200);
    },

    deleteGoals: (req, res) => {
        goal = {};
        res.sendStatus(200);
    },

    editGoals: (req, res) => {
        const { newGoal } = req.params;
        res.sendStatus(200); 
    }
}