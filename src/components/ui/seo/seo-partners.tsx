import { Section, SmallSubTitle } from '@primitives'
import { Grid, Row, Text, styled, Tooltip } from '@nextui-org/react'
import seoConent from '@content/seo'
import { darkTheme } from '@theme/shared'

const PartnerImage = styled('img', {
    maxHeight: '40px',
    padding: '2px 10px',
    [`.${darkTheme} &`]: {
        filter: 'invert(1)',
      },
})


const SeoPartners: React.FC = () => {
    return (
        <Section css={{
            my: '3rem',
        }}>
            <Row justify="center">
                <Text css={{
                    fs: '.75rem',
                    fontWeight: '600',
                    lineHeight: '1.5rem',
                    letterSpacing: '0.2rem',
                    mb: '2rem',
                    color: '$text',
                    textTransform: 'uppercase',
                }}>
                    Certified Partners with some of the Best

                </Text>
            </Row>
            <Grid.Container justify='center' gap={2}>
                {seoConent.seoPartners.map(({ image, title, description }) => (
                    <Grid key={title}>
                        <Tooltip
                        css={{
                            width: '280px',
                        }}
                            content={description}
                            trigger="hover"
                            placement='topStart'
                        >
                        <PartnerImage src={image} alt={title} />
                        </Tooltip>
                    </Grid>
                ))}
            </Grid.Container>
        </Section>
    )
}

export default SeoPartners