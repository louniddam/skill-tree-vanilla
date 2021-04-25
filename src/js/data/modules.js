import { Module } from '../entities/module'

const module1 = new Module(1, 'Concevoir et développer des interfaces utilisateurs')
const module2 = new Module(2, 'Concevoir et développer la persistance des données')
const module3 = new Module(3, 'Concevoir et développer une application multicouche')

const moduleArray = [module1, module2, module3]

export default moduleArray