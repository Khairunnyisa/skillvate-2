import { Container, Grid } from "@mui/material";
import TrainerCard from "../../../cards/cardTrainer";

export default function ListTrainer({ data }) {
  return (
    <Container sx={{ py: 10 }}>
      <Grid container spacing={5}>
        {data?.map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={item.id}
          >
            <TrainerCard data={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}