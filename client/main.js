const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")

const getCompliment = () => {
    axios.get("http://localhost:4002/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4002/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)


const form = document.querySelector('form');

const getGoals = () => { 
    axios.get('http://localhost:4002/api/getGoals/')
    .then(({ data }) => {
        const container = document.getElementById('goal-container');
        const goal = document.createElement('ul');
        Object.keys(data).forEach((attr) => {
        const goalAttr = document.createElement('li');
        goalAttr.innerHTML = `${attr}: ${data[attr]}`
        goal.appendChild(goalAttr);
    });
    container.appendChild(goal);   
    })
    .catch((err) => {
        console.log(err)
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll('input');

    inputs.forEach((input) => console.log(input.value));
    const [ goalOne, goalTwo ] = inputs;
    const body = { goalOne: goalOne.value, goalTwo: goalTwo.value };
     
    axios.post('http://localhost:4002/api/goals', body)
    .then(() => {
        console.log('goals have been updated');
        getGoals();
    })
    .catch((err) => console.log(err))
});

const getGoalsButton = document.getElementById('get-goals').addEventListener('click', getGoals);
const editGoalButton = document.getElementById('edit-goal-button')

editGoalButton.addEventListener('click', () => {
    const newGoal = document.getElementById('edit-goal-input').value;
    axios.put(`http://localhost:4002/api/editGoal/${newGoal}`)
    .then(() => alert('goal has been edited'))
    .catch((e) => console.log(e))
});

const deleteGoalButton = document.getElementById('delete-goal');

deleteGoalButton.addEventListener('click', () => {
    axios.delete(`http://localhost:4002/api/deleteGoal`)
    .then(() => alert('goal has been deleted'))
    .catch((e) => console.log(e));
});