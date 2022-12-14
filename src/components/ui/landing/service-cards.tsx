import { VercelCard } from '@components';
import { Grid, Link } from '@nextui-org/react';
import { Section } from '@primitives';

const services = [
    {
        title: 'Web Design',
        description: 'Design and develop world class websites.',
        icon: '/delamure/icons/design-icon-dark-v3.svg',
        url: '/delamure/enterprise-web-dark-red.svg',
        href: '/ui-ux-frontend-design',
    },
    {
        title: 'App Development',
        description: 'Bring your app to life with our development services.',
        icon: '/delamure/icons/stack-icon-dark-v3.svg',
        url: '/delamure/enterprise-app-dark-red.svg',
        href: '/full-stack-development'
    },
    {
        title: 'Search Engine Optimization',
        description: 'Out rank the competition with the best seo techniques.',
        icon: '/delamure/icons/search-code-icon-dark-v3.svg',
        url: '/delamure/enterprise-seo-dark-red.svg',
        href: '/search-engine-optimization'
    },
];

const emergingTechnologies = [
    {
        title: 'Decentralized Applications',
        description: 'integrate emerging technologies into your business.',
        icon: '/delamure/icons/ethereum-icon-dark-v3.svg',
        url: '/delamure/enterprise-ethereum-dark-red.svg',
        href: '/dapps'
    },
    {
        title: 'Supreme Support',
        description: 'Develop a long lasting relationship with our team.',
        icon: '/delamure/icons/desktop-icon-dark-v3.svg',
        url: '/delamure/enterprise-support-bg-dark-v1.svg',
        href: '/long-term-support'
    },
];


const ServiceCards: React.FC = () => {
    return (

        <Section>
            <Grid.Container gap={2} justify="center">
                {services.map((service, i) => (
                    <Grid xs={12} sm={4} md={4} key={i}>
                        <Link style={{ color: 'white' }} href={`${service.url}` || '/'}>
                        <VercelCard {...service} />
                        </Link>
                    </Grid>
                ))}
            </Grid.Container>
            <Grid.Container gap={2} justify="center">
                {emergingTechnologies.map((service, i) => (
                    <Grid xs={12} sm={6} md={6} key={i}>
                        <Link style={{ color: 'white' }}  href={`${service.url}` || '/'}>
                            <VercelCard {...service} />
                        </Link>
                    </Grid>
                ))}
            </Grid.Container>
        </Section>
    )
}

export default ServiceCards;
