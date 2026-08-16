import Image from 'next/image';

import CircularText from './CircularText';

const projects = [
    {
        description: 'Check train status with zero taps.',
        icon: '/projects/ontrack.png',
        name: 'OnTrack',
        url: 'https://ontrack.hsichen.dev',
    },
    {
        description: 'Color your invoice barcode to match your wallpaper.',
        icon: '/projects/colorinvo.png',
        name: 'ColorInvo',
        url: 'https://colorinvo.hsichen.dev',
    },
    {
        description: 'Bring your README badges to life.',
        icon: '/projects/badgical.svg',
        name: 'Badgical',
        url: 'https://badgical.hsichen.dev',
    },
    {
        description: 'Cross-browser, keyboard-first bookmark launcher.',
        icon: '/projects/homepage.ico',
        name: 'Homepage',
        url: 'https://homepage.hsichen.dev',
    },
    {
        description:
            'Outsmart your opponents in nerdy prime factorization battles.',
        icon: '/projects/atomize.svg',
        name: 'Atomize',
        url: 'https://atomize.hsichen.dev',
    },
    {
        description:
            'A faster, cleaner NTHU Academic Information System (150+ users).',
        icon: '/projects/ccxplite.png',
        name: 'ccxpLite',
        url: 'https://chromewebstore.google.com/detail/glcnfmnbmknbphfgjgbokbbchahmiakk',
    },
    {
        description: 'One-click access from NYCU Portal to E3.',
        icon: '/projects/eze3.png',
        name: 'EZE3',
        url: 'https://chromewebstore.google.com/detail/ekijjgdmninecmfmlkaclcdfgbobaenc',
    },
    {
        description: 'Track Codex usage across accounts and workspaces.',
        icon: '/projects/comux.png',
        name: 'Comux',
        url: 'https://github.com/orangesago/comux',
    },
    {
        description: 'Open your most-used browser tabs instantly.',
        icon: '/projects/handytab.png',
        name: 'HandyTab',
        url: 'https://github.com/orangesago/handy-tab',
    },
    {
        description: 'Japanese pitch-accent & furigana auto-marking tool.',
        icon: '/projects/akuma.png',
        name: 'AkuMa',
        url: 'https://akuma.sessatakuma.dev',
    },
];

const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@id': 'https://hsichen.dev/#person',
            '@type': 'Person',
            'name': 'Hsi Chen',
            'alternateName': ['orangesago', 'Hsiii'],
            'description': 'Design-focused software developer.',
            'image': 'https://hsichen.dev/profile/hsi.webp',
            'url': 'https://hsichen.dev',
            'sameAs': [
                'https://github.com/orangesago',
                'https://www.linkedin.com/in/its-hsi-chen/',
                'https://www.threads.com/@ccc_hsi',
            ],
        },
        {
            '@id': 'https://hsichen.dev/#website',
            '@type': 'WebSite',
            'name': 'Hsi Chen',
            'description':
                'Projects by Hsi Chen, a design-focused software developer.',
            'url': 'https://hsichen.dev',
            'creator': {
                '@id': 'https://hsichen.dev/#person',
            },
        },
    ],
} as const;

const structuredDataJson = JSON.stringify(structuredData).replaceAll(
    '<',
    String.raw`\u003c`
);

export default function HomePage() {
    return (
        <main>
            <script
                dangerouslySetInnerHTML={{ __html: structuredDataJson }}
                type='application/ld+json'
            />
            <div className='content'>
                <section aria-labelledby='profile-heading' className='hero'>
                    <div className='hero__wordmark'>
                        <h1
                            aria-label='Hsi Chen'
                            className='hero__name'
                            id='profile-heading'
                        >
                            Hsi Chen
                        </h1>
                    </div>

                    <div className='hero__profile'>
                        <div className='hero__portrait'>
                            <Image
                                alt='Hsi Chen taking a mirror selfie'
                                className='hero__photo'
                                height={784}
                                priority
                                sizes='(max-width: 767px) 32vw, (max-width: 1199px) 20vw, 22vw'
                                src='/profile/hsi.webp'
                                width={784}
                            />

                            <a
                                aria-label='FIND*ME*ELSEWHERE* — Find me elsewhere'
                                className='links-cta'
                                href='https://links.hsichen.dev'
                            >
                                <CircularText text='FIND*ME*ELSEWHERE*' />
                                <svg
                                    aria-hidden
                                    className='links-cta__icon'
                                    fill='none'
                                    height='24'
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    viewBox='0 0 24 24'
                                    width='24'
                                >
                                    <path d='M5 12h14' />
                                    <path d='m12 5 7 7-7 7' />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                <section
                    aria-labelledby='projects-heading'
                    className='projects'
                >
                    <header className='projects__header'>
                        <h2 id='projects-heading'>My projects</h2>
                    </header>

                    <div className='projects__viewport'>
                        <ul className='projects__list'>
                            {projects.map((project) => (
                                <li key={project.url}>
                                    <a className='project' href={project.url}>
                                        <Image
                                            alt=''
                                            className={`project__icon${
                                                project.name === 'HandyTab'
                                                    ? ' project__icon--monochrome'
                                                    : ''
                                            }`}
                                            height={40}
                                            src={project.icon}
                                            width={40}
                                        />
                                        <span className='project__copy'>
                                            <strong>{project.name}</strong>
                                            <span className='project__description'>
                                                {project.description}
                                            </span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    );
}
