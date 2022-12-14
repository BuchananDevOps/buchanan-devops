import {
  Button,
  Modal,
  useModal,
  Text,
  Grid,
  Spacer,
  Row,
} from '@nextui-org/react';
import { StyledImg } from '@primitives';
import { darkTheme, lightTheme } from '@theme/shared';
import { pulse } from '@utils/animations';

interface DappButtonProps {}

interface DappPossibilitiesProps {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  color: string;
}

export default function DappFeaturesModal({
  title,
  description,
  benefits,
  icon,
  color,
}: DappPossibilitiesProps) {
  const { setVisible, bindings } = useModal();

  return (
    <>
      <Button
        auto
        css={{
          bg: '$gray50',
          color: '$text',
          maxH: '45px',
          px: '$6',
          '@mdMax': {},
          '& .nextui-button-icon': {
            mr: '$2',
          },
          '& .nextui-button-icon svg': {
            transition: '$default',
          },
          '&:hover': {
            '& .nextui-button-icon img': {
              animation: `${pulse} 1s infinite`,
            },
          },
          [`.${lightTheme} &`]: {
            bg: 'rgba(51, 51,51,0.12)',
            '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))':
              {
                bf: 'saturate(180%) blur(14px)',
              },
          },
          [`.${darkTheme} &`]: {
            bg: 'rgba(51, 51,51,0.7)',
            '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))':
              {
                bf: 'saturate(180%) blur(14px)',
              },
          },
        }}
        onClick={() => setVisible(true)}
        icon={<StyledImg width={20} src={icon} alt={title} />}
      >
        {title}
      </Button>
      <Modal
        closeButton
        blur
        {...bindings}
        aria-labelledby="dapp-`{title}`-modal"
        aria-describedby="dapp-`{description}`"
      >
        <Modal.Header>
          <Text h3>{title}</Text>
        </Modal.Header>
        <Modal.Body>
          <Text>{description}</Text>
          <Spacer y={1} />
          <Grid.Container gap={2}>
            {benefits.map((benefit) => (
              <Grid
                css={{
                  [`.${lightTheme} &`]: {
                    bg: '#68707614',
                    color: '$text',
                    padding: '10px',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    margin: '5px',
                  },
                  [`.${darkTheme} &`]: {
                    bg: '#232c3a',
                    color: '$text',
                    padding: '10px',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    margin: '5px',
                  },
                }}
              >
                <Text>{benefit}</Text>
              </Grid>
            ))}
          </Grid.Container>
        </Modal.Body>
      </Modal>
    </>
  );
}
