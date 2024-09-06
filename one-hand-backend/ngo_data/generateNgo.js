import { faker }from "@faker-js/faker";
const states = require("./states.json");
import { Ngo } from "../models";

const generateNGOs = async (num) => {
  for (let i = 0; i < num; i++) {
    const state = faker.helpers.objectKey(states);
    const city = faker.helpers.arrayElement(states[state]);
    const ngo = {
      bloodBankName: faker.company.name() + " Blood Bank",
      state: state.toLowerCase(),
      city: city.toLowerCase(),
      address: faker.address.streetAddress(),
      pincode: faker.address.zipCode("######"),
      contactNo: faker.phone.number("0##-#######"),
      mobile: faker.phone.number("9#########"),
      website: faker.internet.url(),
      category: "Blood Bank",
      serviceTime: faker.helpers.arrayElement([
        "24 Hours",
        "9 AM - 5 PM",
        "10 AM - 6 PM",
        "8 AM - 8 PM",
      ]),
      latitude: faker.address.latitude(),
      longitude: faker.address.longitude(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    await Ngo.create(ngo);
  }
};


export const generate  = async (req, res, next) => {
  const {number} = await req.query;

    const ngos = await generateNGOs(number); // Change the number here for more entries
    res.status(200).json({message: "Sample dataset generated successfully!"});   
}