const functions = {
    getAge: (name, age) => {
        return `${name} is ${age} years old`
    },
    add: (num1, num2) => num1 + num2,
    isNull: () => null, 
    isUndefined: () => undefined,
    compileAndroidCode: () => {
        throw new Error('you are using the wrong JDK!')
    }
}

module.exports = functions;