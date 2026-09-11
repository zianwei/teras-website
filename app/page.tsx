import { Hero } from '@/components/home/hero'
import { ServiceSplit } from '@/components/home/service-split'
import { Digital } from '@/components/home/digital'
import { Assurance } from '@/components/home/assurance'
import { Process } from '@/components/home/process'
import { CtaBand } from '@/components/cta-band'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceSplit />
      <Digital />
      <Assurance />
      <Process />
      <CtaBand />
    </>
  )
}
