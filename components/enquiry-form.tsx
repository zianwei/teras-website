'use client'

import { useActionState } from 'react'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import { submitEnquiry, type EnquiryState } from '@/app/contact/actions'

const initialState: EnquiryState = { status: 'idle', message: '' }

const fieldBase =
  'w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary'

export function EnquiryForm() {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState)

  if (state.status === 'success') {
    return (
      <div className="flex flex-col items-start gap-4 border-t-2 border-accent bg-card p-8">
        <CheckCircle2 className="size-7 text-primary" aria-hidden="true" />
        <h2 className="text-xl text-card-foreground">Enquiry received</h2>
        <p className="text-sm leading-relaxed text-muted-foreground" role="status">
          {state.message}
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-5 bg-card p-8" noValidate>
      <h2 className="text-xl text-card-foreground">Request a consultation</h2>

      {state.status === 'error' ? (
        <p
          role="alert"
          className="flex items-start gap-2.5 border-l-2 border-destructive bg-destructive/5 px-4 py-3 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 size-4 flex-shrink-0" aria-hidden="true" />
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm text-foreground">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            defaultValue={state.values?.name ?? ''}
            aria-describedby={state.errors?.name ? 'name-error' : undefined}
            aria-invalid={state.errors?.name ? true : undefined}
            className={fieldBase}
          />
          {state.errors?.name ? (
            <p id="name-error" className="text-xs text-destructive">
              {state.errors.name}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm text-foreground">
            Contact number{' '}
            <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+60 12 345 6789"
            defaultValue={state.values?.phone ?? ''}
            aria-describedby={state.errors?.phone ? 'phone-error' : undefined}
            aria-invalid={state.errors?.phone ? true : undefined}
            className={fieldBase}
          />
          {state.errors?.phone ? (
            <p id="phone-error" className="text-xs text-destructive">
              {state.errors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm text-foreground">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          defaultValue={state.values?.email ?? ''}
          aria-describedby={state.errors?.email ? 'email-error' : undefined}
          aria-invalid={state.errors?.email ? true : undefined}
          className={fieldBase}
        />
        {state.errors?.email ? (
          <p id="email-error" className="text-xs text-destructive">
            {state.errors.email}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="service" className="text-sm text-foreground">
          What do you need help with?
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue={state.values?.service ?? ''}
          aria-describedby={state.errors?.service ? 'service-error' : undefined}
          aria-invalid={state.errors?.service ? true : undefined}
          className={fieldBase}
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="personal">Wasiat, will or private trust</option>
          <option value="estate">Estate administration or probate</option>
          <option value="corporate">Escrow, custody or security agency</option>
          <option value="digital">Digital trustee or API integration</option>
          <option value="other">Something else</option>
        </select>
        {state.errors?.service ? (
          <p id="service-error" className="text-xs text-destructive">
            {state.errors.service}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm text-foreground">
          How can we assist?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={2000}
          defaultValue={state.values?.message ?? ''}
          aria-describedby={state.errors?.message ? 'message-error' : undefined}
          aria-invalid={state.errors?.message ? true : undefined}
          className={`${fieldBase} resize-y`}
        />
        {state.errors?.message ? (
          <p id="message-error" className="text-xs text-destructive">
            {state.errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-1 bg-primary px-6 py-3.5 text-sm text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
      >
        {pending ? 'Sending…' : 'Submit enquiry'}
      </button>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Your details are used solely to respond to this enquiry, in line with the Personal Data
        Protection Act 2010.
      </p>
    </form>
  )
}
