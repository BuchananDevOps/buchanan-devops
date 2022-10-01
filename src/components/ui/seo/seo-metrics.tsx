import { Box } from '@components';
import { Container, Grid, Spacer, Text } from '@nextui-org/react';
import { useState } from 'react';
import { InView } from 'react-intersection-observer';

const data = [
  {
    id: 'organic-traffic',
    title: 'Organic Traffic',
    number: '1,000',
    description:
      'Organic traffic is the number of visitors that come to your website through unpaid search results.',
  },
];

const SeoMetrics: React.FC = () => {
  const [activeItem, setActiveItem] = useState(data[0]);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <InView as="section" className="inview-section" onChange={setIsVisible}>
      <Spacer y={1} css={{ '@xsMax': { mt: '$14' } }} />
      <Grid.Container gap={2}>
        {data.map(({ id, title, number, description }) => (
          <Grid xs={12} sm={6} md={3} key={id}>
            <Container
              style={{
                padding: '1rem',
                borderRadius: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <Box
                css={{
                  boxShadow:
                    '0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Text h2>{number}</Text>
                <Text>{title}</Text>
                <Text>{description}</Text>
              </Box>
            </Container>
          </Grid>
        ))}
      </Grid.Container>
    </InView>
  );
};

export default SeoMetrics;
