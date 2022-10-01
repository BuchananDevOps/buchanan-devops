import { Spacer, Text } from '@nextui-org/react';
import cn from 'classnames';
import {
  AngledGradient,
  AngledGradientWrapper,
  AngledSectionHeader,
} from './styles';

const AngledGradientHeading: React.FC = () => {
  return (
    <>
      <AngledSectionHeader css={{ marginTop: '150px' }}>
        <AngledGradientWrapper>
          <AngledGradient />
          <Text h2 css={{ justifyItems: 'center' }}>
            Analytics and Data
          </Text>
        </AngledGradientWrapper>
      </AngledSectionHeader>
    </>
  );
};

export default AngledGradientHeading;
