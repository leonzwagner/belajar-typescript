describe("Any", function () {
  it("should support in typescript", function () {
    const person: any = {
      id: 1,
      name: "Lalu Akhadi Rizki",
      age: 30,
    };

    person.age = 19;
    person.address = "Indonesia";

    console.info(person);
  });
});
