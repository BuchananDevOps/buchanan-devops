import { Grid, Text, Row, Card } from '@nextui-org/react';
import { ProcessItem } from './styles';
import { Section } from '@primitives';
import fullStackContent from '@content/full-stack';
import { GradientGrid } from '@components';


const Process: React.FC = () => {
  return (
    <Section>
      <Row justify="center">
       <GradientGrid title={'Testing'} description={'Testing'} />
        
      </Row>
    </Section>

  );
};

export default Process;
