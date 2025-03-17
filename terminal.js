class Terminal {
    constructor() {
        this.terminal = document.querySelector('.terminal');
        this.userInput = document.getElementById('user-input');
        this.commandHistory = document.getElementById('command-history');
        this.currentInput = '';
        this.setupEventListeners();
        
        // Auto-focus terminal when page loads
        this.terminal.classList.add('focused');
    }

    setupEventListeners() {
        // Handle typing
        document.addEventListener('keydown', (e) => {
            if (!this.terminal.classList.contains('focused')) return;

            // Prevent default behavior for terminal keys
            if (e.key !== 'F5' && e.key !== 'F12') {
                e.preventDefault();
            }

            this.handleKeyPress(e);
        });

        // Handle focus
        this.terminal.addEventListener('click', () => {
            this.terminal.classList.add('focused');
        });

        document.addEventListener('click', (e) => {
            if (!this.terminal.contains(e.target)) {
                this.terminal.classList.remove('focused');
            }
        });
    }

    handleKeyPress(e) {
        switch (e.key) {
            case 'Enter':
                this.executeCommand();
                break;
            case 'Backspace':
                this.currentInput = this.currentInput.slice(0, -1);
                break;
            default:
                // Only add printable characters
                if (e.key.length === 1) {
                    this.currentInput += e.key;
                }
        }
        this.updateDisplay();
    }

    executeCommand() {
        if (!this.currentInput) return;

        // Create new history entry
        const historyEntry = document.createElement('div');
        historyEntry.className = 'line';
        historyEntry.innerHTML = `
            <span class="prompt">$</span>
            <span class="command">${this.currentInput}</span>
        `;
        this.commandHistory.appendChild(historyEntry);

        // Add command response (you can customize this)
        const responseEntry = document.createElement('div');
        responseEntry.className = 'line';
        responseEntry.innerHTML = `<span class="response">Command not found: ${this.currentInput}</span>`;
        this.commandHistory.appendChild(responseEntry);

        // Clear current input
        this.currentInput = '';
        this.terminal.scrollTop = this.terminal.scrollHeight;
    }

    updateDisplay() {
        this.userInput.textContent = this.currentInput;
    }
}

// Initialize terminal when page loads
document.addEventListener('DOMContentLoaded', () => {
    const terminal = new Terminal();
    // Ensure terminal stays focused even if user clicks elsewhere initially
    setTimeout(() => {
        terminal.terminal.classList.add('focused');
    }, 100);
});
