import { SummaryContainer, SummaryItem } from "@components"
import seoContent from "@content/seo"
import { Grid } from "@nextui-org/react"


const SeoSummary: React.FC = () => {
    return (
       <SummaryContainer>
            <Grid.Container gap={2}>
                {seoContent.seoSummary.map(({ title, icon, description }) => (
                    <Grid xs={12} sm={12} md={4} key={title}>
                        <SummaryItem icon={icon} title={title} description={description} />
                    </Grid>
                ))}
            </Grid.Container>
       </SummaryContainer>
    )
}

export default SeoSummary