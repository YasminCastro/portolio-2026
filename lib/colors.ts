/**
 * Paleta de cores do portfolio - Premium Gradient (Dark + Suave)
 * 
 * Base:
 * - Fundo: #0D1117
 * - Cards: #161B22
 * 
 * Acentos:
 * - Roxo pastel: #A78BFA
 * - Azul serenity: #60A5FA
 * - Laranja rosado: #FCA5A5
 * - Verde água: #6EE7B7
 */

export const colors = {
  // Base
  background: '#0D1117',
  card: '#161B22',
  
  // Acentos
  accent: {
    purple: '#A78BFA',
    blue: '#60A5FA',
    orange: '#FCA5A5',
    green: '#6EE7B7',
  },
} as const;

export type ColorName = keyof typeof colors.accent;

