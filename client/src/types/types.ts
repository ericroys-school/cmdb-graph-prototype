import { z } from 'zod';
import { newCompany } from '../validators/validators.js';

//re-export new company
export type NewCompany = z.infer<typeof newCompany>;
