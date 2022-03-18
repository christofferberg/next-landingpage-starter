import * as AccordionPrimitive from '@radix-ui/react-accordion'
import clsx from 'clsx'
import { CaretDownIcon } from '@radix-ui/react-icons'
import { motion, Variants } from 'framer-motion'
import { useState } from 'react'

type FaqItemProps = {
  id: string
  question: string
  answer: string
  isOpen: boolean
}

const rootVariants: Variants = {
  initial: {},
  animate: {},
}

const contentWrapperVariants: Variants = {
  initial: { height: 0 },
  animate: {
    height: 'auto',
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
}

const contentVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.1 } },
}

const caretIconVariants: Variants = {
  initial: { rotate: 0 },
  animate: { rotate: 180 },
}

const AccordionContent = motion(AccordionPrimitive.Content)
const AccordionItem = motion(AccordionPrimitive.Item)
const AccordionWrapper = motion.div
const CaretIcon = motion(CaretDownIcon)

const Item = ({ id, question, answer, isOpen }: FaqItemProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <AccordionItem
      initial="initial"
      animate={isOpen ? 'animate' : 'initial'}
      variants={rootVariants}
      value={id}
      className={clsx('group rounded-xl bg-gray-3 transition-colors ', {
        'bg-gray-4': isHovered,
      })}
    >
      <AccordionPrimitive.Header>
        <AccordionPrimitive.Trigger
          className="flex w-full items-start justify-between p-6 text-left md:p-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="font-medium sm:text-lg">{question}</span>

          <CaretIcon
            variants={caretIconVariants}
            transition={{ type: 'spring', damping: 12 }}
            className="ml-6 h-[24px] w-[24px] shrink-0 md:h-[28px] md:w-[28px]"
          />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>

      <AccordionWrapper
        variants={contentWrapperVariants}
        className="relative -top-2 overflow-hidden"
      >
        <AccordionContent
          forceMount
          className="prose prose-sm max-w-none px-6 pr-10 pb-4 sm:prose-base md:px-8"
          variants={contentVariants}
        >
          {answer}
        </AccordionContent>
      </AccordionWrapper>
    </AccordionItem>
  )
}

type FaqProps = {
  title: string
  questions: Omit<FaqItemProps, 'isOpen'>[]
}

export const Faq = ({ questions, title }: FaqProps) => {
  const [openItems, setOpenItems] = useState<string[]>([])

  return (
    <>
      <h2 className="text-2xl font-bold">{title}</h2>

      <AccordionPrimitive.Root
        type="multiple"
        className="mt-6 sm:mt-8"
        onValueChange={(value) => setOpenItems(value)}
      >
        <div className="flex flex-col gap-4">
          {questions.map((question) => {
            const isOpen = openItems.includes(question.id)

            return <Item key={question.id} {...question} isOpen={isOpen} />
          })}
        </div>
      </AccordionPrimitive.Root>
    </>
  )
}
