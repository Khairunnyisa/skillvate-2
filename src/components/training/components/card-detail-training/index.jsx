import { Grid, Box } from "@mui/material";
import DetailCard from "../../../cards/detailCardTraining";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleClick = (title) => {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    navigate(`/training/${slug}`, {
      state: { title },
    });
  };
  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {trainingData.map((item, index) => (
          <Grid item key={index}>
            <DetailCard
              title={item.title}
              items={item.items}
              onClick={handleClick} // 🔥 kirim ke card
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TrainingSection;