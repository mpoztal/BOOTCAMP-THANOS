import { nanoid } from "nanoid"

 

class Activity {
    constructor(task, intensity, frecuncy, completed) {
        this.id = nanoid(5)
        this.task = task
        this.intensity = intensity
        this.frecuncy = frecuncy
        this.completed = completed
    }

}


export default Activity