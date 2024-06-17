import { Category } from "../src/type-alias";

describe("Type alias", function () {
  it("should support in typescript", function () {
    const category = {
      id: 1,
      name: "Handphone",
    };

    const product = {
      id: 1,
      name: "Samsung Galaxy J2 Prime",
      category: category,
    };

    console.info(category);
    console.info(product);
  });
});
