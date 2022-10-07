import { Header, Feature } from "@components"
import { Grid, Row, Text, Container } from "@nextui-org/react"
import { Section } from "@primitives"
import NextLink from "next/link"


const IntroCards: React.FC = () => {
    return (
        <Container>
        <Section css={{ position: 'relative' }}>
            <Grid.Container gap={2}>
                <Grid xs={12} md={4}>
                    <Header 
                    type="insights" 
                    darkUrl="/delamure/insights-bg-v1.svg"
                    url=""
                    icon="/delamure/icons/bar-chart-icon-dark-v3.svg" 
                    title={"Principal Engineering"} 
                    description={"Serving to mid-size to enterprise companies for 13 years of digital development under our belt. We offer the latest and greatest technologies in the industry for your project."} />
                </Grid>
                <Grid xs={12} md={4}>
                    <Header 
                    type="artifacts"
                    darkUrl="/delamure/artifacts-bg-v1.svg"
                    url=""
                    icon="/delamure/icons/checkbox-icon-dark-v3.svg" 
                    title={"Realistic Roadmap"} 
                    description={"Rapid development for minimal viable products (MVP) within 1 month. We'll outline all deliverables required for the project giving use as realistic roadmap to completion."} />
                </Grid>
                <Grid xs={12} md={4}>
                    <Header 
                    type="cicd"
                    darkUrl="/delamure/cicd-bg-v1.svg"
                    url="" 
                    icon="/delamure/icons/boost-icon-dark-v3.svg"
                    title={"Exceptional Experiences"} 
                    description={"Our strategy is simplicity. Yes, go lean and start small. Let the customer tell us what they want with the analytics. Then build out over time with guaranteed success. "} />
                </Grid>
                <Grid xs={12} md={6}>
                <Header 
                    type="insights" 
                    darkUrl="/delamure/insights-bg-v1.svg"
                    url=""
                    title={"Custom Development"} 
                    description={"We develop smart solutions with research-backed strategies and high-quality, principal-grade custom product development. We love intriguing ideas to challenge our skills."} />
                </Grid>
                <Grid xs={12} md={6}>
                <Header 
                    type="insights" 
                    darkUrl="/delamure/insights-bg-v1.svg"
                    url=""
                    title={"Scalable Applications"} 
                    description={"Our products are capable of growing with your company without skipping a beat or needing additional development resources."} />
                </Grid>
                <Grid xs={12} md={6}>
                <Header 
                    type="insights" 
                    darkUrl="/delamure/insights-bg-v1.svg"
                    url=""
                    title={"Launch"} 
                    description={"We'll get you to the starting line on time and within budget, but we don't stop there. We'll guide and support your project based on real-time analytics and user measurments."} />
                </Grid>
                <Grid xs={12} md={6}>
                <Header 
                    type="insights" 
                    darkUrl="/delamure/insights-bg-v1.svg"
                    url=""
                    title={"Growth"} 
                    description={"As we implement architecture changes based on user feedback, you'll gradually see increased traffic, revenues and brand recognition with page authority measurments."} />
                </Grid>
            </Grid.Container>
            <Row justify="center">
               <Text
               css={{
                mt: '48px',
                mb: '48px',
                fontSize: '.75rem',
                fontWeight: 700,
                letterSpacing: '2px',
                color: '#888888',
                lineHeight: '1rem',
                textTransform: 'uppercase',
               }}
               >Enterprise Security &amp; Support</Text> 
            </Row>
            <Grid.Container gap={2}>
                <Grid xs={12} md={6}>
                <Header 
                    type="security" 
                    url="/delamure/enterprise-security-bg-light-v1.svg"
                    darkUrl="/delamure/enterprise-security-bg-dark-v1.svg"
                    icon="/delamure/icons/security-icon-dark-v3.svg" 
                    title={"Advanced Security and Protocols"} 
                    description={"Secure access to your data with Next Generation Authorization (JWT/Auth0). We also offer blockchain solutions for increased security protocols."} />
                </Grid>
                <Grid xs={12} md={6}>
                    <NextLink href="/long-term-support" passHref>
                <Header 
                    type="support" 
                    url="/delamure/enterprise-support-bg-light-v1.svg"
                    darkUrl="/delamure/enterprise-support-bg-dark-v1.svg"
                    icon="/delamure/icons/support-icon-dark-v3.svg" 
                    title={"Long-term Support (LTS)"} 
                    description={"We offer more than just developing and signing off on your project. We're here to stand by your team with long-term support keeping your packages up-to-date and secure."} />
                    </NextLink>
                </Grid>
            </Grid.Container>
        </Section>
        </Container>
    )
}

export default IntroCards