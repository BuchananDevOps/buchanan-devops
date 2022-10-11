import { VercelCard } from '@components';
import { Grid } from '@nextui-org/react';
import { Section } from '@primitives';

const services = [
    {
        title: 'Web Design',
        description: 'Deploy your Next.js app with Vercel.',
        icon: '/delamure/icons/design-icon-dark-v3.svg',
        url: '/delamure/enterprise-design-dark-red.svg',
    },
    {
        title: 'App Development',
        description: 'Deploy your Next.js app with Netlify.',
        icon: '/delamure/icons/stack-icon-dark-v3.svg',
        url: '/delamure/enterprise-stack-dark-red.svg'
    },
    {
        title: 'Search Engine Optimization',
        description: 'Deploy your Next.js app with Render.',
        icon: '/delamure/icons/search-code-icon-dark-v3.svg',
        url: '/delamure/enterprise-code-search-dark-red.svg'
    },
];

const emergingTechnologies = [
    {
        title: 'Decentralized Applications',
        description: 'Deploy your Next.js app with Vercel.',
        icon: '/delamure/icons/ethereum-icon-dark-v3.svg',
        url: '/delamure/enterprise-ethereum-dark-red.svg'
    },
    {
        title: 'Internet of Things',
        description: 'Deploy your Next.js app with Render.',
        icon: '/delamure/icons/desktop-icon-dark-v3.svg',
        url: '/delamure/enterprise-support-bg-dark-v1.svg'
    },
];


const ServiceCards: React.FC = () => {
    return (

        <Section>
            <Grid.Container gap={2} justify="center">
                {services.map((service, i) => (
                    <Grid xs={12} sm={4} md={4} key={i}>
                        <VercelCard {...service} />
                    </Grid>
                ))}
            </Grid.Container>
            <Grid.Container gap={2} justify="center">
                {emergingTechnologies.map((service, i) => (
                    <Grid xs={12} sm={6} md={6} key={i}>
                        <VercelCard {...service} />
                    </Grid>
                ))}
            </Grid.Container>
        </Section>
    )
}

export default ServiceCards;
