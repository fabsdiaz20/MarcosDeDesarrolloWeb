import {z} from 'zod'

export const createTaskSchema= z.object({
    title: z.string({
        required_error:"Title is required"
    }),
    descripion: z
    .string({
        required_error:"Descrption must be a string"
    }),

    date: z.string().datetime().optional(),
});