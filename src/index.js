module.exports = function toReadable (number) {
  const digits = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', }
  const belowTwenty = { 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', }
  const belowHundred = { 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety', }
  const remainder = number % 10
  const firstDigit = Math.floor(number / 100)
  if (number < 20) return digits[number] || belowTwenty[number] 
  if (number < 100) return belowHundred[number] || `${belowHundred[number - remainder]} ${digits[remainder]}`
  if (number < 1000 && !(number % 100)) return `${digits[firstDigit]} hundred`
  if (number < 1000 && (number % 100)) {
    if ((number % 100) < 20) return `${digits[firstDigit]} hundred ${digits[number % 100] || belowTwenty[number % 100]}`
    if ((number % 100) < 100 && !(remainder)) return `${digits[firstDigit]} hundred ${belowHundred[number % 100]}`
   if ((number % 100) < 100 && (remainder)) return `${digits[firstDigit]} hundred ${belowHundred[(number % 100) - (remainder)]} ${digits[remainder]}`
  } 
}
