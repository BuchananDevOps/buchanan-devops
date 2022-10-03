import { Grid, Text } from '@nextui-org/react';
import { Section } from '@primitives';
import { DappFeaturesModal } from '@components';
import React from 'react';
import dappContent from '../../../../content/dapps';

const DappPossibilities: React.FC = () => {
  return (
    <Section>
      <Grid.Container gap={0.5}>
        {dappContent.dappPossibilities.map((dapp) => (
          <Grid>
            <DappFeaturesModal
              icon={dapp.icon}
              title={dapp.title}
              description={dapp.description}
              benefits={dapp.benefits}
              color={''}
            />
          </Grid>
        ))}
      </Grid.Container>
    </Section>
  );
};

export default DappPossibilities;
