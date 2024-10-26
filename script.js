// Function to assess creditworthiness
function assessCreditworthiness() {
    const income = parseFloat(document.getElementById('income').value);
    const employment = document.getElementById('employment').value;
    const expenses = parseFloat(document.getElementById('monthly_expenses').value);
    const loans = document.getElementById('existing_loans').value === "yes";
    const creditScore = parseFloat(document.getElementById('credit_score').value);
    const loanAmount = parseFloat(document.getElementById('loan_amount').value);

    let message = '';
    let affordableLoan = income * 0.3 - expenses;

    if (employment === 'unemployed') {
        message = "Based on your current employment status, it might be difficult to secure a loan.";
    } else if (loans) {
        message = "Having existing loans might affect your ability to get a new loan.";
    } else if (creditScore && creditScore < 600) {
        message = "Your credit score is lower than recommended. Consider improving it for better loan opportunities.";
    } else if (loanAmount > affordableLoan) {
        message = "The loan amount you're requesting seems too high based on your income and expenses.";
    } else {
        message = "You appear to be in a good financial position to secure a loan.";
    }

    document.getElementById('result').innerText = message;
}

// Add theme toggle functionality
window.onload = function() {
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Toggle Dark Mode';
    toggleBtn.id = 'themeToggleButton';
    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        toggleBtn.textContent = document.body.classList.contains('dark-theme') ? 'Toggle Light Mode' : 'Toggle Dark Mode';
    });
};
// Add theme toggle functionality
window.onload = function() {
    // Create the toggle switch
    const toggleSwitch = document.createElement('div');
    toggleSwitch.id = 'themeToggleSwitch';
    toggleSwitch.innerHTML = `
        <div class="switch"></div>
        <span>Dark Mode</span>
    `;
    document.body.appendChild(toggleSwitch);

    // Add click event for toggling the theme
    toggleSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        toggleSwitch.classList.toggle('dark');
        const isDarkMode = document.body.classList.contains('dark-theme');
        toggleSwitch.querySelector('span').textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    });
};
