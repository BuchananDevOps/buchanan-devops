/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import NextLink from 'next/link';
import { InView } from 'react-intersection-observer';
import { Grid, Row, Col, Spacer } from '@nextui-org/react';
import { darkTheme } from '@theme/shared';
import {
  Box,
  Section,
  Title,
  Subtitle,
  BlockLink,
  StyledImg,
} from '@components';
import { useTheme } from 'next-themes';


const CustomThemesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <InView as="section" className="inview-section" onChange={setIsVisible}>
      <Spacer y={10} css={{ '@xsMax': { mt: '$32' } }} />
      <Section css={{ position: 'relative' }}>
        <Box
          css={{
            position: 'absolute',
            top: '0%',
            right: '10%',
            zIndex: '-$1',
            [`.${darkTheme} &`]: {
              right: 0,
              left: '0%',
              '@xsMax': {
                top: '15%',
                left: '10% !important',
              },
            },
            '@xsMax': {
              top: '5%',
              right: '-40% !important',
            },
          }}
        >
          <img src="/theming-gradient.svg" alt="theming background" />
        </Box>
        <Row justify="center">
          <Title>Engineering</Title>
        </Row>
        <Row justify="center">
          <Title color="blue">
            strategic&nbsp;<Title>solutions.</Title>
          </Title>
        </Row>
        <Row justify="center">
        <NextLink href="/devops">
          <BlockLink color="blue">Learn more</BlockLink>
        </NextLink>
        </Row>
        
        <Grid.Container justify='center'>
          <Grid
            xs={12}
            sm={8}
            css={{
              pl: 0,
              '@xsMax': {
                pr: '0',
              },
            }}
          >
              <StyledImg
                src={isDark ? '/content/code-to-production-dark-4.svg' : '/content/code-to-production-light-4.svg'}
                alt="theming"
                width="100%"
              />
          </Grid>
        </Grid.Container>
      </Section>
    </InView>
  );
};

export default CustomThemesSection;
