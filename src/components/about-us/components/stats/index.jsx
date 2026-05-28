import { Box, Typography, Container } from "@mui/material";
import { useEffect, useRef, useState } from "react";



const StatsSection = (data) => {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  const statsData = [
    {
      value: data.data?.class,
      suffix: "+",
      label: "Class Delivered",
    },
    {
      value: data.data?.students,
      suffix: "+",
      label: "Students",
    },
    {
      value: data.data?.enterprise,
      suffix: "+",
      label: "Enterprise Customer",
    },
    {
      value: data.data?.loremIpsum,
      suffix: "+",
      label: "Lorem Ipsum",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.3 } // muncul 30% baru mulai animasi
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ py: 10, bgcolor: "#F9FAFB" }}>
      <Container maxWidth="lg">
        <Box
          ref={ref}
          sx={{
            bgcolor: "#F3F4F6",
            borderRadius: "24px",
            py: { xs: 6, md: 8 },
            px: { xs: 3, md: 6 },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr 1fr",
                md: "repeat(4, 1fr)",
              },
              gap: 4,
              textAlign: "center",
            }}
          >
            {statsData.map((item, i) => (
              <Box key={i}>
                <CountUp
                  end={item.value}
                  suffix={item.suffix}
                  start={start}
                />

                <Typography
                  sx={{
                    mt: 1,
                    fontSize: 16,
                    color: "#4B5563",
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default StatsSection;





// 🔥 COMPONENT COUNT UP
const CountUp = ({ end, duration = 1500, start, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;

      const value = Math.min(
        Math.floor((progress / duration) * end),
        end
      );

      setCount(value);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, end, duration]);

  return (
    <Typography
      variant="h3"
      sx={{
        fontSize: { xs: 32, md: 48 },
        color: "#000",
      }}
    >
      {count}
      {suffix}
    </Typography>
  );
};