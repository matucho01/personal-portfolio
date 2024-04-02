import React from 'react'
import Image from 'next/image'

const skills = [
  { skill: 'Python' },
  { skill: 'JavaScript' },
  { skill: 'AWS' },
  { skill: 'SQL' },
  { skill: 'Next.js' },
  { skill: 'Node.js' },
  { skill: 'Express' },
  { skill: 'MongoDB' },
  { skill: 'HTML/CSS' },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me:
            </h1>
            <p>
              {' '}
              Hi, my name is Mateo and I am a{' '}
              <span className='font-bold'>{'highly ambitious'}</span>,
              <span className='font-bold'>{' self-motivated'}</span>, and
              <span className='font-bold'>{' curious'}</span> software engineer
              based in Quito, Ecuador.
            </p>
            <br />
            <p>
              I am very collaborative and always willing to work as part of a team, valuing the diversity
              of perspectives and leveraging the strengths of each member to achieve better results.
            </p>
            <br />
            <p>
              Looking for opportunities that allow me to grow professionally and contribute my expertise,
              I am eager to join
              <span className='font-semibold text-teal-600'>
                {' '}dynamic and passionate teams {' '}
              </span> where I can apply my knowledge as well as learn
              a lot in collaboration with people.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/matuxo.webp"
              alt=""
              width={275}
              height={275}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection