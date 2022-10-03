import * as React from 'react';
import NextLink from 'next/link';
import { InView } from 'react-intersection-observer';
import cn from 'classnames';
import landingContent from '@content/landing';
import {
  Grid,
  Row,
  Col,
  Link,
  Text,
  Collapse,
  Spacer,
} from '@nextui-org/react';
import {
  Blockholder,
  Section,
  Title,
  Subtitle,
  BlockLink,
  Box,
  CodeDemo,
} from '@components';

const items = [
  {
    id: 'product-without-schema',
    title: 'Product without Schema',
    description:
      'As you can see, the product code is not structured with microdata. This is not good for SEO and indexing high with google.',
    lines: '2-21',
  },
  {
    id: 'product-with-schema',
    title: 'Product with Schema',
    description:
      'By directly adding a microdata to the product code, we can improve the SEO of the product and improve the indexing of the product in google.',
    lines: '23-73',
  },
  {
    id: 'business-without-schema',
    title: 'Business without Schema',
    description:
      'Google will not be able to index the business information and will not be able to show the business information in the search results as the code is currently scripted.',
    lines: '69-85',
  },
  {
    id: 'business-with-schema',
    title: 'Business with Schema',
    description:
      'Microdata is added to the business code, which will help google index the business information and show the business for relevant searches.',
    lines: '85-118',
  },
];

const BuiltInStitchesSection = () => {
  const [activeItem, setActiveItem] = React.useState(items[0]);
  const [isVisible, setIsVisible] = React.useState(false);

  const handleChange = (value: any) => {
    setActiveItem(items[value - 1]);
  };

  return (
    <InView as="section" className="inview-section" onChange={setIsVisible}>
      <Spacer y={10} css={{ '@xsMax': { mt: '$16' } }} />
      <Section css={{ position: 'relative' }}>
        <Box
          css={{
            position: 'absolute',
            top: 0,
            left: '-10%',
            zIndex: '-$1',
            '@xsMax': {
              top: '20%',
              left: '-90%',
            },
          }}
        >
          <img src="/customization-gradient.svg" alt="theming background" />
        </Box>
        <Row justify="flex-start">
          <Title>Define your business</Title>
        </Row>
        <Row justify="flex-start">
          <Title>with &nbsp;</Title>
          <Title color="violet">schemas.</Title>
        </Row>
        <Subtitle>
          Our main focus is defining your data with schemas. We&apos;ve seen
          tremendous search engine success over the last 13 years with microdata
          scehma integration for search engine indexing.
        </Subtitle>
        <NextLink href="/devops/search-engine-optimization">
          <BlockLink color="violet">Search Engine Optimization</BlockLink>
        </NextLink>
        <Grid.Container gap={2} css={{ '@mdMax': { display: 'none' } }}>
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
            <Col>
              <Collapse.Group accordion onChange={handleChange}>
                {items.map(({ id, title, description }) => (
                  <Collapse
                    key={id}
                    title={title}
                    showArrow={false}
                    className={cn({ active: activeItem.id === id })}
                    expanded={id === items[0].id}
                    css={{
                      br: '$lg',
                      border: 'none',
                      p: '0 $lg',
                      margin: '$md 0',
                      '& .nextui-collapse-title': {
                        color: '$accents4',
                        fontSize: '1.7rem',
                        transition: 'color 0.2s ease-in-out',
                      },
                      '&.active': {
                        bf: 'saturate(180%) blur(14px)',
                        bg: 'rgba(255, 255, 255, 0.05)',
                        boxShadow: '$md',
                      },
                      '&.active .nextui-collapse-view': {
                        pb: 0,
                      },
                      '&.active .nextui-collapse-title': {
                        color: '$text',
                      },
                      '&:hover': {
                        '&:not(.active) .nextui-collapse-title': {
                          color: '$accents7',
                        },
                      },
                    }}
                  >
                    <Text
                      css={{
                        fs: '1.4rem',
                        color: '$accents6',
                        '@xsMax': {
                          fs: '1rem',
                        },
                      }}
                    >
                      {description}
                    </Text>
                  </Collapse>
                ))}
              </Collapse.Group>
            </Col>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            css={{
              pr: 0,
              mt: '$9',
              '@mdMax': {
                pl: '0',
              },
              '@xsMax': {
                mt: '$18',
              },
            }}
          >
            <Col
              css={{
                dflex: 'center',
                fd: 'column',
                ai: 'flex-start',
                h: '100%',
                mt: '-10%',
              }}
            >
              {isVisible ? (
                <CodeDemo
                  showWindowIcons
                  css={{
                    maxHeight: 520,
                  }}
                  language="jsx"
                  line={activeItem.lines}
                  value={landingContent.seoUtilitiesCode}
                />
              ) : (
                <Blockholder height="420px" />
              )}
            </Col>
          </Grid>
        </Grid.Container>
      </Section>
    </InView>
  );
};

export default BuiltInStitchesSection;
