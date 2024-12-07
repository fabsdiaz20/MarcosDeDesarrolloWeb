import { z } from "zod";

export const createOrderSchema = z.object({
  clientId: z.string({
    required_error: "Client ID is required",
  }),
  productId: z.string({
    required_error: "Product ID is required",
  }),
  quantity: z
    .number({
      required_error: "Quantity is required",
    })
    .int("Quantity must be an integer")
    .positive("Quantity must be greater than zero"),
  orderDate: z
    .string()
    .datetime({
      required_error: "Order date must be a valid datetime",
    })
    .optional(),
  status: z.enum(["Pending", "Processing", "Completed", "Cancelled"]).optional(),
});
