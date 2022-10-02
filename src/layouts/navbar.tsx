import React, { useState, useEffect } from 'react';
import {
  Logo,
  MenuToggle,
  Badge,
  Twitter,
  Discord,
  Github,
  ThemeToggle,
  Heart,
  NotifyBanner,
  ContactModal,
  UserIcon,
  ContactIcon,
} from '@components';
import { Box } from '@components';
import cn from 'classnames';
import NextLink from 'next/link';
import dynamic from 'next/dynamic';
import {
  Row,
  Col,
  Spacer,
  Link,
  Button,
  Container,
  useBodyScroll,
  Dropdown,
} from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@hooks/use-media-query';
import { isActive } from '@utils/links';
import { includes } from 'lodash';
import { darkTheme } from '@theme/shared';
import { pulse } from '@utils/animations';
import { icons } from './icons.js';

import { StyledNavContainer, StyledNavMainContainer } from './styles';

export interface Props {
  hasNotify?: boolean;
  isHome?: boolean;
}

const MobileNavigation = dynamic(
  () => import('../components/ui/mobile-navigation'),
  {
    ssr: false,
  }
);

const Navbar: React.FC<Props> = ({ isHome, hasNotify }) => {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const isMobile = useMediaQuery(960);
  const [, setBodyHidden] = useBodyScroll(null, { scrollLayer: true });
  const [scrollPosition, setScrollPosition] = useState(0);

  const isDetached = hasNotify ? scrollPosition > 40 : scrollPosition > 0;

  useEffect(() => {
    setScrollPosition(
      (typeof window !== 'undefined' && window.pageYOffset) || 0
    );
    window.addEventListener('scroll', onScroll.bind(this));

    return () => {
      window.removeEventListener('scroll', onScroll.bind(this));
    };
  }, []);

  const onScroll = () => {
    requestAnimationFrame(() => {
      setScrollPosition(window.pageYOffset);
    });
  };

  useEffect(() => {
    if (!isMobile) {
      setExpanded(false);
      setBodyHidden(false);
    }
  }, [isMobile]);

  const onToggleNavigation = () => {
    setExpanded(!expanded);
    isMobile && setBodyHidden(!expanded);
  };

  const showBlur = !!expanded || !!isDetached || isHome;

  return (
    <StyledNavMainContainer id="navbar-container">
      <NotifyBanner text="Full-Stack DevOps" href="/full-stack-applications" />
      <StyledNavContainer isDetached={isDetached} showBlur={showBlur}>
        <Container
          alignItems="center"
          as="nav"
          display="flex"
          lg={true}
          wrap="nowrap"
        >
          <Col
            className="navbar__logo-container"
            css={{
              '@mdMax': {
                width: '100%',
              },
            }}
          >
            <Row align="center" justify="flex-start">
              <NextLink href="/">
                <Link href="/">
                  <Logo
                    auto
                    className="navbar__logo"
                    css={{
                      cursor: 'pointer',
                      transition: '$default',
                    }}
                  />
                </Link>
              </NextLink>
              <Spacer x={0.4} />
              <Badge
                solid
                css={{
                  px: '$4',
                  '@mdMax': {
                    display: 'none',
                  },
                }}
                type="secondary"
              >
                Team
              </Badge>
            </Row>
          </Col>
          <Col
            className="navbar__resources-container"
            css={{ '@mdMax': { d: 'none' } }}
          >
            <Row align="center" justify="center">
              <Dropdown isBordered>
                <Dropdown.Button
                  auto
                  light
                  className={cn('navbar__link', {
                    active:
                      isActive(router.pathname, '/devops') &&
                      !includes(router.asPath, 'devops'),
                  })}
                  css={{
                    color: '$text',
                    px: 0,
                    fontSize: '16px',
                    fontWeight: 500,
                    dflex: 'center',
                    '&.active': {
                      fontWeight: '600',
                      color: '$primary',
                    },
                  }}
                  iconRight={icons.chevron}
                  ripple={false}
                >
                  DevOps
                </Dropdown.Button>

                <Dropdown.Menu
                  onAction={(actionKey) => {
                    //ts-ignore
                    router.push(`${actionKey}`);
                  }}
                  aria-label="DevOps Services"
                  css={{
                    $$dropdownMenuWidth: '340px',
                    $$dropdownItemHeight: '70px',
                    '& .nextui-dropdown-item': {
                      py: '$4',
                      // dropdown item left icon
                      svg: {
                        color: '$secondary',
                        mr: '$4',
                      },
                      // dropdown item title
                      '& .nextui-dropdown-item-content': {
                        w: '100%',
                        fontWeight: '$semibold',
                      },
                    },
                  }}
                >
                  <Dropdown.Item
                    key="devops"
                    showFullDescription
                    description="What's DevOps and how it can streamline your businesses digital needs?"
                    icon={icons.scale}
                  >
                    Introduction
                  </Dropdown.Item>
                  <Dropdown.Item
                    key="ui-ux-frontend-design"
                    showFullDescription
                    description="UI/UX, fancy term for web design and user expierence methodology."
                    icon={icons.activity}
                  >
                    UI/UX - Frontend Design
                  </Dropdown.Item>
                  <Dropdown.Item
                    key="full-stack-development"
                    showFullDescription
                    description="Execute your UI/UX vision with a custom developed web application."
                    icon={icons.server}
                  >
                    Full-Stack Development
                  </Dropdown.Item>
                  <Dropdown.Item
                    key="dapps"
                    showFullDescription
                    description="Off the grid decentralized apps (Dapps) built with blockchain services."
                    icon={icons.flash}
                  >
                    Dapp Development
                  </Dropdown.Item>
                  <Dropdown.Item
                    key="search-engine-optimization"
                    showFullDescription
                    description="Introduce semancitc markup and schemas increasing engagement."
                    icon={icons.seoicon}
                  >
                    Search Engine Optimization
                  </Dropdown.Item>
                  <Dropdown.Item
                    key="long-term-support"
                    showFullDescription
                    description="Overcome any challenge with our supporting team ready to respond."
                    icon={icons.user}
                  >
                    +Supreme Support
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Spacer x={1} y={0} />
              <NextLink href="/showcase-portfolio">
                <Link
                  aria-disabled
                  className={cn('navbar__link', {
                    active: includes(router.asPath, 'case-studies'),
                  })}
                  css={{
                    color: '$text',
                    '&.active': {
                      fontWeight: '600',
                      color: '$primary',
                    },
                  }}
                  title="Showcase Portfolio"
                >
                  Showcase
                </Link>
              </NextLink>
              <Spacer x={1} y={0} />
              <Link
                className="navbar__link"
                css={{
                  color: '$text',
                }}
                href="https://news.buchanandevops.com"
                rel="noopener noreferrer"
                target="_blank"
                title="Join the Matrix"
              >
                News
              </Link>
            </Row>
          </Col>
          <Col className="navbar__search-container">
            <Row
              align="center"
              className="navbar__search-row"
              css={{
                position: 'initial',
                '@mdMax': {
                  jc: 'center',
                },
              }}
              justify="flex-end"
            >
              <Row
                align="center"
                className="navbar__social-icons-container"
                css={{
                  width: 'initial',
                  '@mdMax': {
                    d: 'none',
                  },
                }}
                gap={1}
                justify="flex-end"
              >
                <Link
                  className="navbar__social-icon"
                  css={{
                    m: '0 6px',
                    '& svg': {
                      transition: '$default',
                    },
                    '&:hover': {
                      '& svg': {
                        opacity: 0.7,
                      },
                    },
                  }}
                  href="https://twitter.com/buchanandevops"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Twitter size={24} />
                </Link>
                <Link
                  className="navbar__social-icon"
                  css={{
                    m: '0 6px',
                    '& svg': {
                      transition: '$default',
                    },
                    '&:hover': {
                      '& svg': {
                        opacity: 0.7,
                      },
                    },
                  }}
                  href="https://discord.gg/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Discord size={24} />
                </Link>
                <Link
                  className="navbar__social-icon"
                  css={{
                    m: '0 6px',
                    '& svg': {
                      transition: '$default',
                    },
                    '&:hover': {
                      '& svg': {
                        opacity: 0.7,
                      },
                    },
                  }}
                  href="https://github.com/BuchananDevOps"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Github size={24} />
                </Link>
                <ThemeToggle
                  className="navbar__social-icon"
                  css={{
                    m: '0 6px',
                    '& svg': {
                      transition: '$default',
                    },
                    '&:hover': {
                      '& svg': {
                        opacity: 0.7,
                      },
                    },
                  }}
                />
              </Row>

              <Spacer x={0.5} />
              <ContactIcon />
            </Row>
          </Col>
          <Col
            className="navbar__menu-container"
            css={{
              size: '100%',
              display: 'none',
              '@mdMax': {
                display: 'flex',
                justifyContent: 'flex-end',
              },
            }}
          >
            <ThemeToggle
              className="navbar__social-icon-mobile"
              css={{ m: '0' }}
            />
            <Box
              className="navbar__menu-arrow noselect"
              css={{
                height: '100%',
                minHeight: '40px',
                minWidth: '30px',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
              onClick={onToggleNavigation}
            >
              <MenuToggle expanded={expanded} />
            </Box>
          </Col>
          <MobileNavigation
            detached={isDetached}
            hasNotify={hasNotify}
            opened={expanded}
            onClose={() => {
              setExpanded(false);
              setBodyHidden(false);
            }}
          />
        </Container>
      </StyledNavContainer>
    </StyledNavMainContainer>
  );
};

export default Navbar;
