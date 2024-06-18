describe("Function", function () {
  it("should support in typescript", function () {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello("Rizki")).toBe("Hello Rizki");

    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }

    printHello("Rizki");
  });

  it("should support in typescript", function () {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }

    expect(sayHello()).toBe("Hello Guest");
  });

  it("should support in rest parameter", function () {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should support optional params", function () {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      } else {
        return `Hello ${firstName}`;
      }
    }

    expect(sayHello("Akhadi")).toBe("Hello Akhadi");
    expect(sayHello("Akhadi", "Rizki")).toBe("Hello Akhadi Rizki");
  });

  it("should support func overloading", function () {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 10;
      }
    }

    expect(callMe(10)).toBe(100);
    expect(callMe("Rizki")).toBe("RIZKI");
  });

  it("should support params func", function () {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello("Rizki", toUpper)).toBe("Hello RIZKI");

    //anonymous func
    expect(
      sayHello("Akhadi", function (name: string): string {
        return name.toUpperCase();
      }),
    ).toBe("Hello AKHADI");

    //arrow func
    expect(sayHello("Lalu", (name: string): string => name.toUpperCase())).toBe(
      "Hello LALU",
    );
  });
});
