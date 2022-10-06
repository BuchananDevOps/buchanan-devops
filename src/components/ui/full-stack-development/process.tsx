import { Feature }from '@components';
import { Grid, Text, Row, Card, Container, styled } from '@nextui-org/react';
import { GradientCard } from '@primitives';


const featureItem = [
  {
    id: 1,
    title: 'Principal Engineering',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: '/delamure/icons/bar-chart-icon-dark-v3.svg',
    href: '/services/principal-engineering',
  },
  { 
    title: 'Realistic Roadmap',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: '/delamure/icons/checkbox-icon-dark-v3.svg',
    href: '/services/realistic-roadmap',
  },
  {
    title: 'Exceptional Experiences',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: '/delamure/icons/boost-icon-dark-v3.svg',
    href: '/full-stack-development',
  },
];



const Process: React.FC = () => {

  
  return (
    <Container
      as="section"
      className="process__container"
      css={{
        position: 'relative',
        height: 'calc(100vh - 76px)',
        '@xsMax': {
          height: 'calc(100vh - 64px)',
        },
      }}
    >
          <Grid.Container gap={2} justify="center" alignItems="center">
            {featureItem.map((item) => (
              <Grid xs={12} sm={12} md={4} lg={4} xl={4} key={item.id}>
                <Feature
                 title={item.title}
                 type="artifact"
                  description={item.description}
                  icon={item.icon}
                  href={item.href}
                 />
              </Grid>
            ))}
            </Grid.Container>
      
    </Container>
  );
};

export default Process;
