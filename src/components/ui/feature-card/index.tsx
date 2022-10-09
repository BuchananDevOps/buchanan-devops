import { Card, Grid, styled, Text, VariantProps } from '@nextui-org/react';
import { Box, StyledImg } from '@primitives';
import { useRouter } from 'next/router';
import { CSSProperties } from 'react';
import NextLink from 'next/link';
import cn from 'classnames';

const FeatureCard = styled('div', {
  border: '1px solid',
  borderRadius: '12px',
  padding: '56px',
  position: 'relative',
  flex: '1 1',
  borderColor: '$$artifactBorder',

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
    mb: '8px',
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
  css?: CSSProperties;
}

type FeatureVariants = VariantProps<typeof FeatureCard>;
type FeatureProps = React.ComponentProps<'div'> &
  FeatureVariants &
  FeatureCardProps;

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
    <FeatureCard
      css={{
        bg: 'transparent',
      }}
    >
      <StyledImg
        css={{
          position: 'absolute',
          left: 0,
          overflow: 'hidden',
          opacity: 0.25,
          width: '100%',
          height: '100%',
        }}
        src="/delamure/artifacts-bg-v1.svg"
      />
      {icon ? (
        <div className="feature-icon">
          <img width="48px" height="48px" src={icon} alt={title} />
        </div>
      ) : null}
      <div className="feature-title">{title}</div>
      <p className="feature-description">{description}</p>
    </FeatureCard>
  );
};

export default Feature;
