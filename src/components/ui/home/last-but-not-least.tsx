import React from 'react';
import { Row, Spacer } from '@nextui-org/react';
import landingContent from '../../../../content/landing';
import { FeaturesGrid, Section, Title, Subtitle } from '@components';

const LastButNotLeastSection = () => {
  return (
    <Section css={{ zIndex: '$10' }}>
      <Spacer y={6} css={{ '@xsMax': { mt: '$14' } }} />
      <Row justify="center">
        <Title>Buchanan&nbsp;</Title>
        <Title color="warning">DevOps&nbsp;</Title>
      </Row>
      <Row justify="center">
        <Title>Digital&nbsp;</Title>
        <Title color="pink">Development.</Title>
      </Row>
      <Row justify="center">
        <Subtitle css={{ textAlign: 'center' }}>
          Full-Stack App Development &amp; Digital Marketing.
        </Subtitle>
      </Row>
      <FeaturesGrid features={landingContent.fullFeatures} />
    </Section>
  );
};

export default LastButNotLeastSection;
