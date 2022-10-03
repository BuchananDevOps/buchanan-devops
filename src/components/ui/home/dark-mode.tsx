import React, { useState } from 'react';
import cn from 'classnames';
import { InView } from 'react-intersection-observer';
import NextLink from 'next/link';
import { StyledImg } from '@components';
import {
  Switch,
  Grid,
  Row,
  Col,
  Spacer,
  createTheme,
  Text,
  Table,
  Tooltip,
} from '@nextui-org/react';

import { darkTheme, lightTheme } from '@theme/shared';
import {
  Blockholder,
  Box,
  Section,
  Title,
  Subtitle,
  BlockLink,
} from '@components';
import { Moon, Sun } from '../icons';

const playerDarkTheme = createTheme({
  type: 'dark',
  className: 'player-dark-theme',
});
const playerLightTheme = createTheme({
  type: 'light',
  className: 'player-light-theme',
});

const DarkModeSection = () => {
  const [activeTheme, setActiveTheme] = useState('dark');
  const [isVisible, setIsVisible] = useState(false);

  const columns = [
    {
      name: 'User Channel',
      uid: 'name',
      description: 'How User Entered Website',
    },
    {
      name: 'New ',
      uid: 'new-users',
      description:
        'The number of users who interacted with your site or launched your app for the first time',
    },
    {
      name: 'Sessions',
      uid: 'engaged-sessions',
      description:
        'The number of sessions that lasted longer than 10 seconds, or had a conversion event, or had 2 or more screen or page views.',
    },
    {
      name: 'Time',
      uid: 'engaged-time',
      description:
        'Number of engaged sessions per user (Engaged sessions/Users).',
    },
    {
      name: 'Event Count',
      uid: 'event-count',
      description:
        'The average length of time that the app was in the foreground, or the web site had focus in the browser.',
    },
    {
      name: 'Total Revenue',
      uid: 'total-revenue',
      description:
        'The sum of revenue from purchases, subscriptions, and advertising (Purchase revenue plus Subscription revenue plus Ad revenue).',
    },
  ];
  const channels = [
    {
      name: 'Organic Search',
      newUsers: '23,849',
      engagedSessions: '27,297',
      engagedTime: '2m 08s',
      eventCount: '897,862',
      totalRevenue: '$64,350.00',
    },
    {
      name: 'Direct',
      newUsers: '19,254',
      engagedSessions: '29,394',
      engagedTime: '3m 47s',
      eventCount: '1,502,937',
      totalRevenue: '$189,019.63',
    },
    {
      name: 'Paid Search',
      newUsers: '3,562',
      engagedSessions: '2,431',
      engagedTime: '1m 19s',
      eventCount: '73,314',
      totalRevenue: '$1,798.55',
    },
    {
      name: 'Display',
      newUsers: '2,846',
      engagedSessions: '1,430',
      engagedTime: '0m 14s',
      eventCount: '30,819',
      totalRevenue: '$0.00',
    },
    {
      name: 'Referral',
      newUsers: '753',
      engagedSessions: '1,449',
      engagedTime: '5m 22s',
      eventCount: '3,811.00',
      totalRevenue: '$7,566.88',
    },
  ];

  const renderCell = (channels, columnKey) => {
    const cellValue = channels[columnKey];
    switch (columnKey) {
      case 'name':
        return <Text css={{ mr: '$10' }}>{channels.name}</Text>;
      case 'new-users':
        return <Text>{channels.newUsers}</Text>;
      case 'engaged-sessions':
        return <Text>{channels.engagedSessions}</Text>;
      case 'engaged-time':
        return <Text>{channels.engagedTime}</Text>;
      case 'event-count':
        return <Text>{channels.eventCount}</Text>;
      case 'total-revenue':
        return <Text>{channels.totalRevenue}</Text>;
    }
  };

  const handleToggleTheme = () => {
    setActiveTheme(activeTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <InView as="section" className="inview-section" onChange={setIsVisible}>
      <Spacer y={10} css={{ '@xsMax': { mt: '$14' } }} />
      <Section css={{ position: 'relative', zIndex: '$10' }}>
        <Box
          css={{
            position: 'absolute',
            top: '-25%',
            left: '-20%',
            zIndex: '-$1',
            [`.${darkTheme} &`]: {
              left: '30%',
              right: '-30%',
              '@xsMax': {
                right: '-50%',
              },
            },
            '@xsMax': {
              top: '10%',
              right: '-50%',
              left: '0',
            },
          }}
        >
          <img src="/dark-mode-gradient.svg" alt="dark mode background" />
        </Box>
        <Row justify="flex-start">
          <Title>Marketing shouldn&apos;t </Title>
        </Row>
        <Row justify="flex-start">
          <Title>
            comsume your <Title color="violet">budget.</Title>
          </Title>
        </Row>
        <Subtitle>
          By using organic SEO and tried social media marketing, we can help you
          reach your target audience without breaking the bank. Overtime
          we&apos;ll be able to hone in on what really makes your customers
          bite, consistently improving your ROI.
        </Subtitle>
        <Grid.Container css={{ marginTop: '40px' }} gap={1.5}>
          <Grid
            css={{
              pl: 0,
              '@xsMax': {
                pr: '0',
              },
            }}
          >
            <Col
              css={{
                dflex: 'center',
                fd: 'column',
                h: '100%',
              }}
            >
              <Table
                sticked
                striped
                compact
                shadow
                hoverable
                aria-label="Example of Google Analytics for Organic Search Engine Optimization"
                css={{
                  height: 'auto',
                  minWidth: '100%',
                }}
                selectionMode="none"
              >
                <Table.Header columns={columns}>
                  {(column) => (
                    <Table.Column
                      key={column.uid}
                      css={{
                        minWidth: '100px',
                      }}
                    >
                      <Tooltip
                        css={{ maxWidth: '250px', padding: '$6' }}
                        content={column.description}
                      >
                        {column.name}
                      </Tooltip>
                    </Table.Column>
                  )}
                </Table.Header>
                <Table.Body items={channels}>
                  {(channel) => (
                    <Table.Row key={channel.name}>
                      {columns.map((column) => (
                        <Table.Cell key={column.uid}>
                          {renderCell(channel, column.uid)}
                        </Table.Cell>
                      ))}
                    </Table.Row>
                  )}
                </Table.Body>
              </Table>
              <Text css={{ color: '$text', fontSize: '$xl' }}>
                Organic Product SEO an Ecommerce Client
              </Text>
            </Col>
          </Grid>
          <Grid
            css={{
              pl: 0,
              '@xsMax': {
                pr: '0',
              },
            }}
          >
            <Col
              css={{
                dflex: 'center',
                fd: 'column',
                h: '100%',
              }}
            ></Col>
          </Grid>
        </Grid.Container>
      </Section>
    </InView>
  );
};

export default DarkModeSection;
