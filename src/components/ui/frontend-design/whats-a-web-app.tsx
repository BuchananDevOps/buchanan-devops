import { WindowActions } from '@components';
import { useMediaQuery } from '@hooks/use-media-query';
import { Grid, Row, Spacer, Text } from '@nextui-org/react';
import { Box, Section, StyledImg } from '@primitives';

const WhatsAWebApp: React.FC = () => {
  const isMobile = useMediaQuery(960);

  return (
    <Section>
      <Grid.Container gap={3}>
        <Grid
          css={{
            mt: '$15',
            mr: '$25',
            '@xsMax': { textAlign: 'center' },
            '@mdMax': { textAlign: 'center' },
          }}
          xs={12}
          sm={6}
          lg={6}
        >
          <Text
            h3
            css={{
              fontWeight: 700,
              fontSize: '2.5rem',
              letterSpacing: '-0.058125em',
              marginBlockStart: '1em',
              marginBlockEnd: '1em',
            }}
          >
            Static Sites (SSG)
            <Text
              css={{
                lineHeight: '2rem',
                color: '#888888',
                fontWeight: 400,
                fontSize: '1.25rem',
              }}
            >
              Static sites are blazing fast, require no server maintenance, and
              are easy to deploy. They are perfect for marketing sites,
              professional services, and general informational websites. Static
              sites are built for preformance and search engine indexability.
            </Text>
          </Text>
        </Grid>
        <Grid
          xs={12}
          sm={6}
        >
          <StyledImg
            css={{
              px: '$20',
              '@xsMax': { px: '$0' },
            }}
            src="/content/just-code-head.svg"
            alt="Static Site Generation Svg Product Image"
          />
        </Grid>
        <Grid
          css={{
            mt: '$15',
            mr: '$25',
            '@xsMax': { textAlign: 'center' },
            '@mdMax': { textAlign: 'center' },
          }}
          xs={12}
          sm={6}
          lg={6}
        >
          <Text
            h3
            css={{
              fontWeight: 700,
              fontSize: '2.5rem',
              letterSpacing: '-0.058125em',
              marginBlockStart: '1em',
              marginBlockEnd: '1em',
            }}
          >
            Progressive Web Apps (PWA)
            <Text
              css={{
                lineHeight: '2rem',
                color: '#888888',
                fontWeight: 400,
                fontSize: '1.25rem',
              }}
            >
              The difference between a website and a web app is that a web app
              is interactive. It allows you to do things like create an account,
              log in, and interact with other users. A web app is a website that
              has a backend.
            </Text>
            <Text></Text>
          </Text>
        </Grid>
        <Grid xs={12} sm={6}>
          <StyledImg
            css={{ px: '$20', '@xsMax': { px: '$0' } }}
            src="/content/just-product.svg"
            alt="Static Site Generation Svg Product Image"
          />
        </Grid>
      </Grid.Container>
    </Section>
  );
};

export default WhatsAWebApp;
