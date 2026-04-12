/**
 * Configuration Constants
 */
const CONFIG = {
    EXCHANGE_RATE: 14.1937, // Derived from screenshot: 700 * 14.1937 ≈ 9935.59
    WORKING_HOURS: 160,
    OVERTIME_MULTIPLIER: 2,
    TAX_RATES: {
        'Admin': 0.22,    // Admin tax rate (matches screenshot)
        'Employee': 0.15  // Standard employee tax rate
    },
    CURRENCY_SYMBOLS: {
        'Saudi Arabia Rial': 'SR',
        'USD': '$',
        'EUR': '€'
    }
};

/**
 * Event Listener for adding an employee
 */
document.getElementById('addEmployeeBtn').addEventListener('click', function() {
    const name = document.getElementById('employeeName').value;
    const basicInput = parseFloat(document.getElementById('basicSalary').value) || 0;
    const bonusInput = parseFloat(document.getElementById('bonus').value) || 0;
    const penaltyInput = parseFloat(document.getElementById('penalty').value) || 0;
    const extraHours = parseFloat(document.getElementById('extraHours').value) || 0;
    const role = document.getElementById('role').value;
    const currency = document.getElementById('currency').value;

    // Apply currency multiplier
    const basic = basicInput * CONFIG.EXCHANGE_RATE;
    const bonus = bonusInput * CONFIG.EXCHANGE_RATE;
    const penalty = penaltyInput * CONFIG.EXCHANGE_RATE;

    // Calculations
    const hourValue = (basicInput / CONFIG.WORKING_HOURS) * CONFIG.EXCHANGE_RATE;
    const extraTotal = extraHours * hourValue * CONFIG.OVERTIME_MULTIPLIER;
    const gross = basic + bonus - penalty + extraTotal;

    const taxRate = CONFIG.TAX_RATES[role] || 0.22;
    const taxValue = gross * taxRate;
    const netSalary = gross - taxValue;

    const currencySymbol = CONFIG.CURRENCY_SYMBOLS[currency] || '';

    // Update table
    addEmployeeToTable({
        name,
        basic,
        bonus,
        penalty,
        extraHours,
        hourValue,
        extraTotal,
        gross,
        taxRate: (taxRate * 100).toFixed(0) + '%',
        taxValue,
        netSalary,
        currencySymbol
    });
});

/**
 * Safely adds an employee row to the table to prevent XSS
 */
function addEmployeeToTable(data) {
    const tableBody = document.querySelector('#salaryTable tbody');
    const row = document.createElement('tr');

    const cells = [
        data.name,
        data.basic.toFixed(2),
        data.bonus.toFixed(2),
        data.penalty.toFixed(2),
        data.extraHours,
        data.hourValue.toFixed(3),
        data.extraTotal.toFixed(2),
        data.gross.toFixed(2),
        data.taxRate,
        data.taxValue.toFixed(2),
        `${data.currencySymbol} ${data.netSalary.toFixed(2)}`.trim()
    ];

    cells.forEach(cellText => {
        const td = document.createElement('td');
        td.textContent = cellText;
        row.appendChild(td);
    });

    tableBody.appendChild(row);
}

/**
 * Event Listener for clearing the table
 */
document.getElementById('clearEmployeesBtn').addEventListener('click', function() {
    document.querySelector('#salaryTable tbody').innerHTML = '';
});

/**
 * Event Listener for Login
 */
document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginSection').classList.add('hidden');
    document.getElementById('mainApp').classList.remove('hidden');
});

/**
 * Event Listener for Logout
 */
document.getElementById('logoutBtn').addEventListener('click', function() {
    document.getElementById('loginSection').classList.remove('hidden');
    document.getElementById('mainApp').classList.add('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});

/**
 * Counter Logic
 */
let counterState = 0;

function updateCounterUI() {
    const counterValue = document.getElementById('counterValue');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');

    counterValue.textContent = counterState;
    decrementBtn.disabled = counterState <= 0;
    incrementBtn.disabled = counterState >= 10;
}

function setCounter(updateFn) {
    if (typeof updateFn === 'function') {
        counterState = updateFn(counterState);
    } else {
        counterState = updateFn;
    }
    updateCounterUI();
}

document.getElementById('incrementBtn').addEventListener('click', () => {
    setCounter(prev => prev + 1);
});

document.getElementById('decrementBtn').addEventListener('click', () => {
    setCounter(prev => prev - 1);
});

document.getElementById('resetBtn').addEventListener('click', () => {
    setCounter(0);
});

// Initialize counter UI
updateCounterUI();

/**
 * Controlled Form Logic
 */
let formState = {
    name: '',
    email: '',
    message: ''
};

function updateFormUI() {
    const nameInput = document.getElementById('formName');
    const emailInput = document.getElementById('formEmail');
    const messageInput = document.getElementById('formMessage');
    const charCount = document.getElementById('charCount');
    const stateOutput = document.getElementById('stateOutput');

    // Update inputs to match state
    nameInput.value = formState.name;
    emailInput.value = formState.email;
    messageInput.value = formState.message;

    // Update character count
    const length = formState.message.length;
    charCount.textContent = length;
    if (length > 140) {
        charCount.parentElement.classList.add('limit-exceeded');
    } else {
        charCount.parentElement.classList.remove('limit-exceeded');
    }

    // Update state preview
    stateOutput.textContent = JSON.stringify(formState, null, 2);
}

function setFormState(updateFn) {
    if (typeof updateFn === 'function') {
        formState = updateFn(formState);
    } else {
        formState = { ...formState, ...updateFn };
    }
    updateFormUI();
}

document.getElementById('formName').addEventListener('input', (e) => {
    setFormState({ name: e.target.value });
});

document.getElementById('formEmail').addEventListener('input', (e) => {
    setFormState({ email: e.target.value });
});

document.getElementById('formMessage').addEventListener('input', (e) => {
    setFormState({ message: e.target.value });
});

// Initialize form UI
updateFormUI();
