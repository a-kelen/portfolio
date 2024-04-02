import { Grid, GridCol } from "@mantine/core";
import { PersonalInfoContainer } from "../components/PersonalInfoContainer/PersonalInfoContainer";
import { WorkInfoContainer } from "../components/WorkInfoContainer/WorkInfoContainer";

export default function HomePage() {
  return (
    <Grid p={20} pb={50}>
      <GridCol span={3}>
        <PersonalInfoContainer />
      </GridCol>
      <GridCol span={9}>
        <WorkInfoContainer />
      </GridCol>
    </Grid>
  );
}
