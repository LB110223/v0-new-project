export interface ContactFormData {
  name: string
  email: string
  company: string
  service: string
  message: string
  // Anti-spam fields
  turnstileToken?: string
  website?: string // honeypot
  _timestamp?: number // time check
}
