const driver={}; 
function updateDriverWithKeyAndValue(driver, key, value){
 const drivercopy={...driver};
 drivercopy[key]=value;
 return drivercopy;
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key]=value;
 return driver;
}
function deleteFromDriverByKey(driver, key){
const key (driver)={}
delete key=driver;
return driver;
}
function destructivelyUpdateDriverByKey(driver, key){
const key (driver)={}
return driver;
}