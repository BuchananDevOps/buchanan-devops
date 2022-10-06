import { Card, Grid, styled, Text, VariantProps } from '@nextui-org/react';
import { Box, DelamureCard } from '@primitives';
import { useRouter } from 'next/router';
import { CSSProperties } from 'react';
import NextLink from 'next/link';

 const FeatureCard = styled('div', {
    border: '1px solid',
    borderRadius: '12px',
    padding: '56px',
    position: 'relative',
    flex: '1 1',
    variants: {
        type: {
            artifact: {
                borderColor: '$$artifactBorder',
                '&::after': {
                    backgroundPositionX: '50%',
                    backgroundPositionY: '-330px',
                    content: '',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    opacity: 0.25,
                    zIndex: -1,
                    '& .artifact-card': {
                        backgroundImage: '/delamure/artifacts-bg-v1.svg',
                    },
                },
            },
            support: {
                borderColor: '$$serviceBorder',
                backgroundColor: '$$serviceBg',
                color: '$$serviceText',
            },
        },
    },
    '& .feature-icon': {
        mb: '20px',
    },
    '& .feature-icon img': {
        maxWidth: '100%',
        height: 'auto',
    },
    '& .feature-title': {
        fs: '1.25rem',
        letterSpacing: '-.020625rem',
        fontWeight: '700',
        lineHeight: '1.5rem',
        mb: '8px'
    },
    '& .feature-description': {
        display: 'block',
        margin: '0px',
        color: '$featureP',
        fs: '1rem',
        fontWeight: '400',
        lineHeight: '1.5rem',
        marginBlockStart: '1em',
        marginBlockEnd: '1em',
        marginInlineStart: '0px',
        marginInlineEnd: '0px',
    },
});


interface FeatureCardProps {
    title: string;
    image?: string;
    icon?: string;
    description: string;
    href?: string;
    color?: string;
    children?: React.ReactNode;
    css?: CSSProperties
} 

type FeatureVariants = VariantProps<typeof FeatureCard>;
type FeatureProps = React.ComponentProps<'div'> & FeatureVariants & FeatureCardProps; 

const Feature: React.FC<FeatureProps> = ({
    title,
    description,
    href,
    icon,
}) => {
    const router = useRouter();
    const handleClick = () => {
        if (href) {
            router.push(href);
        }
    };

    return (


            <FeatureCard>
                {icon ? (
                    <div className="feature-icon">
                        <img width="48px" height="48px" src={icon} alt={title} />
                    </div>
                ) : null }
                <div className='feature-title'>{title}</div>
                <p className='feature-description'>{description}</p>
            </FeatureCard>

    );
};


export default Feature;