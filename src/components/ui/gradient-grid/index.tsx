import { useMediaQuery } from '@hooks/use-media-query';
import { Col, Grid, Card, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { StyledImg, } from '@primitives';

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
        <Grid xs={12} md={12} lg={4}>
          <Card className="gradient__card" onClick={handleClick}>
            <StyledImg src={src} alt={title} />
            <Text h3>{title}</Text>
            <Text >{description}</Text>
          </Card>

        </Grid>
    </Grid.Container>

  );
};

export default GradientGrid;
