// Code your solution here
function findMatching(drivers, str){
  let result = drivers.filter(driver => driver.toLowerCase() === str.toLowerCase())
  return result
}
function fuzzyMatch(drivers, str){

  let result = drivers.filter(driver => driver.slice(0, str.length) === str )
  return result
}

function matchName(drivers, name){
  let result = drivers.filter(driver => driver.name === name)
  return result;
}