let expression = '';

function appendToExpression(value) {
  const result = document.getElementById('result');
  result.innerHTML;
  
  // Check if the last character in the expression is an operator
  const lastChar = expression.charAt(expression.length - 1);
  const isLastCharOperator = ['+', '-', '*', '/', '%'].includes(lastChar);

  if (expression.length === 0 && (value === '*' || value === '/' || value === '%')) {
    alert('처음은 연산자가 나올 수 없습니다.');
    return;
  }

  if (isLastCharOperator && (value === '+' || value === '-' || value === '*' || value === '/')) {
    alert('한 번에 연산자가 두 개 붙을 수 없습니다.');
    return;
  }

  expression += value;
  document.getElementById('expression').value = expression;
}

function backspace() {
  expression = expression.slice(0, -1);
  document.getElementById('expression').value = expression;
}

function calculateResult() {
  if (expression.endsWith('+') || expression.endsWith('-') || expression.endsWith('*') || expression.endsWith('/')) {
    alert('계산할 수 없습니다. 식을 완성시켜 주세요.');
    return;
  }

  try {
    const result = eval(expression);
    document.getElementById('result').value = result;
    expression = result.toString();  // Clear the expression after calculating
    
  } catch (error) {
    alert('잘못된 계산식입니다.');
  }
}