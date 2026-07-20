import z from "zod";
export const RejisterSchema = z.object ({
    email: z.string(),
    password:z.string(),
    name:z.string(),
});
export type RejisterSchemaType = z.infer<typeof RejisterSchema>;