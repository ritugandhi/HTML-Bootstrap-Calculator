let display = document.getElementById('display');
        let angleMode = 'RAD'; // Default to radians
        let memory = 0;
        
        function appendToDisplay(value) {
            if (display.textContent === '0' || display.textContent === 'Error') {
                display.textContent = value;
            } else {
                display.textContent += value;
            }
        }
        
        function clearDisplay() {
            display.textContent = '0';
        }
        
        function toggleAngleMode() {
            if (angleMode === 'RAD') {
                angleMode = 'DEG';
                document.querySelector('.btn-info').textContent = 'DEG';
            } else {
                angleMode = 'RAD';
                document.querySelector('.btn-info').textContent = 'RAD';
            }
        }
        
        function toRadians(angle) {
            return angleMode === 'DEG' ? angle * (Math.PI / 180) : angle;
        }
        
        function calculate() {
            try {
                // Replace special math functions with their JavaScript equivalents
                let expression = display.textContent;
                display.textContent = eval(expression);
                
                // Format the result
                if (!isFinite(display.textContent)) {
                    display.textContent = 'Error';
                }
            } catch (error) {
                display.textContent = 'Error';
            }
        }
        
        function calculateSin() {
            try {
                let value = parseFloat(display.textContent);
                let radValue = toRadians(value);
                display.textContent = Math.sin(radValue);
            } catch (error) {
                display.textContent = 'Error';
            }
        }
        
        function calculateCos() {
            try {
                let value = parseFloat(display.textContent);
                let radValue = toRadians(value);
                display.textContent = Math.cos(radValue);
            } catch (error) {
                display.textContent = 'Error';
            }
        }
        
        function calculateTan() {
            try {
                let value = parseFloat(display.textContent);
                let radValue = toRadians(value);
                display.textContent = Math.tan(radValue);
            } catch (error) {
                display.textContent = 'Error';
            }
        }
        
        function calculateLog() {
            try {
                let value = parseFloat(display.textContent);
                if (value <= 0) {
                    display.textContent = 'Error';
                } else {
                    display.textContent = Math.log10(value);
                }
            } catch (error) {
                display.textContent = 'Error';
            }
        }
        
        function calculateLn() {
            try {
                let value = parseFloat(display.textContent);
                if (value <= 0) {
                    display.textContent = 'Error';
                } else {
                    display.textContent = Math.log(value);
                }
            } catch (error) {
                display.textContent = 'Error';
            }
        }
        
        function calculateSqrt() {
            try {
                let value = parseFloat(display.textContent);
                if (value < 0) {
                    display.textContent = 'Error';
                } else {
                    display.textContent = Math.sqrt(value);
                }
            } catch (error) {
                display.textContent = 'Error';
            }
        }
        
        function calculatePower() {
            appendToDisplay('^');
        }
        
        function calculateFactorial() {
            try {
                let n = parseInt(display.textContent);
                if (n < 0 || !Number.isInteger(n)) {
                    display.textContent = 'Error';
                    return;
                }
                
                let result = 1;
                for (let i = 2; i <= n; i++) {
                    result *= i;
                }
                
                display.textContent = result;
            } catch (error) {
                display.textContent = 'Error';
            }
        }
        
        function calculatePi() {
            display.textContent = Math.PI;
        }
        
        function calculateE() {
            display.textContent = Math.E;
        }
        
        function memoryStore() {
            try {
                memory = parseFloat(display.textContent);
            } catch (error) {
                // Silently fail
            }
        }
        
        function memoryRecall() {
            display.textContent = memory;
        }