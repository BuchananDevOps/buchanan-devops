import React from 'react';
import NextLink from 'next/link';
import { getMDXComponent } from 'mdx-bundler/client';
import {
  Container,
  Text,
  Button,
  Divider,
  Link,
  Badge,
  Spacer,
} from '@nextui-org/react';
import { Box, ArrowLeft } from '@components';
import { parseISO, format } from 'date-fns';
import { TitleAndMetaTags } from '@components';
import { getAllFrontmatter, getMdxBySlug } from '@lib/mdx';
import { authors } from '@data/authors';

import type { Frontmatter } from '../../types/frontmatter';

type BlogPost = {
  frontmatter: Frontmatter;
  code: any;
  relatedPosts?: Frontmatter[];
};

export default function BlogPost({
  frontmatter,
  code,
  relatedPosts,
}: BlogPost) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  const twitterShare = `
		https://twitter.com/intent/tweet?
		text="${frontmatter.title}" by @${
    authors[frontmatter.by].twitter
  } on the @stitchesjs blog.&url=https://stitches.dev/blog/${frontmatter.slug}
		`;

  return (
    <>
      <TitleAndMetaTags
        title={`${frontmatter.title} — Stitches`}
        poster={frontmatter.poster}
      />

      <Container css={{ maxWidth: '715px' }}>
        <NextLink href="/blog" passHref>
          <Button
            as="a"
            ghost
            css={{
              color: '$slate11',
              mb: '$4',
              ml: '-$3',
              '@bp2': {
                ml: '-40px',
              },
            }}
          >
            <Box css={{ mr: '$2' }}>
              <ArrowLeft />
            </Box>
            Blog
          </Button>
        </NextLink>

        <Text
          as="h1"
          size="8"
          css={{ fontWeight: 500, mb: '$2', lineHeight: '40px' }}
        >
          {frontmatter.title}
        </Text>

        <Text
          as="h2"
          size="6"
          css={{ mt: '$2', mb: '$4', color: '$slate11', lineHeight: '30px' }}
        >
          {frontmatter.description}
        </Text>

        <Box css={{ mt: '$4', mb: '$7', alignItems: 'center' }}>
          {/* <Avatar src={authors[data.by].avatar} mr={2} /> */}
          <Text
            as="p"
            size="3"
            css={{ color: '$slate11', lineHeight: 0, whiteSpace: 'nowrap' }}
          >
            <Link
              href={`https://twitter.com/${authors[frontmatter.by].twitter}`}
              rel="noopener noreferrer"
            >
              {authors[frontmatter.by].name}
            </Link>
          </Text>
          <Spacer y={1} />
          <Text
            as="time"
            size="3"
            css={{ color: '$slate11', lineHeight: 0, whiteSpace: 'nowrap' }}
          >
            {format(parseISO(frontmatter.publishedAt), 'MMMM yyyy')}
          </Text>
          <Box
            css={{
              alignItems: 'center',
              display: 'none',
              '@bp2': { display: 'Box' },
            }}
          >
            <Spacer y={1} />
            <Text size="3" css={{ color: '$slate11', lineHeight: 0 }}>
              {frontmatter.readingTime.text}
            </Text>
            {frontmatter.type === 'changelog' && (
              <>
                <Spacer y={1} css={{ mx: '$2' }} />
                <Badge>Changelog</Badge>
              </>
            )}
          </Box>
        </Box>

        <Divider y={2} css={{ my: '$8', mx: 'auto' }} />
        <Box css={{ textAlign: 'center' }}>
          <Text as="p" size="4" css={{ lineHeight: 2 }}>
            Share this post on{' '}
            <Link
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              title="Share this post on Twitter"
            >
              Twitter
            </Link>
            .
          </Text>
        </Box>

        {relatedPosts && (
          <Box>
            <Divider y={2} css={{ my: '$8', mx: 'auto' }} />
            <Text
              as="h3"
              size="2"
              css={{
                mb: '$3',
                fontWeight: 500,
                textAlign: 'center',
                textTransform: 'uppercase',
              }}
            >
              Related
            </Text>

            <Box css={{ my: '$4', BoxDirection: 'column', gap: '$4' }}>
              {relatedPosts.map((frontmatter) => {
                return (
                  <Box
                    as="a"
                    key={frontmatter.slug}
                    href={`/blog/${frontmatter.slug}`}
                    css={{
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    <Box>
                      <Text
                        as="h6"
                        size="4"
                        css={{
                          fontWeight: 500,
                          mb: '$1',
                        }}
                      >
                        {frontmatter.title}
                      </Text>
                      <Text
                        as="p"
                        size="3"
                        css={{
                          color: '$hiContrast',
                        }}
                      >
                        {frontmatter.description}
                      </Text>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        )}
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const frontmatters = getAllFrontmatter('blog');

  return {
    paths: frontmatters.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { frontmatter, code } = await getMdxBySlug('blog', context.params.slug);

  const relatedPosts = frontmatter.relatedIds
    ? await Promise.all(
        frontmatter.relatedIds.map(async (id) => {
          const { frontmatter } = await getMdxBySlug('blog', id);
          return frontmatter;
        })
      )
    : null;

  return {
    props: {
      frontmatter,
      code,
      relatedPosts,
    },
  };
}
