import { Col, Container, Row, Text } from '@nextui-org/react';
import devopsContent from '@content/devops';
import { FeaturesGrid } from '@components';
const IntroDevelopSection = () => {
  return (
    <Container css={{ maxWidth: '1000px' }}>
      <Col className="sub-header_col">
        <Row
          css={{
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <span className="path-line"></span>
        </Row>
        <Row
          css={{
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <span className="section-label-number">2</span>
        </Row>
        <Row
          css={{
            justifyContent: 'center',
            textAlign: 'center',
            marginBottom: '1.5rem',
          }}
        >
          <Text
            css={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundImage: 'linear-gradient(90deg, #9A1FB8, #FF0080)',
              fontWeight: 'bolder',
              '@xsMax': {
                fontSize: '2rem',
              },
            }}
            h2
          >
            App Development
          </Text>
        </Row>

        <Row
          css={{
            justifyContent: 'center',
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          <Text
            css={{
              fontSize: '3.75rem',
              letterSpacing: '-.05em',
              '@xsMax': { fontSize: '2.5rem' },
            }}
            h1
          >
            Make your design dynamic
          </Text>
        </Row>
        <Row
          css={{
            marginLeft: '40px',
            marginRight: '40px',
            '@xsMax': {
              marginLeft: '0px',
              marginRight: '0px',
            },
          }}
        >
          <Col>
            <Text css={{ color: '#888', marginTop: '-40px' }}>
              Development Operations, "DevOps" for short requires strategy and
              intent for your companies technical challenges. Under our DevOps
              model, development professionals are merged into single team where
              the engineers work across the entire application lifecycle while
              supporting and maintaining the project after production
              deployment. By sticking with your initial DevOps professionals,
              your long term support costs are significantly lower than
              onboarding new developers for each issue that may arise.{' '}
            </Text>
          </Col>
        </Row>
      </Col>
      <FeaturesGrid features={devopsContent.devopsFeatures} />
      <style jsx>{`
        .path-line {
          height: 100px;
          width: 1px;
          background: linear-gradient(#000, #9a1fb8);
        }
        .section-label-number {
          display: inline-felx;
          border-radius: 100%;
          color: #000;
          width: 40px;
          height: 40px;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          margin-bottom: 24px;
          padding-top: 8px;
          background: linear-gradient(90deg, #9a1fb8, #ff0080);
        }
      `}</style>
    </Container>
  );
};

export default IntroDevelopSection;
