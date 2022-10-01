import { useEffect, useState, useMemo, Fragment } from 'react';
import useAxios from 'axios-hooks';
import {
  Input,
  Textarea,
  Button,
  Grid,
  useInput,
  Modal,
} from '@nextui-org/react';
import { useRouter } from 'next/router';

const DevopsForm = () => {
  const { value, reset, bindings } = useInput('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [pageUri, setPageUri] = useState<string>();
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };

  const validateEmail = (value: string) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = useMemo(() => {
    if (!value)
      return {
        text: '',
        color: '',
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? 'Correct email' : 'Enter a valid email',
      color: isValid ? 'success' : 'error',
    };
  }, [value]);
  const [{ data, loading, error }, refetch] = useAxios(
    {
      url: '/api/contact',
      method: 'POST',
      data: { firstname, lastname, email, phone, company, message, pageUri },
    },
    { manual: true }
  );

  useEffect(() => {
    if (data?.success === true && !loading) {
      setFirstname('');
      setLastname('');
      setEmail('');
      setPhone('');
      setCompany('');
      setMessage('');
    }
  }, [data?.success, loading, error]);

  useEffect(() => {
    setPageUri(window.location.href);
  });

  const handlePortfolio = () => {
    closeHandler();
    router.push('/portfolio');
  };

  return (
    <>
      {!data?.success ? (
        <Grid.Container gap={1.5} css={{ mt: '4px' }}>
          <Grid xs={6}>
            <Input
              bordered
              fullWidth
              aria-label="First Name"
              type={'text'}
              placeholder={'First Name'}
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </Grid>
          <Grid xs={6}>
            <Input
              bordered
              fullWidth
              aria-label="Last Name"
              type={'text'}
              placeholder={'Last Name'}
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </Grid>
          <Grid xs={12}>
            <Input
              {...bindings}
              bordered
              fullWidth
              clearable
              shadow={false}
              onClearClick={reset}
              helperText={helper.text}
              aria-label="Email"
              type={'email'}
              placeholder={'Email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid xs={12}>
            <Input
              bordered
              fullWidth
              aria-label="Phone"
              type={'tel'}
              placeholder={'Phone'}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
          <Grid xs={12}>
            <Input
              bordered
              fullWidth
              aria-label="Company"
              type={'text'}
              placeholder={'Company'}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </Grid>
          <Grid xs={12}>
            <Textarea
              bordered
              minRows={5}
              fullWidth
              aria-label="Message"
              placeholder={'Message'}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <Button
              aria-label="Submit"
              auto
              flat
              ghost
              color={'success'}
              type={'submit'}
              disabled={loading}
              onClick={() => refetch()}
            >
              Submit
            </Button>
          </Grid>
        </Grid.Container>
      ) : (
        <Fragment>
          <Modal.Footer>
            <Grid.Container css={{ mt: '$10' }}>
              <Grid xs={12}>
                <p>
                  Thank you for your interest in our services. We will be in
                  touch shortly.
                </p>
              </Grid>
            </Grid.Container>
            <Button auto flat color="error" onClick={closeHandler}>
              Close
            </Button>
            <Button color="success" auto onClick={handlePortfolio}>
              Portfolio
            </Button>
          </Modal.Footer>
        </Fragment>
      )}
    </>
  );
};
export default DevopsForm;
