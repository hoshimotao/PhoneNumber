function createPhoneNumber(numbers){
  let newStr = numbers.toString();
  
  let first = "(" + newStr[0] + newStr[2] + newStr[4]+ ")";
  
  let space = " ";
  
  let second = newStr[6] + newStr[8] + newStr[10];
  
  let dash = "-";
  
  let third = newStr[12] + newStr[14] + newStr[16] + newStr[18];
  
  
  return first + space + second + dash + third;
  
}