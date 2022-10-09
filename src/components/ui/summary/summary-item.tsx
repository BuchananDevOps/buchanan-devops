import { Col, Row, styled, Text } from '@nextui-org/react'
import { Box } from '@primitives'

const IconWrapper = styled('div',{
    $$colorA: 'rgba(40,140,249,0.7)',
    $$colorB: 'rgba(227,44,107,.50)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: '$foreground',
    color: '$background',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 0 1px $$colorA, 0 0 0 2px $$colorB',
})

interface Props {
    icon: React.ReactNode,
    title: string,
    description: string
}

const SummaryItem: React.FC<Props> = ({ icon, title, description }) => {
    return (
        <Box
        css={{
            mt: '$6',
            mb: '$10',

        }}>
            <Row>
                <Col 
                css={{
                    width: "fit-content",
                    ml: '$12',
                    mr: '$8',
                    '@xsMax': {
                        ml: '-$4',
                        mr: '$4',
                    },
                }}>
                    <IconWrapper>
                        {icon}
                    </IconWrapper>
                </Col>
                <Col css={{
                    mr: '$2',
                    '@xsMax': {
                        mr: '$0',
                    },
                }}>
                    <Row>
                    <Text h3
                    css={{
                        fontSize: '1.5rem',
                        letterSpacing: '-.029375rem',
                        fontWeight: 700,
                        lineHeight: '2rem',
                    }}>{title}</Text>
                    </Row>
                    <Row>
                        <Text css={{
                            color: '$featureP',
                            fontSize: '.925rem',
                            fontWeight: 400,
                            lineHeight: '1.25rem',
                        }}>{description}</Text>
                    </Row>
                </Col>
            </Row>
        </Box>
    )
}

export default SummaryItem