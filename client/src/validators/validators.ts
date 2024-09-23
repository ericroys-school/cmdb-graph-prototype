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

export const newOrg = z.object({
  name: z
    .string()
    .min(3, 'Please enter at least three chars')
    .max(50, 'Names max out at 50'),
  description: z
    .string()
    .max(255, 'Please keep your descriptions brief (< 255 Chars)'),
  companyId: z.string({ required_error: 'Company instanceId is required' }),
});

export const newDept = z.object({
  name: z
    .string()
    .min(3, 'Please enter at least three chars')
    .max(50, 'Names max out at 50'),
  description: z
    .string()
    .max(255, 'Please keep your descriptions brief (< 255 Chars)'),
  organizationId: z.string({
    required_error: 'Organization instanceId is required',
  }),
});
