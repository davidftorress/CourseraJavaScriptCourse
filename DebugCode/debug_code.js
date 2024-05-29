function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
                    let resultMul = multiply(num1, num2);
                    let resultAdd = add(num1,num2);
                    let resultDiv = div(num1,num2);
                    // Display the result
                    displayResult(resultMul,resultAdd,resultDiv);
                } else {
                    alert('Please enter valid numbers');
                }
}
function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    // Multiply the numbers
    return a * b;
}
function add(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    // Multiply the numbers
    return a + b;
}
function div(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    // Multiply the numbers
    return a / b;
}
function displayResult(resultMul, resultAdd, resultDiv) {
    // Display the results in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = "<p>The result of multiplication is: " + resultMul + "</p>" +  
    "<p>The result of addition is: "+ resultAdd + "</p>" + 
    "<p>The result of division is: "+ resultDiv + "</p>";
}