import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'
import SlideUp from './SlideUp'

type Project = {
    name: string
    description: string
    image: string
    github: string
    link: string
    highlights?: string[]
    techStack?: string[]
}

const projects: Project[] = [
    {
        name: 'Instagram Follower Insights',
        description: 'Privacy-first analytics suite that parses Instagram follower exports entirely in the browser. Compare snapshots over time, surface pending requests, and keep every dataset encrypted on-device.',
        image: '/instagram-insights.png',
        github: 'https://github.com/matucho01/instagram-follower-insights',
        link: 'https://github.com/matucho01/instagram-follower-insights',
        highlights: [
            'Offline parsing pipeline with Web Workers, JSZip, and Papaparse',
            'Encrypted saved sessions powered by AES-GCM + IndexedDB',
            'Snapshot comparison view to track gained and lost followers',
        ],
        techStack: ['Next.js 15', 'TypeScript', 'Zustand', 'Tailwind CSS', 'JSZip', 'Vitest'],
    },
    {
        name: 'Open Attestation Verification Application',
        description: 'Verification dashboard for CSIRT that validates Open Attestation documents against the official API, providing instant feedback for credential authenticity checks.',
        image: '/oa-verification-menu.png',
        github: 'https://github.com/matucho01/oa-verification',
        link: 'https://github.com/matucho01/oa-verification',
        highlights: [
            'One-click verification flow for OA-compliant documents',
            'Responsive UI built with Next.js + Tailwind CSS',
        ],
        techStack: ['Next.js', 'Tailwind CSS', 'JavaScript'],
    },
    {
        name: 'Game Gather Client',
        description: 'Community platform that helps gamers discover parties, manage profiles, and coordinate play sessions across multiple titles with a responsive, mobile-first design.',
        image: '/gamegather-menu.png',
        github: 'https://github.com/matucho01/game-gather-client',
        link: 'https://github.com/matucho01/game-gather-client',
        highlights: [
            'Authentication and profile management with protected routes',
            'Reusable UI component system styled with Tailwind CSS',
        ],
        techStack: ['React', 'Tailwind CSS', 'TypeScript'],
    },
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
                                                alt={`${project.name} preview`}
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
                                        {project.highlights && (
                                            <ul className='mb-6 space-y-2 text-neutral-600 dark:text-neutral-400'>
                                                {project.highlights.map((highlight, highlightIdx) => (
                                                    <li key={highlightIdx} className='flex items-start text-base'>
                                                        <span className='mr-2 mt-1 h-2 w-2 rounded-full bg-teal-500'></span>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        {project.techStack && (
                                            <div className='mb-6 flex flex-wrap gap-3'>
                                                {project.techStack.map((tech, techIdx) => (
                                                    <span
                                                        key={techIdx}
                                                        className='rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700 dark:bg-stone-800 dark:text-teal-200'
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
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