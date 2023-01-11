module.exports = function toReadable(number) {
  let upToTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let upToTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let upToHundred = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundred = 'hundred';

  if (number < 10) {
    return upToTen[number];
  } else if (number >= 10 && number < 20) {
    return upToTwenty[number % 10];
  } else if (number >= 20 && number < 100) {
    if (number % 10 == 0) {
      return upToHundred[Math.floor(number / 10)];
    } else {
      return upToHundred[Math.floor(number / 10)] + " " + upToTen[number % 10];
    }
  } else if (number > 99 && number < 1000) {
    if (number % 100 == 0) {
      return upToTen[Math.floor(number / 100)] + " " + hundred;
    } else if (number % 10 == 0 && ((number % 100) / 10) == 1) {
      return upToTen[Math.floor(number / 100)] + " " + hundred + " ten";
    } else if (number % 10 == 0) {
      return upToTen[Math.floor(number / 100)] + " " + hundred + " " + upToHundred[Math.floor((number % 100) / 10)];
    } else if ((Math.floor(number / 10)) % 10 == 0) {
      return upToTen[Math.floor(number / 100)] + " " + hundred + " " + upToTen[number % 10];
    } else if (number % 10 != 0 && number % 100 < 20) {
      return upToTen[Math.floor(number / 100)] + " " + hundred + " " + upToTwenty[number % 10];
    } else if (number % 10 != 0) {
      return upToTen[Math.floor(number / 100)] + " " + hundred + " " + upToHundred[Math.floor((number % 100) / 10)] + " " + upToTen[(number % 100) % 10];
    }
  }
}
