export function generatePassword(length: number = 16): string {
  const lowercase = "abcdefghijklmnopqrstuvwxyz"
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "0123456789"
  const symbols = "!@#$%^&*"
  const allChars = lowercase + uppercase + numbers + symbols

  let password = ""
  // Ensure at least one of each type
  password += lowercase[Math.floor(Math.random() * lowercase.length)]
  password += uppercase[Math.floor(Math.random() * uppercase.length)]
  password += numbers[Math.floor(Math.random() * numbers.length)]
  password += symbols[Math.floor(Math.random() * symbols.length)]

  // Fill the rest randomly
  for (let i = password.length; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)]
  }

  // Shuffle the password
  return password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("")
}

export interface PasswordStrength {
  score: number
  label: string
  color: string
  checks: { label: string; passed: boolean }[]
}

export function getPasswordStrength(password: string): PasswordStrength {
  const checks = [
    { label: "8+ characters", passed: password.length >= 8 },
    { label: "Lowercase letter", passed: /[a-z]/.test(password) },
    { label: "Uppercase letter", passed: /[A-Z]/.test(password) },
    { label: "Number", passed: /[0-9]/.test(password) },
    { label: "Special character", passed: /[!@#$%^&*(),.?":{}|<>]/.test(password) },
  ]

  const score = checks.filter((c) => c.passed).length

  if (score <= 2) return { score, label: "Weak", color: "var(--critical)", checks }
  if (score <= 3) return { score, label: "Fair", color: "var(--warning)", checks }
  if (score <= 4) return { score, label: "Good", color: "var(--info)", checks }
  return { score, label: "Strong", color: "var(--success)", checks }
}
