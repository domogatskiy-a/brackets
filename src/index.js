module.exports = function check(str, bracketsConfig) {
  //console.log(str);
  const arrStr = [];
  let index = 0;
  str.split('').forEach((element) => {
    if(bracketsConfig.reduce((flag, a) => {
      //console.log(element, a[0], element == a[0]);
      if(element == a[0]){
        if (a[0] == a[1] && index > 0 && element == arrStr[index - 1]){
          return 0;
        } else {
          return flag + 1;
        }
      } else {
       return flag;
      }
    }, 0)){
    arrStr.push(element)
    //console.log(arrStr);
    } else {
      let brac = findPair(element, bracketsConfig);
      //console.log('(brac && index)', (brac > 0 && index > 0), brac ,index)
      if(brac > 0 && index > 0){
        //console.log(element, bracketsConfig[brac-1][0], arrStr[index-1])
        if(arrStr[index-1] == bracketsConfig[brac-1][0]){
          arrStr.pop();
          //console.log(arrStr);
          index += -2;
        } else {
          return false;
        }
      };
    } 
    index ++;
  });
  return arrStr.length <= 0;
}


const findPair = (braskets, config) => {
  return config.reduce((flag, a, index) => {
    //console.log('--',flag, a, index, braskets, a[1]);
    if(braskets == a[1]){
      return index + 1;
    } else {
      return flag;
    }
  }, 0)
}


/*const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
//console.log(module.exports('((()))()', [['(', ')']]));
console.log(module.exports('||', config4));
*/