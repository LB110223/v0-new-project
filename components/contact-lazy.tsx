"use client"

import dynamic from "next/dynamic"

const Contact = dynamic(() => import("@/components/contact").then((mod) => mod.Contact), {
  loading: () => (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mx-auto mb-4" />
          <div className="h-4 w-96 bg-gray-200 rounded animate-pulse mx-auto" />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg border border-gray-200 h-[500px] animate-pulse" />
        </div>
      </div>
    </section>
  ),
  ssr: false,
})

export function ContactLazy() {
  return <Contact />
}
