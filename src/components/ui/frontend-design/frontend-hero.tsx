import { Row, Spacer, Text } from '@nextui-org/react';
import { Section, HeroImgBackground } from '@primitives';

const FrontendHero: React.FC = () => {
  return (
    <Section css={{}}>
      <Spacer y={7} />
      <Row justify="center">
        <Text h1 css={{ fontSize: '4rem' }}>
          UI/UX - Frontend Design
          <Text>
            Our first step, developing the user interface (UI) and user
            experience (UX) of your web app. The preliminary design gives us a
            clear idea of what your web app will look like along with what
            functionality will be required. We then create a minimal viable
            product (MVP) to test the design and functionality along with the
            user experience. We then iterate and improve the design and
            functionality based on the feedback we receive from your company on
            the MVP. To address the content below, understand, there are two
            types of &quot;packages&quot;. Either your providing information about your
            business and services, or you have a tangible product that you want
            to sell. It&apos;s that simple.
          </Text>
        </Text>
      </Row>
    </Section>
  );
};

export default FrontendHero;
