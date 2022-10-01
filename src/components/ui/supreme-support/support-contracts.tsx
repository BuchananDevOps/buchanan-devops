import { Card, Grid, Text, Spacer } from '@nextui-org/react';

const items = [
  {
    title: 'App Maintenance',
    description:
      'One time maintenance of your package to update software, fix bugs, and improve performance.',
    price: '$160-$210/hr',
  },
  {
    title: 'Retained Support',
    description:
      'Month to month support of your package where we monitor and maintain your package automatically.',
    price: '$3,000/mo - $5,000/mo',
  },
  {
    title: 'Full Coverage Support',
    description:
      'Full coverage support includes all of the features of Retained Support plus additional search engine marketing.',
    price: 'Contact for Pricing',
  },
];

const SupportContracts: React.FC = () => {
  return (
    <Grid.Container gap={2}>
      {items.map((item) => (
        <Grid xs={12} md={4} key={item.title}>
          <Card
            css={{
              padding: '1rem',
            }}
          >
            <Card.Header>
              <Text h4>{item.title}</Text>
            </Card.Header>
            <Card.Body>
              <Text h3>{item.price}</Text>
              <p>{item.description}</p>
            </Card.Body>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default SupportContracts;
