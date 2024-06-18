import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";
import { Seller } from "../src/seller";

describe("Interface", function () {
  it("should support extends interface", function () {
    const employee: Employee = {
      id: "1",
      name: "Rizki",
      division: "IT",
    };

    console.info(employee);

    const manager: Manager = {
      id: "2",
      name: "Akhadi",
      division: "IT",
      numberOfEmployees: 15,
    };

    console.info(manager);
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

  it("should support extends interface", function () {
    const seller: Seller = {
      id: 1,
      name: "Toko Rizk",
      address: "Jl. Gaharu",
      nib: "11223344",
      npwp: "11223344",
    };

    console.info(seller);
  });

  it("should support func interface", function () {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 4)).toBe(6);
  });

  it("should support indexable interface", function () {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Akhadi", "Lalu", "Rizki"];
    console.info(names);
  });

  it("should support indexable interface for non number index", function () {
    interface StringDict {
      [key: string]: string;
    }

    const dictionary: StringDict = {
      name: "Akhadi",
      address: "Indonesia",
    };

    expect(dictionary["name"]).toBe("Akhadi");
    expect(dictionary["address"]).toBe("Indonesia");
  });
});
