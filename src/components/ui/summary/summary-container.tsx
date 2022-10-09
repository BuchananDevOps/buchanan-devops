import { Section, StyledCardBlur } from "@primitives"
import { Container } from '@nextui-org/react'
import { lightTheme } from "@theme/shared"

interface Props {
    children: React.ReactNode
}

const SummaryContainer: React.FC<Props> = ({ children }) => {
    return (
        <Section>
        <StyledCardBlur
            css={{
                width: '100vw',
                position: 'relative',
                dflex: 'center',
                left: '50%',
                right: '50%',
                ml: '-50vw',
                mr: '-50vw',
                $$borderColorA: 'rgba(40,140,249,0.3)',
                $$borderColorB: 'rgba(227,44,107,.2)',
                borderImage: 'linear-gradient(90deg, $$borderColorA, $$borderColorB)',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderImageSlice: '1',
                [`.${lightTheme} &`]: {
                $$borderColorA: 'rgba(40,140,249,0.7)',
                $$borderColorB: 'rgba(227,44,107,.50)',
                borderImage: 'linear-gradient(90deg, $$borderColorA, $$borderColorB)',
                }
            }}
            >
        <Container 
            lg
            css={{
                ml: 0,
                mr: 0,
                py: '$8',
                '@xsMax': {
                    px: '$4',
                },
            }}>
            {children}
        </Container>
        </StyledCardBlur>
        </Section>
    )
}

export default SummaryContainer