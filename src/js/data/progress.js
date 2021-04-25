import { Progress } from '../entities/progress'
import skillArray from './skills'
import studentArray from './students'
import levelArray from './level'

const progress1 = new Progress(studentArray[0], skillArray[4], levelArray[2])
const progress2 = new Progress(studentArray[1], skillArray[5], levelArray[1])
const progress3 = new Progress(studentArray[2], skillArray[5], levelArray[1])
const progress4 = new Progress(studentArray[2], skillArray[4], levelArray[0])
const progress5 = new Progress(studentArray[2], skillArray[0], levelArray[0])
const progress6 = new Progress(studentArray[1], skillArray[1], levelArray[0])
const progress7 = new Progress(studentArray[0], skillArray[3], levelArray[0])
const progress8 = new Progress(studentArray[0], skillArray[11], levelArray[0])
const progress9 = new Progress(studentArray[1], skillArray[9], levelArray[0])
const progress10 = new Progress(studentArray[2], skillArray[6], levelArray[0])

const progressArray = [progress1, progress2, progress3, progress4, progress5, progress6, progress7, progress8,progress9, progress10]

export default progressArray