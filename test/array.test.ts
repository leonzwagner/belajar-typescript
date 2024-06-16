describe("Array", function () {
  it("same with javascript", function () {
    const names: string[] = ["Rizki", "Akhadi", "Lalu"];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);
  });

  it("should be readonly", function () {
    const hobbies: ReadonlyArray<string> = ["Membaca", "Musik"];

    console.info(hobbies[0]);
  });

  it("should be readonly tuples", function () {
    const person: readonly [string, string, number] = ["Rizki", "Male", 19];

    console.info(person);
  });
});
