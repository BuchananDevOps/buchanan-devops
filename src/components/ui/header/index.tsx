import { styled } from '@nextui-org/react';
import type { CSS, VariantProps } from '@nextui-org/react';
import React from 'react';
import { darkTheme } from '@theme/shared';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  url?: string;
  darkUrl?: string;
  href?: string;
}

const Component = styled('div', {
  $$insightsBorder: '#eff5ff',
  $$artifactsBorder: '##faeeff',
  $$cicdBorder: '#ffebf3',
  $$securityBorder: '#eff5ff',
  $$supportBorder: '#eff5ff',
  width: '100%',
  height: '100%',
  backgroundPosition: '50% -330px',
  border: '1px solid',
  borderRadius: '12px',
  padding: '56px',
  position: 'relative',
  flex: '1 1',
  variants: {
    type: {
      insights: {
        borderColor: '$$insightsBorder',
        '&::after': {
          opacity: 0.25,
        },
        [`.${darkTheme} &`]: {
          borderColor: 'rgba(202,218,255,.25)',
        },
        '&:hover': {
          outline: 'webkit-focus-ring-color auto 1px',
          borderColor: '#ffffff',
          cursor: 'pointer',
        },
      },
      artifacts: {
        borderColor: '$$insightsBorder',
        [`.${darkTheme} &`]: {
          borderColor: 'rgba(228,202,255,.25)',
        },
        '&:hover': {
          outline: 'webkit-focus-ring-color auto 1px',
          borderColor: '#ffffff',
          cursor: 'pointer',
        },
      },
      cicd: {
        borderColor: '$$cicdBorder',
        [`.${darkTheme} &`]: {
          borderColor: 'rgba(255,202,222,.25)',
        },
        '&:hover': {
          outline: 'webkit-focus-ring-color auto 1px',
          borderColor: '#ffffff',
          cursor: 'pointer',
        },
      },
      security: {
        borderColor: '$$securityBorder',
        [`.${darkTheme} &`]: {
          borderColor: 'rgba(202,218,255,.25)',
        },
        backgroundPositionY: '50%',
        position: 'relative',
        '&:hover': {
          outline: 'webkit-focus-ring-color auto 1px',
          borderColor: '#ffffff',
          cursor: 'pointer',
        },
      },
      support: {
        borderColor: '$$supportBorder',
        [`.${darkTheme} &`]: {
          borderColor: 'rgba(255,202,222,.25)',
        },
        backgroundPositionY: '50%',
        '&:hover': {
          outline: 'webkit-focus-ring-color auto 1px',
          borderColor: '#ffffff',
          cursor: 'pointer',
        },
      },
      center: {
        textAlign: 'center',
        justifyContent: 'center',
      },
    },
  },
  '&:hover': {
    outline: 'webkit-focus-ring-color auto 1px',
    borderColor: '#ffffff',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    opacity: 0.25,
    zIndex: -1,
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
    mb: '8px',
  },
  '& .feature-description': {
    display: 'block',
    margin: '0px',
    color: '#888888',
    fs: '16px',
    fontWeight: '500',
    lineHeight: '1.5rem',
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
  },
  compoundVariants: [],
  defaultVariants: {},
});

type HeaderVariants = VariantProps<typeof Component>;
type HeaderProps = React.ComponentPropsWithRef<'div'> &
  HeaderVariants &
  CardProps & { css?: CSS; url?: string; darkUrl?: string };

export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ url, darkUrl, css, title, icon, description, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        css={{
          backgroundImage: `url(${url})`,
          [`.${darkTheme} &`]: {
            backgroundImage: `url(${darkUrl})`,
          },
          ...css,
        }}
      >
        {icon ? (
          <div className="feature-icon">
            <img width="48px" height="48px" src={icon} alt={title} />
          </div>
        ) : null}
        <div className="feature-title">{title}</div>
        <p className="feature-description">{description}</p>
      </Component>
    );
  }
);
