import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string({
    required_error: "Product name is required",
  }),
  price: z
    .number({
      required_error: "Price is required",
    })
    .nonnegative("Price must be a positive number"),
  stock: z
    .number({
      required_error: "Stock quantity is required",
    })
    .int("Stock must be an integer")
    .nonnegative("Stock cannot be negative"),
  description: z
    .string()
    .optional(),
});
