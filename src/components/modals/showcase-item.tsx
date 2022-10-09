import {
  Modal,
  useModal,
  Button,
  Text,
  Spacer,
  Row,
  Grid,
} from '@nextui-org/react';
import { StyledImg } from '@primitives';
import { darkTheme } from '@theme/shared';
import { pulse } from '@utils/animations';
import Image from 'next/image';
import NextLink from 'next/link';
import Router, { useRouter } from 'next/router';
import { Github, View } from '@components';

interface ShowcaseItemProps {
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
}

export default function ShowcaseItem({
  title,
  description,
  image,
  link,
  github,
}: ShowcaseItemProps) {
  const { setVisible, bindings } = useModal();
  const router = useRouter();
  const viewItem = () => {
    window.open(link, '_blank');
  };
  const viewGithub = () => {
    window.open(github, '_blank');
  };
  return (
    <>
      <Button
        ghost
        shadow
        color="success"
        css={{
          width: 'auto',
          height: 'fit-content',
          paddingLeft: '0px',
          paddingRight: '0px',
        }}
        onClick={() => setVisible(true)}
      >
        <StyledImg
          src={image}
          alt={title}
          className="showcase-item-`${title}`"
          css={{
            borderRadius: '10px',
            shadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          }}
        />
      </Button>
      <Modal
        width="100%"
        closeButton
        aria-labelledby={title}
        aria-describedby={description}
        {...bindings}
      >
        <Modal.Header>
          <Text id="Showcase Item Title" size={18}>
            {title}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <StyledImg
            src={image}
            alt={title}
            className="showcase-item-`${title}`"
          />
        </Modal.Body>
        <Modal.Footer justify="center">
          <NextLink href={link} title={title} target="_blank" passHref>
            <Button
              auto
              onClick={viewItem}
              icon={
                <View filled size={20} fill="var(--nextui-colors-cyan300)" />
              }
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
              {link}
            </Button>
          </NextLink>
          {github && (
            <NextLink href={github} title={title} target="_blank" passHref>
              <Button
                auto
                onClick={viewGithub}
                icon={<Github size={20} fill="var(--nextui-colors-cyan300)" />}
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
                Github Repo
              </Button>
            </NextLink>
          )}
          <Button auto flat color="error" onClick={() => setVisible(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
