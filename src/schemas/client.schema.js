import { z } from "zod";

export const createClientSchema = z.object({
  name: z.string({
    required_error: "Client name is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email format"),
  phone: z
    .string({
      required_error: "Phone number is required",
    })
    .regex(/^[0-9]{7,15}$/, "Phone must contain 7 to 15 digits"),
  address: z.string().optional(),  // Address remains optional
});


