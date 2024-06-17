describe("Union type", function () {
  it("should support in typescript", function () {
    let sample: string | number | boolean = "Rizki";
    console.info(sample);

    sample = 19;
    console.info(sample);

    sample = true;
    console.info(sample);
  });

  it("should support typeof", function () {
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process("Rizki")).toBe("RIZKI");
    expect(process(100)).toBe(102);
    expect(process(true)).toBe(false);
  });
});
