import { Grid } from "components/box";

export function FilterGroup({ children }) {
    return (
        <Grid gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))" gridGap="1rem">
            {children}
        </Grid>
    );
}
