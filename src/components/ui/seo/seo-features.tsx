import {
  Row,
  Col,
  CSS,
  Text,
  Spacer,
  Grid,
  GridProps,
} from '@nextui-org/react';
import { Section } from '@primitives';
import { useState } from 'react';
import { InView } from 'react-intersection-observer';

export interface SeoFeatureItem {
  title: string;
  description: string;
  icon: string;
}

interface Props {
  features?: SeoFeatureItem[];
  xs?: GridProps['xs'];
  sm?: GridProps['sm'];
  lg?: GridProps['lg'];
  css?: CSS;
  itemCss?: CSS;
}

export type SeoFeaturesProps = Props & GridProps;

const defaultProps = {
  xs: 12,
  sm: 4,
  lg: 3,
};

const SEOFeatures: React.FC<SeoFeaturesProps> = ({
  features = seoFeatures,
  xs,
  sm,
  lg,
  css,
  itemCss,
  ...props
}) => {
  const [ref, inView] = useState(false);
  const [animation, setAnimation] = useState(false);

  const handleInView = (inView: boolean) => {
    if (inView) {
      setAnimation(true);
    }
  };

  return (
    <Section>
      <Grid.Container gap={2} css={{ px: 0, ...(css as any) }} {...props}>
        <Grid xs={12}>
          <Text h2>SEO Features</Text>
          <Spacer y={1} />
          <Text p>
            We offer a wide range of SEO services to help your business rank
            higher in search engines.
          </Text>
        </Grid>
        <InView as="div" onChange={handleInView} triggerOnce>
          <Grid.Container gap={2}>
            {features.map((feat, index) => (
              <Grid key={`${feat.title}_${index}`} xs={xs} sm={sm} lg={lg}>
                <SeoFeatureItem
                  title={feat.title}
                  description={feat.description}
                  icon={feat.icon}
                  animation={animation}
                />
              </Grid>
            ))}
          </Grid.Container>
        </InView>
      </Grid.Container>
    </Section>
  );
};

SEOFeatures.defaultProps = defaultProps;

export default SEOFeatures;
