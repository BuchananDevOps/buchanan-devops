import { Col, Container, Row, Text } from '@nextui-org/react';
import dynamic from 'next/dynamic';

const DynamicLooperBGDev = dynamic(() => import('../looper-bg-dev'), {
  ssr: true,
});

const Pricing: React.FC = () => {
  return (
    <Container
      as="section"
      css={{
        marginTop: '150px',
        marginBottom: '150px',
      }}
    >
      <Row>
        <Col>
          <Text h1>
            Full-Stack Development
            <Text h6>
              Most popular option for companies looking to develop a frontend
              and backend solution.{' '}
            </Text>
          </Text>
        </Col>
        <Col></Col>
      </Row>

      <DynamicLooperBGDev
        css={{
          zIndex: '0',
          position: 'absolute',
          transform: 'translate(0%, -35%)',
        }}
      />
    </Container>
  );
};
export default Pricing;
