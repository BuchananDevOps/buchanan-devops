import { Grid, Text, Row } from '@nextui-org/react';
import { ProcessItem } from './styles';

const items = [
  {
    title: 'Consultation',
    number: '00',
    description:
      'We start by getting to know you and your business. We’ll ask questions, listen, and learn about your goals and challenges. We’ll also learn about your customers and your competitors. We’ll also learn about your customers and your competitors.',
  },
  {
    title: 'Discovery',
    number: '01',
    price: '$949',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Prototype Testing',
    number: '02',
    price: '$949',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Visual UX/UI Design',
    number: '03',
    price: '$949',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Frontend UI Prototype',
    number: '04',
    price: '$949',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Backend Development',
    number: '05',
    price: '$949',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const Process: React.FC = () => {
  return (
    <Grid.Container
      gap={2}
      justify="center"
      css={{ marginTop: '150px', marginBottom: '150px' }}
    >
      {items.map((item, index) => (
        <Grid key={`${item.title}_${index}`} xs={12} sm={6} md={6} lg={4}>
          <ProcessItem css={{}}>
            <Row align="center">
              <div className="icon-wrapper">{item.number}</div>
              <Text
                className="feature-title"
                css={{
                  my: 0,
                  fontSize: '1.1rem',
                  fontWeight: '$semibold',
                  ml: '$4',
                }}
              >
                {item.title}
              </Text>
            </Row>
            <Row align="center" css={{ px: '$2', pt: '$4', pb: '$2' }}>
              <Text
                className="feature-description"
                css={{ color: '$accents8' }}
              >
                {item.description}
              </Text>
            </Row>
          </ProcessItem>
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default Process;
