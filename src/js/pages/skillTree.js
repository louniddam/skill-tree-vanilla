import moduleArray from '../data/modules'
import skillArray from '../data/skills'
import progressArray from '../data/progress'

const skillTree = document.createElement('section')
skillTree.id = 'skill-tree'

const addModuleDiv = () => {
    //Créer mes div par Module
    moduleArray.forEach((element, index) => {
        //créer div module
        const newModule = document.createElement('div')
        newModule.id = `module-${index + 1}`
        //créer titre module
        const newTitle = document.createElement('h1')
        newTitle.innerHTML = `${element.name}`
        newTitle.id = `title-module-${index + 1}`
        
        //Ajouter titre à div module
        newModule.appendChild(newTitle)
        //Ajouter div module à main
        skillTree.appendChild(newModule)
    });

    //Créer mes div skill par module
    setTimeout(() => {
        skillArray.forEach((element, index) => {
            const newSkill = document.createElement('div')
            newSkill.id = `skill-${index+1}`
            const skillTitle = document.createElement('h2')
            skillTitle.innerHTML = `${element.name}`
            newSkill.appendChild(skillTitle)
            const module = document.getElementById(`module-${element.module.id}`)
            module.appendChild(newSkill)
    });
    }, 100);

    setTimeout(() => {
        progressArray.forEach((element) => {
            const newProgress = document.createElement('P')
            newProgress.innerHTML = `${element.student.name} - niveau ${element.level.level} - ${element.level.name}`
            const skill = document.getElementById(`skill-${element.skill.id}`)
            skill.appendChild(newProgress)
        })
    }, 101);
}

addModuleDiv()

export default skillTree

{/*
<div id='module-1'>
    <h1>Titre-module</h1>
    <div id='skill-1'>
        <h2>Titre-skill</h2>
        <u>
            <li>Progress-Lou</li>
            <li>Progress-Mae</li>
        </u>
    </div>
</div> 

*/}