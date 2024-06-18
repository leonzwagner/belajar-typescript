import { Customer, CustomerType } from "../src/enum";

describe("Enum", function () {
  it("should suppport in typescript", function () {
    const customer: Customer = {
      id: 1,
      name: "Rizki",
      type: CustomerType.GOLD,
    };

    console.info(customer);
  });
});
