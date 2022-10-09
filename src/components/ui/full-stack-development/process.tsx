import {
  Feature,
  SummaryBannerWrapper,
  StyledCardBlur,
  Section,
} from '@components';
import {
  Grid,
  Text,
  Row,
  Card,
  Container,
  styled,
  Spacer,
} from '@nextui-org/react';

const Process: React.FC = () => {
  return (
    <Section css={{ zIndex: '$10' }}>
      <Spacer y={6} css={{ '@xsMax': { mt: '$16' } }} />

      <Container
        lg
        css={{
          ml: 0,
          mr: 0,
          py: '$8',
          '@xsMax': {
            px: '$4',
          },
        }}
      ></Container>
    </Section>
  );
};

export default Process;
