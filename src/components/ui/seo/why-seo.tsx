import {
  Button,
  Col,
  Collapse,
  Grid,
  Modal,
  Spacer,
  StyledButton,
  Text,
  useModal,
} from '@nextui-org/react';
import {
  Title,
  Subtitle,
  Box,
  Section,
  BlockLink,
  StyledImg,
  BgGradient,
  PageNav,
} from '@primitives';
import { darkTheme } from '@theme/shared';
import { useState } from 'react';
import { InView } from 'react-intersection-observer';
import cn from 'classnames';
import NextLink from 'next/link';
import { Blockholder, CodeDemo, ChevronLeft, ChevronRight } from '@components';

const items = [
  {
    id: 'seo-audit',
    title: 'Target Market Business Analysis Audit',
    description:
      'Analysis of your target market and business to determine the best keywords to target and develop a strategy to rank higher in search engines.',
    lines: '2-21',
    prev: 'search-monitoring',
    next: 'deep-learning',
  },
  {
    id: 'deep-learning',
    title: 'Keyword Research and Development',
    description:
      'Through deep learning, we will research the optimal keywords for your industry which see the highest Clickthrough rates (CTR).',
    lines: '23-73',
    prev: 'seo-audit',
    next: 'listings-integrations',
  },
  {
    id: 'listings-integrations',
    title: 'Schema Integrations',
    description:
      'Well integrate schema markup to your content, which enable rich snippets to be displayed in search results and highlight your business offerings.',
    lines: '69-85',
    prev: 'deep-learning',
    next: 'serp-indexing',
  },
  {
    id: 'serp-indexing',
    title: ' Content Optimization and Submission.',
    description:
      'Optimizing your content will the above references methods offers a better understanding of your content to search engines and users.',
    lines: '85-118',
    prev: 'listings-integrations',
    next: 'seo-audit',
  },
  {
    id: 'search-monitoring',
    title: 'Continuous Testing and Measuring.',
    description:
      'Test and measure how well your site is preforming while making adjustments each months to continually increase your expose in the searches.',
    lines: '85-118',
  },
];

const WhySeo: React.FC = () => {
  const [activeItem, setActiveItem] = useState(items[0]);
  const [isVisible, setIsVisible] = useState(false);

  const { setVisible, bindings } = useModal();

  const handleChange = (value: any) => {
    setActiveItem(items[value - 1]);
  };

  const handleNext = () => {
    setActiveItem(items.find((item) => item.id === activeItem.next));
    setVisible(true);
  };

  const handlePrev = () => {
    setActiveItem(items.find((item) => item.id === activeItem.prev));
    setVisible(true);
  };

  return (
    <InView as="section" className="inview-section" onChange={setIsVisible}>
      <Spacer y={10} css={{ '@xsMax': { mt: '$14' } }} />
      <Section css={{ position: 'relative' }}>
        <Title>
          Trust the&nbsp;
          <Title color="green">process</Title>
        </Title>
        <Subtitle>
          Search Engine Optimization (SEO) is the organization of data to
          properly reach the targeted customer base within the search engine
          results. We achieve our results through the process of Integrating
          Schema&apos;s, Keyword Research, On-Page Optimization Techniques, Site
          Organization, Backlinks, and more.
        </Subtitle>
        <Box
          css={{
            position: 'absolute',
            top: '-30%',
            right: '-35%',
            zIndex: '-$1',
            [`.${darkTheme} &`]: {
              top: '-30%',
              left: '-35%',
            },
          }}
        >
          <img
            src="/customization-gradient.svg"
            alt="customization background"
          />
        </Box>
      </Section>
      <Section css={{ position: 'relative' }}>
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
              <NextLink href="/devops/search-engine-optimization">
                <BlockLink color="green">Request SEO Audit</BlockLink>
              </NextLink>
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
                <>
                  <BgGradient color="matrixGreen" />
                  <StyledButton
                    onClick={() => setVisible(true)}
                    color="success"
                    css={{ height: 'fit-content', px: '0px' }}
                  >
                    <StyledImg
                      src={`/images/${activeItem.id}.png`}
                      alt={activeItem.title}
                    />
                  </StyledButton>
                  <Modal
                    scroll
                    width="100%"
                    blur
                    aria-labelledby={`${activeItem.id}-title`}
                    {...bindings}
                    css={{
                      padding: '0px',
                      borderRadius: '0px',
                      boxShadow: 'none',
                    }}
                  >
                    <Modal.Body
                      css={{
                        padding: '0px',
                        borderRadius: '11px',
                      }}
                    >
                      <PageNav
                        auto
                        title={activeItem.prev}
                        onClick={handlePrev}
                        selector="left"
                      >
                        <ChevronLeft
                          size={24}
                          fill="#16181A"
                        />
                      </PageNav>
                      <StyledImg
                        onClick={() => setVisible(false)}
                        src={`/images/${activeItem.id}.png`}
                        alt={activeItem.title}
                        className={cn({
                          active: activeItem.id === activeItem.id,
                        })}
                        css={{
                          mb: '0px',
                        }}
                      />
                      <PageNav
                        auto
                        title={activeItem.next}
                        onClick={handleNext}
                        selector="right"
                      >
                        <ChevronRight
                          size={24}
                          fill="#16181A"
                        />
                      </PageNav>
                    </Modal.Body>
                  </Modal>
                </>
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

export default WhySeo;
