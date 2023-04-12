const calculator = (operator, ...operands) => {
    let result = operands[0];
    
    for(let i = 1; i < operands.length; i++){
      switch(operator){
        case '+':
          result += operands[i];
          break;
        case '-':
          result -= operands[i];
          break;
        case '*':
          result *= operands[i];
          break;
        case '/':
          result /= operands[i];
          break;
        case '%':
          result %= operands[i];
          break;
        default:
          return "Operator tidak dikenali";
      }
    }
    
    return result;
  };
  
  console.log(calculator('+', 2, 3)); // output: 5
  console.log(calculator('-', 10, 5)); // output: 5
  console.log(calculator('*', 3, 4)); // output: 12
  console.log(calculator('/', 20, 4)); // output: 5
  console.log(calculator('%', 7, 3)); // output: 1
  console.log(calculator('^', 2, 3)); // output: Operator tidak dikenali