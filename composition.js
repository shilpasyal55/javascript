const canTalk = (state) => ({
    talk: () => {
        console.log(`${state.name} is talking`);
    }
})
const canEat = (state) => ({
    eat: () => {
        console.log(`${state.name} is eating something`);
    }
})

const canConnect = (state) => ({
    connect: () => {
        console.log(`${state.name} is connecting to wifi`);
    }
})

const canDrive = (state) => ({
    drive: () => {
        console.log(`${state.name} is driving a car`);
    }
})

const Human = (name) => {
    let state = {
        name
    }
    return Object.assign(state,canTalk(state),canEat(state),canDrive(state))
}

const Robot = (name) => {
    let state = {
        name
    }
    return Object.assign(state,canTalk(state),canConnect(state),canDrive(state))
}

const xyz = Human("xyz");
xyz.eat();
xyz.drive();

const robo = Robot("robo");
robo.connect();
robo.talk();

