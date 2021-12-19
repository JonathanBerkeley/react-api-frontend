import { BaseStyles, Box } from "@primer/react"

const AdminPanel = () => {
    return (
        <BaseStyles>
            <section className="content">
                <section className="clancard">
                    <Box m={30}>
                        <iframe className="chart"
                            title="player-wins"
                            width={640}
                            height={480}
                            src="https://charts.mongodb.com/charts-advanced-javascript-glunn/embed/charts?id=4cd36683-749c-487d-92f4-a1e691e0e09b&maxDataAge=3600&theme=dark&autoRefresh=true">
                        </iframe>
                        <iframe className="chart"
                            title="games-wins"
                            width={640}
                            height={480}
                            src="https://charts.mongodb.com/charts-advanced-javascript-glunn/embed/charts?id=f4205284-53c8-4b8b-b2e6-cb2dba79736f&maxDataAge=3600&theme=dark&autoRefresh=true">
                        </iframe>
                    </Box>
                </section>
            </section>
        </BaseStyles>
    )
}

export default AdminPanel