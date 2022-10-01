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
import { DevopsForm, Mail, Video } from '@components';
import { pulse } from '@utils/animations';
import { darkTheme } from '@theme/shared';

export default function ScheduleZoom() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };
  return (
    <div>
      <Button
        auto
        onClick={handler}
        icon={<Video filled size={20} fill="var(--nextui-colors-cyan300)" />}
        css={{
          bg: '$gray50',
          color: '$text',
          maxH: '38px',
          px: '$6',
          '@mdMax': {},
          '& .nextui-button-icon': {
            mr: '$2',
          },
          '& .nextui-button-icon svg': {
            transition: '$default',
          },
          '&:hover': {
            '& .nextui-button-icon svg': {
              animation: `${pulse} 1s infinite`,
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
      >
        Get in Touch
      </Button>

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
