'use server'

export type EnquiryState = {
  status: 'idle' | 'success' | 'error'
  message: string
  errors?: Record<string, string>
  values?: Record<string, string>
}

const SERVICES = ['personal', 'corporate', 'estate', 'digital', 'other'] as const

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const service = String(formData.get('service') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  const errors: Record<string, string> = {}

  if (name.length < 2 || name.length > 120) {
    errors.name = 'Please enter your full name.'
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    errors.email = 'Please enter a valid email address.'
  }
  if (phone && !/^[+\d][\d\s-]{6,19}$/.test(phone)) {
    errors.phone = 'Please enter a valid contact number.'
  }
  if (!SERVICES.includes(service as (typeof SERVICES)[number])) {
    errors.service = 'Please select the service you need.'
  }
  if (message.length < 10 || message.length > 2000) {
    errors.message = 'Please tell us a little more (10-2000 characters).'
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: 'Please correct the highlighted fields.',
      errors,
      values: { name, email, phone, service, message },
    }
  }

  // In production this would persist the enquiry and notify the trust team.
  console.log('[v0] enquiry received', { name, email, phone, service })

  return {
    status: 'success',
    message:
      'Thank you. A trust officer will contact you within one business day to arrange your consultation.',
  }
}
