/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
"use client"
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'


const favorites = [
  {
    id: 1,
    name: 'Pizza Party Social Post',
    videoSrc: "/videos/export_1705477132104.mp4"
  },
  {
    id: 2,
    name: 'NFT Avatar News',
    videoSrc: "/videos/export_1705477139818.mp4"
  },
  {
    id: 3,
    name: 'ANN Carton News with Character Animatons',
    videoSrc: "/videos/export_1705477119275.mp4"
  },
]                         
const stats = [
  { id: 1, name: 'Arabic', videoSrc: "/videos/HL-intro-ar.mp4"},
  { id: 2, name: 'Japanese', videoSrc: "/videos/HL-intro-jp.mp4"},
  { id: 3, name: 'Indonesian', videoSrc: "/videos/HL-intro-indo.mp4"},
  { id: 4, name: 'English', videoSrc: "/videos/hl-demo.mp4"},
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Sale() {
  const [open, setOpen] = useState(false)
  const linkContact = "https://calendly.com/darren_rogan/30min"

  return (
    <div className="bg-white">

      <header className="relative overflow-hidden">

        {/* Hero section */}
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Custom sports commentors are finally here
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer avatars will bring your custom content fast.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="/avatars/darrenrogan_a_Japanese_horse_racing_commentor_8eb3d2af-24fe-4fd7-bb0a-03e4dbee4556.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="/avatars/darrenrogan_a_Thai_horse_racing_commentor_3adff7cc-cc9b-4d23-b7ac-817f7df9cf08.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="/avatars/darrenrogan_an_Indonesian_horse_racing_commentor_f88b6516-a701-4374-b409-b37c8d196beb.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="/avatars/darrenrogan_an_emirate_horse_racing_commentor_ca8beb1c-89e3-4a73-ba79-fb24a11d9b78.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="/avatars/darrenrogan_a_sport_commentor_at_the_horse_races_talking_into_t_5e8a2475-416f-416e-9b02-8843beb7af09.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="/avatars/darrenrogan_an_Asian_horse_racing_commentor_fc661ba1-9e3e-4a7a-ae0a-0aeece9217dd.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="/avatars/darrenrogan_a_horse_racing_commentor_96907b84-3363-4d17-aa4c-5d426602569a.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#breakdown"
                  className="inline-block rounded-md border border-transparent bg-stone-900 px-8 py-3 mb-20 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Custom Avatars
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>


      <section aria-labelledby="avatar-female" className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Boost your productivity.
              <br />
              Start using our Avatar today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Create low cost branded contnent on demand
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              {/* <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
          <div className="relative mx-16 h-80 lg:mt-8">
            <video
                  src="/videos/faux1.mp4"
                  controls
                  autoPlay={true}
                  loop={false}
                  poster='/avatars/darrenrogan_female_sports_commentor_bebda7af-1d7c-48b7-ad5c-b9ea9fbcdc41.png'
                  className="object-cover object-center group-hover:opacity-75"
                  
            />
          </div>
        </div>
      </div>
    </section>



                {/* Language Example section */}
                <section aria-labelledby="language-heading">
        <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Trusted by creators with worldwide audiences</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Let us create regional versions for better customer engagement.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.name}</dt>
                {/* <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd> */}
                <video
                  src={stat.videoSrc}
                  controls
                  className="object-cover object-center group-hover:opacity-75"
                />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </section>
        
        {/* Content breakdown section */}
        <section id="breakdown" aria-labelledby="category-heading" className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                Content Breakdown
              </h2>
              {/* <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                Browse all categories
                <span aria-hidden="true"> &rarr;</span>
              </a> */}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
              <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
                <video
                  src="/videos/hl-demo.mp4"
                  controls
                  className="object-cover object-center group-hover:opacity-75"
                />
                {/* <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" /> */}
                <div className="flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-black">
                        Custom Branded Avatar Content
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-black">
                      Partner Branded AI Content
                    </p>
                  </div>
                </div> 
              </div>

              <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                <img
                  src="/scripts/horselink-intro-en.png"
                  alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                  className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-80 "
                />
                <div className="flex items-end p-6 ">
                  <div>
                    <h3 className="font-semibold text-grey-500">
                        <span className="" />
                        Dynamic Scripting
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      AI Scripts, Translations
                    </p>
                  </div>
                </div>
              </div>

              <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">


                <div className="flex items-start p-6">
                  <div>
                    <h3 className="font-semibold text-black">
                 
                        <span className="" />
                        Audio Files
                  
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-black">
                      Continuously Improving Models
                    </p>
                  </div>
                </div>
                <audio 
                  controls 
                  className="object-cover object-center group-hover:opacity-75 h-24 sm:w-full"
                >
                  <source src="/audio/hl-short.mp3" type="audio/mpeg" />
                </audio>
              </div>
            </div>

            {/* <div className="mt-6 sm:hidden">
              <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                Browse all categories
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div> */}
          </div>
        </section>

        {/* Featured section */}
        <section aria-labelledby="cause-heading">
          <div className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="/avatars/darrenrogan_AI_character_production_line_all_ready_for_sports_c_d7a4475c-eb7c-4c02-9561-e62e7c31f42c.png  "
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gray-900 bg-opacity-50" />
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2 id="cause-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Evolving Models
              </h2>
              <p className="mt-3 text-xl text-white">
                We're committed to embracing the best in class generative AI Models. Our service uses multiple pipelines 
                and models, both commerical and open source. We're doing our best to bring the best content generative models to
                the masses.
              </p>
              {/* <a
                href="#"
                className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
              >
                Read our story
              </a> */}
            </div>
          </div>
        </section>

        {/* Favorites section */}
        <section aria-labelledby="favorites-heading">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2 id="favorites-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                Example Social Posts
              </h2>
              {/* <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                Browse all favorites
                <span aria-hidden="true"> &rarr;</span>
              </a> */}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
              {favorites.map((favorite) => (
                <div key={favorite.id} className="group relative">
                  <div className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
                    <video
                      src={favorite.videoSrc}
                      controls
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                      {favorite.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* <div className="mt-6 sm:hidden">
              <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                Browse all favorites
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div> */}
          </div>
        </section>



        {/* CTA section */}
        <section aria-labelledby="sale-heading">
          <div className="overflow-hidden pt-32 sm:pt-14">
            <div className="bg-gray-800">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative pb-16 pt-48 sm:pb-24">
                  <div>
                    <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                      Custom Reporters
                      <br />
                      In Seconds.
                    </h2>
                    <div className="mt-6 text-base">
                      <a href={linkContact} target="blank" className="font-semibold text-white">
                        Contact for a quote
                        <span aria-hidden="true"> &rarr;</span>
                      </a>
                    </div>
                  </div>

                  <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                    <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                      <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="flex-shrink-0">
                          <img
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/avatars/darrenrogan_female_sports_commentor_bebda7af-1d7c-48b7-ad5c-b9ea9fbcdc41.png"
                            alt=""
                          />
                        </div>

                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                          <img
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/avatars/darrenrogan_indian_sport_commentor_60223b44-01bd-4152-a611-7e55eb7e7c9c.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="flex-shrink-0">
                          <img
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/avatars/darrenrogan_horse_racing_reporter_in_hong_kong_462384d8-8598-4d9e-baf4-3a102e7fc47f.png"
                            alt=""
                          />
                        </div>

                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                          <img
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/avatars/darrenrogan_indian_sport_commentor_efbf4a8c-21e5-4f99-8217-451c09932572.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="flex-shrink-0">
                          <img
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/avatars/darrenrogan_a_Japanese_horse_racing_commentor_8e07d38d-11d1-4c9c-a238-13dacb997660.png"
                            alt=""
                          />
                        </div>

                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                          <img
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/avatars/darrenrogan_a_Thai_horse_racing_commentor_3adff7cc-cc9b-4d23-b7ac-817f7df9cf08.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
