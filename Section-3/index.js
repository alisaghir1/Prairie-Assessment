function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) 
  return false;
}

const user_input = parseInt(prompt('Enter a number, please:'));

const primeNumbers = [];
for (let i = 2; i <= user_input; i++) {
  if (isPrime(i)) {
    primeNumbers.push(i);
  }
}

console.log(primeNumbers.join(' '));
