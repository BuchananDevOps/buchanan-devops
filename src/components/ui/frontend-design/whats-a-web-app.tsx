import { Grid, Spacer, Text } from '@nextui-org/react';
import { Section, StyledImg } from '@primitives';

const WhatsAWebApp: React.FC = () => {
  return (
    <Section>
      <Spacer y={7} />
      <Grid.Container gap={2}>
        <Grid xs={12} sm={6} lg={6}>
          <Text h3>
            Static Sites (SSG)
            <Text>
              Static sites are blazing fast, require no server maintenance, and
              are easy to deploy. They are perfect for marketing sites,
              professional services, and general informational websites. Static
              sites are built for preformance and search engine indexability. By
              far the best option for small to medium size companies who just
              want to get their product or service out there and gain traction
              in the search engines.
            </Text>
            <Text></Text>
          </Text>
        </Grid>
        <Grid xs={12} sm={6} lg={6}>
          <StyledImg
            src="/content/pwa.svg"
            alt="Progressive Web Application Display Image"
          />
          <Text h3>
            Progressive Web Apps (PWA)
            <Text>
              The difference between a website and a web app is that a web app
              is interactive. It allows you to do things like create an account,
              log in, and interact with other users. A web app is a website that
              has a backend. The backend is the part of the website that you
              don't see. It's the part that stores your information and allows
              you to interact with other users. The backend is what makes a
              website a web app.
            </Text>
            <Text></Text>
          </Text>
        </Grid>
      </Grid.Container>
    </Section>
  );
};

export default WhatsAWebApp;
