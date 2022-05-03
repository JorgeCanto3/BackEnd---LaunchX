const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]
//For Each PRINT - Name
explorers.forEach(NAM => console.log(NAM.name))

//For Each PRINT - Stack
explorers.forEach(NAM => console.log(NAM.stack))

//Map - Lista - Stack
const StackList = explorers.map((Explorer) => Explorer.stack)
console.log(StackList)

//Filter - Stack
const Stack = explorers.filter((ExplorerJ) => ExplorerJ.stack.includes('js'))
console.log(Stack)

//Find - CDMX
const Mexico = explorers.find((CD) => CD.city == "CDMX")
console.log(Mexico)

//Reduce - Exercises 
const ExercisesRL = explorers.map((Explorer) => Explorer.exercises_completed)
console.log(ExercisesRL)
const ExercisesR = ExercisesRL.reduce((ER, ER1) => ER + ER1)
console.log(ExercisesR)

//Some
const Validación = explorers.some((EXf) => EXf.exercisesFinished = true)
console.log(Validación)

//Every
const EvVal = explorers.every((name) => name.isFinished = true)
console.log(EvVal)