//with conditionals

let allocatedResources = [];
let availableResources = [];

let result;
if (availableResources.length === 0) {
    result = createResource();
    allocatedResources.push(result);
} else {
    result = availableResources.pop();
    allocatedResources.push(result);

}

function createResource() {
    return "resource created!";
}

module.exports = { allocatedResources, availableResources }