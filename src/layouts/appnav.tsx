import { Navbar, Dropdown, Button, Link, Text } from '@nextui-org/react';
import { ContactModal, Logo } from '@components';
import { icons } from './icons.js';
import { useMediaQuery } from '@hooks/use-media-query';
import NextLink from 'next/link';
import cn from 'classnames';

export default function AppNav() {
  const collapseItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ];

  return (
    <Navbar variant="sticky">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          '@xs': {
            w: '12%',
          },
        }}
      >
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
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="underline"
      >
        <Dropdown isBordered>
          <Navbar.Item>
            <Dropdown.Button
              auto
              light
              css={{
                px: 0,
                dflex: 'center',
                svg: { pe: 'none' },
              }}
              iconRight={icons.chevron}
              ripple={false}
            >
              Services
            </Dropdown.Button>
          </Navbar.Item>
          <Dropdown.Menu
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
              key="autoscaling"
              showFullDescription
              description="ACME scales apps to meet user demand, automagically, based on load."
              icon={icons.scale}
            >
              Autoscaling
            </Dropdown.Item>
            <Dropdown.Item
              key="usage_metrics"
              showFullDescription
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              icon={icons.activity}
            >
              Usage Metrics
            </Dropdown.Item>
            <Dropdown.Item
              key="production_ready"
              showFullDescription
              description="ACME runs on ACME, join us and others serving requests at web scale."
              icon={icons.flash}
            >
              Production Ready
            </Dropdown.Item>
            <Dropdown.Item
              key="99_uptime"
              showFullDescription
              description="Applications stay on the grid with high availability and high uptime guarantees."
              icon={icons.server}
            >
              +99% Uptime
            </Dropdown.Item>
            <Dropdown.Item
              key="supreme_support"
              showFullDescription
              description="Overcome any challenge with a supporting team ready to respond."
              icon={icons.user}
            >
              +Supreme Support
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Navbar.Link href="#">Portfolio</Navbar.Link>
        <Navbar.Link href="#">Operations</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <ContactModal />
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="secondary"
            css={{
              color: index === collapseItems.length - 1 ? '$error' : '',
            }}
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
