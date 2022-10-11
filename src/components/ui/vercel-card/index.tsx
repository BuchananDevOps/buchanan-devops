import { styled } from "@nextui-org/react";
import type { CSS, VariantProps } from "@nextui-org/react";
import { darkTheme } from "@theme/shared";
import React from 'react';

interface CardProps {
    title: string;
    description: string;
    icon?: string;
    url?: string;
    href?: string;
}

const Component = styled('div', {
    width: '100%',
    height: '100%',
    backgroundPosition: '50% -330px',
    border: '1px solid',
    borderRadius: '12px',
    padding: '56px',
    position: 'relative',
    flex: '1 1',
    [`.${darkTheme} &`]: {
        borderColor: 'rgba(202,218,255,.25)',
      },
      '&:hover': {
        outline: 'webkit-focus-ring-color auto 1px',
        borderColor: '#ffffff',
        cursor: 'pointer',
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

type VercelCardVariants = VariantProps<typeof Component>;

type VercelProps = React.ComponentPropsWithRef<'div'> &
VercelCardVariants &
  CardProps & { css?: CSS; url?: string; };

  export const VercelCard = React.forwardRef<HTMLDivElement, VercelProps>(
    ({ url, css, title, icon, description, ...props }, ref) => {
      return (
        <Component
          {...props}
          ref={ref}
          css={{
            backgroundImage: `url(${url})`,
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
    