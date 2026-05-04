import { Grid, Box } from "@mui/material";
import DetailCard from "../../../cards/detailCardTraining";

const trainingData = [
  {
    title: "Red Hat",
    items: [
      "Red Hat OpenStack Administration I: Core Operations for Cloud Operators (CL110)",
      "Red Hat OpenStack Administration II: Day 2 Operations for Cloud Operators (CL210)",
      "Red Hat OpenStack Administration II: Day 2 Operations for Cloud Operators Exam (CL211)",
    ],
  },
  {
    title: "Microsoft",
    items: [
      "Microsoft Azure Fundamentals (AZ-900)",
      "Microsoft Azure Administrator (AZ-104)",
      "Microsoft Azure Solutions Architect Expert (AZ-303)",
    ],
  },
  {
    title: "Google",
    items: [
      "Google Cloud Fundamentals: Core Infrastructure (GCF-CI)",
      "Google Cloud Digital Leader (GCP-DL)",
      "Google Professional Cloud Architect (GCP-CA)",
    ],
  },
  {
    title: "Red Hat",
    items: [
      "Red Hat OpenStack Administration I: Core Operations for Cloud Operators (CL110)",
      "Red Hat OpenStack Administration II: Day 2 Operations for Cloud Operators (CL210)",
      "Red Hat OpenStack Administration II: Day 2 Operations for Cloud Operators Exam (CL211)",
    ],
  },
  {
    title: "Microsoft",
    items: [
      "Microsoft Azure Fundamentals (AZ-900)",
      "Microsoft Azure Administrator (AZ-104)",
      "Microsoft Azure Solutions Architect Expert (AZ-303)",
    ],
  },
  {
    title: "Google",
    items: [
      "Google Cloud Fundamentals: Core Infrastructure (GCF-CI)",
      "Google Cloud Digital Leader (GCP-DL)",
      "Google Professional Cloud Architect (GCP-CA)",
    ],
  },
 
];

const TrainingSection = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {trainingData.map((item, index) => (
          <Grid item key={index}>
            <DetailCard title={item.title} items={item.items} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TrainingSection;