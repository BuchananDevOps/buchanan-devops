import { Col, Container, Row, Text } from '@nextui-org/react';

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
            <Text h6>Most projects billed at 30 hours a week for 10 weeks</Text>
          </Text>
        </Col>
      </Row>
    </Container>
  );
};
export default Pricing;
