import { Section, StyledImg } from '@primitives';
import { Text, Grid, Spacer, Row } from '@nextui-org/react';
import FloatingLogos from './floating-logos';
import { StyledTitle } from './styles';
import DappPossibilities from './dapp-possibilities';
import { useMediaQuery } from '@hooks/use-media-query';
import { darkTheme } from '@theme/shared';

const TheChoice: React.FC = () => {
  return (
    <Section id="dapp-technology" css={{ height: '55vh' }}>
      <Grid.Container gap={2} css={{ px: 0 }}>
        <Grid xs={12} md={6}>
          <Row justify="center">
            <>
              <StyledImg
                css={{ '@xsMax': { display: 'none' } }}
                width="110px"
                src="/content/red-pill-trace.svg"
                alt="dapp technology"
              />
              <Text
                h1
                css={{
                  fontSize: '4rem',
                  ml: '$10',
                  '@xsMax': { fontSize: '2rem' },
                }}
              >
                It&apos;s just a choice
                <Text
                  css={{
                    fontSize: '1.5rem',
                    color: '$red600',
                    '@xsMax': { fontSize: '1rem' },
                  }}
                >
                  Between centralized, or decentralized.
                  <Text css={{ '@xsMax': { fontSize: '.9rem' } }}>
                    We&apos;ve had the pleasure to partner with the most
                    innovative, disruptive, and forward-thinking companies in
                    the world over the past few years. Witnessing the evolution
                    of what was once a dream, become a reality, has been nothing
                    short of inspiring. We are proud to be a part of this
                    movement, and excited about the future of the blockchain and
                    decentralized web apps.
                  </Text>
                </Text>
              </Text>
            </>
          </Row>
        </Grid>
        <Grid xs={12} md={6}>
          <Text></Text>
          <DappPossibilities />
        </Grid>
      </Grid.Container>

      <Spacer y={7} />
    </Section>
  );
};

export default TheChoice;
