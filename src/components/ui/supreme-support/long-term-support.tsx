import { InView } from 'react-intersection-observer';
import { Spacer, Text, Row } from '@nextui-org/react';
import { Title, Subtitle, StyledImg } from '@components';
const LongTermSupportSection: React.FC = () => {
  return (
    <InView as="section" className="inview-section">
      <Spacer y={5} css={{ '@xsMax': { mt: '$14' } }} />
      <Row justify="flex-start">
        <Title>Long Term</Title>
        <Spacer x={0.5} />
        <Title color="cyan">Support.</Title>
      </Row>
      <Subtitle>
        We don&apos;t just build your website and leave you to it. We provide long
        term support and maintenance for all of our clients. We&apos;ll keep your
        website up to date and secure so you can focus on running your business.
      </Subtitle>
      <Spacer y={3} css={{ '@xsMax': { mt: '$14' } }} />
    </InView>
  );
};

export default LongTermSupportSection;
