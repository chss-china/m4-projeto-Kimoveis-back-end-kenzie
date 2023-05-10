import { z } from "zod";
import { schemaAdress } from "./adress.schemas";
const createRealEstateSchema = z.object({
  id: z.number(),
  value: z.number().or(z.string()).default(0),
  size: z.number().positive(),
  sold: z.boolean().default(false).optional(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  categoryId: z.number(),
  address: z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(7).optional().nullable(),
    city: z.string().max(20),
    state: z.string().max(2),
  }),
});
const createRealEstateSchemaResponse = z.object({
  id: z.number(),
  value: z.number().or(z.string()).default(0),
  size: z.number().positive(),
  sold: z.boolean().default(false).nullable(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  category: z.object({
    id: z.number(),
    name: z.string().max(45),
  }),
  address: z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(7).nullable(),
    city: z.string().max(20),
    state: z.string().max(2),
  }),
});
const createRealEstateSchemaCategories = z.object({
  id: z.number(),
  name: z.string().max(45),
  realEstate: z.object({
    value: z.number().or(z.string()).default(0),
    size: z.number(),
    sold: z.boolean().default(false).nullish(),
    createdAt: z.date().or(z.string()),
    updatedAt: z.date().or(z.string()),
  }),
});
const createRealEstateSchemaRequest = createRealEstateSchema.omit({
  id: true,
  sold: true,
  createdAt: true,
  updatedAt: true,
});
/*
realEstateComplete: {
    id: expect.any(Number),
    value: 100000.99,
    size: 400,
    sold: false,
    address: {
      id: expect.any(Number),
      street: 'street',
      zipCode: 'zipCode',
      number: 'number',
      city: 'city',
      state: 's0',
    },
    categoryToCreate: {
      name: 'category',
    },
    createdAt: expect.any(String),
    updatedAt: expect.any(String),
  },
  realEstateAddressWithoutNumber: {
    id: expect.any(Number),
    value: 100000.99,
    size: 400,
    address: {
      street: 'street1',
      zipCode: 'zipCode1',
      number: null,
      city: 'city1',
      state: 's2',
    },
    categoryToCreate: {
      name: 'category1',
    },
    createdAt: expect.any(String),
    updatedAt: expect.any(String),
  },
  realEstateUnique: {
    value: 100000.99,
    size: 400,
    address: {
      street: 'street2',
      zipCode: 'zipCode2',
      number: 'number2',
      city: 'city2',
      state: 's2',
    },
    categoryToCreate: {
      name: 'category2',
    },
  },
  realEstateInvalidBody: {
    value: '100000.99',
    size: -8,
    address: {
      street: [],
      zipCode: 'mais que 8 caracteres',
      city: {},
      state: 'mais que 8 caracteres',
    },
    categoryToCreate: {
      name: 'category3',
    },
  },
  realEstateInvalidBody2: {
    value: 100000.99,
    categoryToCreate: {
      name: 'category4',
    },
  },
};
bject {
        "message": Object {
          "address": Array [
    +       "Required",
            "Expected string, received array",
            "String must contain at most 8 character(s)",
    +       "Required",
            "Expected string, received object",
            "String must contain at most 2 character(s)",
          ],
          "size": Array [
            "Number must be greater than 0",
 */
export {
  createRealEstateSchema,
  createRealEstateSchemaRequest,
  createRealEstateSchemaCategories,
  createRealEstateSchemaResponse,
};
