import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { createPinia } from 'pinia'

export const pinia = createPinia()

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
