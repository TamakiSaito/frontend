//条件分
const people = 4;

const apple = 3;
const orange = 4;
const banana = 5;

// apple >= people && console.log("appleが足りる");
// orange >= people && console.log("orangeが足りる");
// banana >= people && console.log("bananaが足りる");

// apple >= people ? console.log("appleが足りる"):("appleが足りない");
// orange >= people ? console.log("orangeが足りる"):("appleが足りない");
// banana >= people ? console.log("bananaが足りる"):("appleが足りない");

//dice 
const dice = 3

switch(dice){
  case 1:
    console.log("ダイスの結果：1");
    break;
  case 2:
    console.log("ダイスの結果：2");
    break;
  case 3:
    console.log("ダイスの結果：3");
    break;
  case 4:
    console.log("ダイスの結果：4");
    break;
  case 5:
    console.log("ダイスの結果：5");
    break;
  case 6:
    console.log("ダイスの結果：6");
    break;
  default:
    console.log("ダイスの結果：?");
}

// people 三項演算子(
people === 1 ? console.log("1人") : people === 2 ? console.log("2人") : console.log("3人以上");

