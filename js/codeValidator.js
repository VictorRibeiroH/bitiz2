const codeValidator = {
    validCodes: ['te amo', 'eu te amo', 'amor', 'paozinho', 'pãozinho'],
    
    isValidCode(code) {
        return this.validCodes.includes(code.toLowerCase().trim());
    }
};