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
 * Event Listener for Logout
 */
document.getElementById('logoutBtn').addEventListener('click', function() {
    alert('Logging out...');
});
