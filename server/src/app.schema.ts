import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const userSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string().email(),
});

export class UserDto extends createZodDto(userSchema) {}
