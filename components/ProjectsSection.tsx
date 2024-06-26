import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'
import SlideUp from './SlideUp'

const projects = [
    {
        name: 'Open Attestation Verification Application',
        description: 'Project developed for CSIRT. The application allows users to verify Open Attestation documents using the Open Attestation API. The application was developed using Next.js, Tailwind CSS, and JavaScript.',
        image: '/oa-verification-menu.png',
        github: 'https://github.com/matucho01/oa-verification',
        link: 'https://github.com/matucho01/oa-verification'
    },
    {
        name: 'Game Gather Client',
        description: 'Project developed for Advanced Web Applications course. The application allows users to be part of a community of gamers. Signups, logins, and user profiles are available. The application was developed using React, Tailwind CSS, and TypeScript.',
        image: '/gamegather-menu.png',
        github: 'https://github.com/matucho01/game-gather-client',
        link: 'https://github.com/matucho01/game-gather-client'
    }
]

const ProjectsSection = () => {
    return (
        <section id='projects'>
            <h1 className="text-center font-bold text-4xl">
                Projects
                <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
            </h1>
            <div className='flex flex-col space-y-28'>
                {projects.map((project, index) => {
                    return (
                        <div key={index}>
                            <SlideUp offset='-300px 0px -300px 0px'>
                                <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                                    <div className='mt-8 md:w-1/2'>
                                        <Link href={project.link} target='_blank'>
                                            <Image
                                                src={project.image}
                                                alt={project.name}
                                                width={1000}
                                                height={1000}
                                                className='rounded-xl shadow-xl hover:opacity-70'
                                            />
                                        </Link>
                                    </div>
                                    <div className='mt-12 md:w-1/2'>
                                        <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                                        <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
                                            {project.description}
                                        </p>
                                        <div className='flex flex-row align-bottom space-x-4'>
                                            <Link href={project.github} target='_blank'>
                                                <BsGithub
                                                    size={30}
                                                    className='hover:-translate-y-1 transition-transform cursor-pointer'
                                                />
                                            </Link>
                                            <Link href={project.link} target='_blank'>
                                                <BsArrowUpRightSquare
                                                    size={30}
                                                    className='hover:-translate-y-1 transition-transform cursor-pointer'
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ProjectsSection