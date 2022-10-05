import { useMediaQuery } from '@hooks/use-media-query';
import { Col, Grid, Card, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { StyledImg, SupportCard } from '@primitives';

interface GradientGridProps {
  src?: string;
  title: string;
  description: string;
  href?: string;
}

const GradientGrid: React.FC<GradientGridProps> = ({
  src,
  title,
  description,
  href,
}) => {
  const isMobile = useMediaQuery(960);
  const router = useRouter();
  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <Grid.Container gap={2} justify="center">
        <Grid xs={12} md={6} lg={4}>
            <SupportCard cards="security">
                <Text>Testing Card</Text>
            </SupportCard>
        </Grid>
        <Grid>
            <StyledImg width={1500} src="/gradients/cicd-bg.svg" />
        </Grid>
    </Grid.Container>

  );
};

export default GradientGrid;
