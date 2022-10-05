import { Text, styled, Container, Row } from '@nextui-org/react';
import { Section, AnimatedText, AnimatedTitle, Title } from '@primitives';
import { GradientHero, StyledTitle } from './styles';
import { spin, spin2 } from '@utils/animations';
import { Sparkles } from '@components';

export default function SeoHero() {
  return (
    <Container
      alignItems="center"
      as="section"
      className="hero__container"
      css={{
        position: 'relative',
        height: 'calc(60vh - 76px)',
        '@xsMax': {
          height: 'calc(50vh - 64px)',
        },
      }}
      display="flex"
      gap={0}
      justify="space-between"
      lg={true}
      wrap="nowrap"
    >
      <Section css={{ position: 'relative' }}>
        <Container>
          <Row justify="center">
            <Text
              css={{
                fontSize: '5rem',
                textAlign: 'center',
                '@xsMax': {
                  fontSize: '3rem',
                },
              }}
              h1
            >
              Search Engine
              <GradientHero>Optimization</GradientHero>
            </Text>
          </Row>
        </Container>
      </Section>
    </Container>
  );
}
