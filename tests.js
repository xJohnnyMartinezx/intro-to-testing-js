// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit test for the sayHello function

describe("sayHello", function() {
    it("should be a defined function", function() {
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called", function () {
        expect(typeof sayHello()).toBe("string");
        });
    it('should return the string "Hello, Jane!" when input is Jane', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!")
    });
    it ('should return the string "Hello, Alex!" when input is Alex', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    })
    it ('should return the string "Hello, Pat!" when input is Pat', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    })
    it ('should return the string "Hello, World!" when input is undefined', function () {
        expect(sayHello()).toBe("Hello, World!")
    })
    it ('should return the string "Hello, World!" when input is true', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    })
    it ('should return the string "Hello, World!" when input is false', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    })
    it ('should return the string "Hello, World!" when input is null', function () {
        expect(sayHello(null)).toBe("Hello, World!")
    })
    it ('should return the string "Hello, World!" when input is an empty string', function () {
        expect(sayHello("")).toBe("Hello, World!")
    })

})

// describe("isFive", function (){
//     it('should be a defined function named "isFive".', function () {
//         expect(typeof isFive).toBe("function");
//     });
//     it ('should always return a Boolean when called', function () {
//         expect(typeof isFive()).toBe("boolean")
//     })
//     it ("should return true when the number 5 is passed", function () {
//         expect(isFive(5)).toBe(true)
//     })
//     it ('should return true when the string "5" is passed', function () {
//         expect(isFive("5")).toBe(true)
//     })
//     it ('should return true when the string "FIVE" is passed', function () {
//         expect(typeof isFive("FIVE")).toBe(true)
//     })
//

// })

describe('isEven', function () {
    it('should be a defined function named "isEven".', function () {
        expect(typeof isEven).toBe("function")
    });
    it('should retun a boolean', function () {
        expect(typeof isEven()).toBe("boolean")
    });
    it('should return true when the number 2 is passed', function () {
        expect(isEven(2)).toBe(true)
    });

});

