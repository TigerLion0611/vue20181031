export default {
    invalidRequiredGroup (inputTermGroup) {
        return inputTermGroup
            .filter (
                inputTerm => {
                    return inputTerm.required
                        && (
                            inputTerm.value === undefined
                            || (
                                inputTerm.value !== undefined
                                && inputTerm.value.trim() === ''
                            )
                        )
                }
            )
    },

    requiredValidate (inputTermGroup) {
        return this.invalidRequiredGroup(inputTermGroup).length === 0
    },

    minLengthValidate (inputTerm) {
        if (inputTerm.minLength && inputTerm.value) {
            let zhArr = inputTerm.value.match(/[\u4e00-\u9fa5]/g);
            let actualLength = 0;
            if (zhArr === null) {
                actualLength = inputTerm.value.length
            } else {
                actualLength = inputTerm.value.length - zhArr.length + (zhArr.length * 3)
            }
            return actualLength < inputTerm.minLength
        }
    },

    minLengthValidateForGroup (inputTermGroup) {
        return inputTermGroup
            .filter (
                inputTerm => this.minLengthValidate(inputTerm)
            ).length === 0
    },

    maxLengthValidate (inputTerm) {
        if (inputTerm.maxLength && inputTerm.value) {
            let zhArr = inputTerm.value.match(/[\u4e00-\u9fa5]/g);
            let actualLength = 0;
            if (zhArr === null) {
                actualLength = inputTerm.value.length
            } else {
                actualLength = inputTerm.value.length - zhArr.length + (zhArr.length * 3)
            }
            return actualLength > inputTerm.maxLength
        }
    },

    maxLengthValidateForGroup (inputTermGroup) {
        return inputTermGroup
            .filter (
                this.maxLengthValidate
            ).length === 0
    },

    regExpReplace (inputTerm) {
        if (inputTerm.typeRegExp && inputTerm.value) {
            let arr = inputTerm.value.match(inputTerm.typeRegExp);
            let result = '';
            if (arr) {
                arr.forEach(a => result += a);
            }
            return result;
        }
    }
}