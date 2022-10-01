import React from 'react';
import { Container, Row, Text, Link, CSS, Spacer } from '@nextui-org/react';

export interface Props {
  css?: CSS;
  containerCss?: CSS;
}

const Footer: React.FC<Props> = ({ css, containerCss }) => {
  const year = new Date().getFullYear();
  return (
    <Container
      fluid
      className="footer__container"
      css={{
        zIndex: '$1',
        padding: '$md $sm',
        '@xsMax': {
          padding: '$sm $xs',
        },
        ...containerCss,
      }}
      gap={2}
    >
      <Row css={css} justify="center">
        <Text
          span
          className="footer__copy"
          css={{
            fontSize: '$xs',
            color: '$accents6',
            '@mdMax': {
              fontSize: '$xs',
            },
          }}
        >
          &copy;&nbsp;Copyright&nbsp;{year}&nbsp;BuchananDevops
        </Text>
        <Spacer x={0.5} />
        <Text
          span
          className="footer__by"
          css={{
            fontSize: '$sm',
            color: '$accents7',
            dflex: 'center',
          }}
        ></Text>
      </Row>
      <Row css={css} justify="center"></Row>
    </Container>
  );
};

export default Footer;
