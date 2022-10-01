import React from 'react';
import {
  Card,
  Avatar,
  Grid,
  Text,
  Row,
  Progress,
  StyledProgressBar,
  CSS,
  Input,
  useInput,
  Button,
} from '@nextui-org/react';
import {
  Box,
  Heart,
  Play,
  Rewind5s,
  Forward5s,
  NextTrack,
  PreviousTrack,
} from '@components';

export interface Props {
  className?: string;
  css?: CSS;
}

const QuickContact: React.FC<Props> = ({ css, ...props }) => {
  const [liked, setLiked] = React.useState(false);
  const { value, reset, bindings } = useInput('');

  const validateEmail = (value: any) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = React.useMemo(() => {
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
  return (
    <Card
      css={{
        width: '320px',
        backgroundColor: '$logoBackground',
        p: '$6',
        mt: '$8',
        boxShadow: '$sm',
        borderRadius: '$lg',
        ...css,
      }}
      {...props}
    >
      <Card.Header css={{ d: 'flex', ai: 'center', py: '$8' }}>
        <Grid.Container>
          <Grid>
            <Row>
              <Text b size={16}>
                Schedule Consultaion
              </Text>
            </Row>
            <Heart
              css={{
                cursor: 'pointer',
                position: 'absolute',
                top: '$9',
                right: '$10',
              }}
              fill="#FF4ECD"
              filled={liked}
              onClick={() => setLiked(!liked)}
            />
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ mt: '$1', py: '$1' }}>
        <Grid.Container>
          <Grid>
            <Input width="112px" label="Time" type="time" css={{ mr: '$4' }} />
          </Grid>
          <Grid>
            <Input width="112px" label="Date" type="date" />
          </Grid>
          <Grid xs={12}>
            <Input
              {...bindings}
              clearable
              fullWidth
              shadow={false}
              onClearClick={reset}
              helperText={helper.text}
              type="email"
              label="Email"
              placeholder="Enter your email"
            />
          </Grid>
        </Grid.Container>
      </Card.Body>
      <Card.Footer css={{ pt: '$2', color: '$text', pb: '$8' }}>
        <Button auto ghost color="primary" type="submit">
          Schedule
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default QuickContact;
