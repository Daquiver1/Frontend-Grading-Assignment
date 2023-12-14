import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Risk of Losing Total Marks',
    description:
      'We believe there can be mistakes while marking but you intentionally frame this up , you can lose your entire marks',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Limits to Submitting Complaints',
    description:
      'Of course there is a limit to how many complains you can file per semester which is two complaints per semester',
    icon: LockClosedIcon,
  },
  {
    name: 'Delayed Response',
    description:
      'Due to the large population of people submitting their complaints, there can be delays in your response som please in case of that just stay tuned',
    icon: ArrowPathIcon,
  },
  {
    name: 'Rejection',
    description:
      'There is a syntax your complaint should follow. Avoid profain and silly words to avoid rej',
    icon: FingerPrintIcon,
  },
]

export default function Prerequisites() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Hi there</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Beware of these before proceeding
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Even though we are granting you the chance to fight for the grades you deserve but take notes of these first
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
