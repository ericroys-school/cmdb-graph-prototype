import { z } from 'zod';

export const newCompany = z.object({
  name: z
    .string()
    .min(3, 'Please enter at least three chars')
    .max(50, 'Names max out at 50'),
  description: z
    .string()
    .max(255, 'Please keep your descriptions brief (< 255 Chars)'),
  type: z.string().optional(),
});
