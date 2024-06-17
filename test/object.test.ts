describe("object", function () {
  it("should support in typescript", function () {
    const person: { id: string; name: string; hobbies?: string[] } = {
      id: "1",
      name: "Akhadi",
      hobbies: ["Ngoding", "Main game"],
    };

    console.info(person);
    person.name = "Rizki";
    person.id = "2";

    console.info(person);
  });
});
