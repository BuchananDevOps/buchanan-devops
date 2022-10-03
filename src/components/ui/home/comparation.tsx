import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { Grid, Row, Col, Spacer, Text } from '@nextui-org/react';
import { Blockholder, Section, Title, Subtitle, StyledImg } from '@components';
import Image from 'next/image';

const ComparationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <InView as="section" className="inview-section" onChange={setIsVisible}>
      <Spacer y={10} css={{ '@xsMax': { mt: '$14' } }} />
      <Section css={{ zIndex: '$10' }}>
        <Row justify="flex-start">
          <Title>Spend</Title>
          <Spacer x={0.5} />
          <Title color="cyan">less.</Title>
        </Row>
        <Row justify="flex-start">
          <Title>Achieve</Title>
          <Spacer x={0.5} />
          <Title color="warning">more.</Title>
        </Row>
        <Subtitle>
          The numbers don&apos;t lie, with our strategy for development and
          digital marketing we&apos;ve seen our clients achieve astounding
          results. Using our proven process, we can help you achieve the same
          results.
        </Subtitle>
        <Grid.Container css={{ marginTop: '40px' }} gap={1.5}>
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
                dflex: 'center',
                fd: 'column',
                h: '100%',
              }}
            >
              <StyledImg
                src="/images/digital-marketing-analytics.png"
                className="notify-gradient"
                alt="Search Engine Marketing Results"
                css={{
                  borderRadius: '10px',
                  shadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }}
              />
              <Text css={{ color: '$text', fontSize: '$xl' }}>SEM Results</Text>
            </Col>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            css={{
              pr: 0,
              '@xsMax': {
                pl: '0',
              },
            }}
          >
            <Col css={{ dflex: 'center', fd: 'column', h: '100%' }}>
              <StyledImg
                src="/images/digital-marketing-snapshot.png"
                className="notify-gradient"
                alt="Ecommerce Marketing Results"
                css={{
                  borderRadius: '10px',
                  shadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }}
              />
              <Text css={{ color: '$text', fontSize: '$xl' }}>
                E-Commerce Results
              </Text>
            </Col>
          </Grid>
        </Grid.Container>
      </Section>
    </InView>
  );
};

export default ComparationSection;
