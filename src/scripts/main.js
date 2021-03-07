console.log("Welcome to the main module")

 import { createPlan } from "./plan.js"

createPlan(types);

console.log("plan", yearlyPlan);

import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed);
