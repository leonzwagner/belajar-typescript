import { Employee } from "../src/employee";
import { Person } from "../src/person";

describe("Interface", function () {
  it("should support extends interface", function () {
    const employee: Employee = {
      id: "1",
      name: "Rizki",
      division: "IT",
    };

    console.info(employee);
  });

  it("should support function in interface", function (): void {
    const person: Person = {
      name: "Rizki",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("Akhadi"));
  });
});
