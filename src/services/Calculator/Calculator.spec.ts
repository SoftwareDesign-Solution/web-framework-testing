import {describe, expect, it} from "vitest";
import Calculator from "@/services/Calculator/Calculator";

describe('Calculator', () => {

   it('add', () => {

       // Arrange
       const calculator: Calculator = new Calculator();

       // Act
       const result = calculator.sum(2, 2);

       // Assert
       expect(result).toBe(4);

   });

});