import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'Can I report multiple missing grades in one complaint?',
    answer:
      'Yes you can request for remarking for multiple missing grades.',
  },
  {
    question: 'How many times can I file a complain?',
    answer:
      'You can file a missing grade complaint once a semester , meaning twice a year',
  },
  {
    question: 'Can I report multiple missing grades in one complaint?',
    answer:
      'Yes you can request for remarking for multiple missing grades.',
  },
]

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Help and Tips</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aspernatur quos similique quae veritatis ratione atque, reprehenderit recusandae illum rem, sunt, aliquid incidunt sequi nisi ad eos facere sint esse.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aspernatur quos similique quae veritatis ratione atque, reprehenderit recusandae illum rem, sunt, aliquid incidunt sequi nisi ad eos facere sint esse.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aspernatur quos similique quae veritatis ratione atque, reprehenderit recusandae illum rem, sunt, aliquid incidunt sequi nisi ad eos facere sint esse.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aspernatur quos similique quae veritatis ratione atque, reprehenderit recusandae illum rem, sunt, aliquid incidunt sequi nisi ad eos facere sint esse.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aspernatur quos similique quae veritatis ratione atque, reprehenderit recusandae illum rem, sunt, aliquid incidunt sequi nisi ad eos facere sint esse.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aspernatur quos similique quae veritatis ratione atque, reprehenderit recusandae illum rem, sunt, aliquid incidunt sequi nisi ad eos facere sint esse.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aspernatur quos similique quae veritatis ratione atque, reprehenderit recusandae illum rem, sunt, aliquid incidunt sequi nisi ad eos facere sint esse.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aspernatur quos similique quae veritatis ratione atque, reprehenderit recusandae illum rem, sunt, aliquid incidunt sequi nisi ad eos facere sint esse.</p>
        </div>
      </div>
    </div>
  )
}
