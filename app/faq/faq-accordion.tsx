"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

interface FaqQuestion {
  question: string
  answer: string
}

interface FaqCluster {
  title: string
  questions: FaqQuestion[]
}

interface FaqAccordionProps {
  clusters: FaqCluster[]
}

export function FaqAccordion({ clusters }: FaqAccordionProps) {
  return (
    <>
      {clusters.map((cluster, clusterIndex) => (
        <section
          key={clusterIndex}
          className={clusterIndex % 2 === 0 ? "py-16 bg-white" : "py-16 bg-gray-50"}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  {cluster.title}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {cluster.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`cluster-${clusterIndex}-item-${faqIndex}`}
                      className="border-gray-200"
                    >
                      <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-gray-900 hover:text-orange-500 hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 text-base leading-relaxed pr-8">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      ))}
    </>
  )
}
