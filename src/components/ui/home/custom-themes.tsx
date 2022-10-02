/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import NextLink from 'next/link';
import { InView } from 'react-intersection-observer';
import { Grid, Row, Col, Spacer } from '@nextui-org/react';
import Image from 'next/image';
import { darkTheme } from '@theme/shared';
import {
  Blockholder,
  Box,
  Section,
  Title,
  Subtitle,
  BlockLink,
  ShopCard,
} from '@components';
import { useTheme } from 'next-themes';
import { get } from 'lodash';

const codeHighlights = {
  nextui: '3-11',
  modern: '22-37',
  elegant: '54-72',
  retro: '93-107',
};

const darkCodeHighlights = {
  nextui: '10-21',
  modern: '38-53',
  elegant: '73-91',
  retro: '109-124',
};

const CustomThemesSection = () => {
  const [activeHighlight, setActiveHighlight] = useState('nextui');
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
            top: '-25%',
            right: '-30%',
            zIndex: '-$1',
            [`.${darkTheme} &`]: {
              right: 0,
              left: '-30%',
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
        <Row justify="flex-start">
          <Title>We develop</Title>
        </Row>
        <Row justify="flex-start">
          <Title color="blue">strategic&nbsp;<Title>solutions.</Title></Title>
          
        </Row>
        <Subtitle>
          In a world of ever-changing technology, we&apos;re here to design, develop and offer long-term support for your business. Your success is our success. 
        </Subtitle>
        <NextLink href="/devops">
          <BlockLink color="blue">Learn more</BlockLink>
        </NextLink>
        <Grid.Container gap={2}>
          <Grid
            xs={12}
            sm={6}
            css={{
              pl: 0,
              '@xsMax': {
                pr: '0',
              },
            }}
          >
            <Col
              css={{
              }}
            >
              <Image
                src="/images/commerce.avif"
                alt="theming"
                width={620}
                height={628}
              />
            </Col>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            css={{
              pr: 0,
              '@mdMax': {
                pl: '0',
              },
            }}
          >
            <Col
              css={{
                dflex: 'center',
                fd: 'column',
                ai: 'flex-start',
                h: '100%',
              }}
            >
              <Image
                src="/images/commerce-backends.avif"
                alt="theming"
                width={640}
                height={757}
              />
            </Col>
          </Grid>
        </Grid.Container>
      </Section>
    </InView>
  );
};

export default CustomThemesSection;
