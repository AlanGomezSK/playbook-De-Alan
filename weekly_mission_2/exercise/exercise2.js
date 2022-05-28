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
explorers.forEach(names=> console.log(names.name));
explorers.forEach(st=> console.log(st.stack));
const explorers2 = explorers.map((elemts)=>elemts.stack);
console.log(explorers2);
const filterstack = explorers.filter((filter)=>filter.stack.includes("js"))
console.log(filterstack);
const findexplorer = explorers.find((expcdmx)=>expcdmx.city=="CDMX");
console.log(findexplorer);
const trueexfin = explorers.some((exp)=>exp.missions.onboarding==false);
console.log(trueexfin);