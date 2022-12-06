import React from 'react';
import { Modal, Text } from '@nextui-org/react';
import { DevopsForm, HeroButton } from '@components';

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };
  return (
    <div>
      <HeroButton css={{width: '100%'}} color="white" onClick={handler}>Request Estimate</HeroButton>

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
            Request an&nbsp;
            <Text b size={18}>
              SEO Audit
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
