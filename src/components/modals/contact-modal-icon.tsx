import React from 'react';
import {
  Modal,
  Input,
  Row,
  Checkbox,
  Button,
  Text,
  Tooltip,
} from '@nextui-org/react';
import { DevopsForm, Mail, UserIcon } from '@components';
import { pulse } from '@utils/animations';
import { darkTheme, lightTheme } from '@theme/shared';
import { ConnectKitButton } from 'connectkit';

const Web3Login = () => {
  return (
    <ConnectKitButton.Custom>
      {({
        isConnected,
        isConnecting,
        show,
        hide,
        address,
        truncatedAddress,
        ensName,
      }) => {
        return (
          <Button
            onClick={show}
            auto
            icon={
              <UserIcon filled size={20} fill="var(--nextui-colors-green800)" />
            }
            css={{
              bg: '$gray50',
              color: '$text',
              maxH: '38px',
              px: '$6',
              '@mdMax': {},
              '& .nextui-button-icon': {
                mr: '$0',
              },
              '& .nextui-button-icon svg': {
                transition: '$default',
              },
              '&:hover': {
                '& .nextui-button-icon svg': {
                  animation: `${pulse} 1s infinite`,
                },
              },
              [`.${lightTheme} &`]: {
                bg: 'rgba(16, 137,68,0.18)',
                '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))':
                  {
                    bf: 'saturate(180%) blur(14px)',
                  },
              },

              [`.${darkTheme} &`]: {
                bg: 'rgba(16, 137,68,0.16)',
                '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))':
                  {
                    bf: 'saturate(180%) blur(14px)',
                  },
              },
            }}
          >
            {isConnected ? truncatedAddress : ''}
          </Button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};

export default function ContactIcon() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };
  return (
    <div>
      <Button.Group>
        <Button
          auto
          onClick={handler}
          icon={<Mail filled size={20} fill="var(--nextui-colors-cyan600)" />}
          css={{
            bg: '$gray50',
            color: '$text',
            maxH: '38px',
            px: '$6',
            '@mdMax': {},
            '& .nextui-button-icon': {
              mr: '$0',
            },
            '& .nextui-button-icon svg': {
              transition: '$default',
            },
            '&:hover': {
              '& .nextui-button-icon svg': {
                animation: `${pulse} 1s infinite`,
              },
            },
            [`.${lightTheme} &`]: {
              bg: 'rgba(6, 183,219,0.21)',
              '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))':
                {
                  bf: 'saturate(180%) blur(14px)',
                },
            },
            [`.${darkTheme} &`]: {
              bg: 'rgba(6, 183,219,0.14)',
              '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))':
                {
                  bf: 'saturate(180%) blur(14px)',
                },
            },
          }}
        />
        <Web3Login />
      </Button.Group>

      <Modal
        css={{
          bg: '$modalBackground',
        }}
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Get in&nbsp;
            <Text b size={18}>
              Touch
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <DevopsForm />
        </Modal.Body>
      </Modal>
    </div>
  );
}
