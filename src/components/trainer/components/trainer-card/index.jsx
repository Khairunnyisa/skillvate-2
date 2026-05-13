import { Container, Grid } from "@mui/material";
import TrainerCard from "../../../cards/cardTrainer";

export default function ListTrainer() {
  const trainers = [
    {
      name: "Ahmad Maulana Jihad",
      role: "RHCSA, DO180, DO280s",
      image: "/static/images/trainer/trainer-1.png",
      linkedin: "https://www.linkedin.com/in/ahmad-maulana-52a0a616b/",
      facebook: "https://facebook.com/aries",
    },
    {
      name: "Alfian Rahman Aziz",
      role: "CSCU, CEH, CHFI, ECIH",
      image: "/static/images/trainer/trainer-2.png",
      linkedin: "https://www.linkedin.com/in/alfianrahman/",
      facebook: "https://facebook.com/aries",
    },
    {
      name: "Andre Octavianus Sitepu",
      role: "PostgreSQL",
      image: "/static/images/trainer/trainer-3.png",
      linkedin: "https://www.linkedin.com/in/andre-octavianus-56175169/",
      facebook: "https://facebook.com/aries",
    },
    {
      name: "Arviena Jasmine",
      role: "WSO2",
      image: "/static/images/trainer/trainer-4.png",
      linkedin: "https://www.linkedin.com/in/arviena-jasmine/",
      facebook: "https://facebook.com/aries",
    },
    {
      name: "Ach Chusnul Chikam",
      role: "RHCSA, CL110, CL210, CL260, CCSE",
      image: "/static/images/trainer/trainer-5.png",
      linkedin: "https://www.linkedin.com/in/achchusnulchikam/",
      facebook: "https://facebook.com/aries",
    },
    {
      name: "Muhamad Fathur Rohman",
      role: "RH294, DO180, DO280, D0188, DO316, CL110, CL210, CL260, ECDE",
      image: "/static/images/trainer/trainer-6.png",
      linkedin: "https://www.linkedin.com/in/kgfathur/",
      facebook: "https://facebook.com/aries",
    },
    {
      name: "Bernadeta Silvia",
      role: "Katalon",
      image: "/static/images/trainer/trainer-7.png",
      linkedin: "https://www.linkedin.com/in/bernadetasilvia/",
      facebook: "https://facebook.com/aries",
    },
    {
      name: "Syawal Saputra",
      role: "Kubernetes",
      image: "/static/images/trainer/trainer-8.png",
      linkedin: "https://www.linkedin.com/in/m-syawal-saputra/",
      facebook: "https://facebook.com/aries",
    },
    {
      name: "Ananda Fikri Ijlal Akbar",
      role: "DevSecOps Toolchain, DevOps Toolchain",
      image: "/static/images/trainer/trainer-9.png",
      linkedin: "https://www.linkedin.com/in/ananda-fikri/",
      facebook: "https://facebook.com/aries",
    },
    {
      name: "Hasbi Ashiddiqi",
      role: "DevSecOps Toolchain, DevOps Toolchain",
      image: "/static/images/trainer/trainer-10.png",
      linkedin: "https://www.linkedin.com/in/hasbi-ashiddiqi/",
      facebook: "https://facebook.com/aries",
    },
    {
      name: "Owen Aloysius",
      role: "DevSecOps Toolchain, DevOps Toolchain",
      image: "/static/images/trainer/trainer-11.png",
      linkedin: "https://www.linkedin.com/in/owen-aloysius-478a54181/",
      facebook: "https://facebook.com/aries",
    },
    {
      name: "Dicky Muhammad",
      role: "RHCSA, DO180, DO280, DO188",
      image: "/static/images/trainer/trainer-12.png",
      linkedin: "https://www.linkedin.com/in/dicky-muhammad/",
      facebook: "https://facebook.com/aries",
    },
    {
      name: "William Timotius Pilipus",
      role: "DevSecOps Toolchain, DevOps Toolchain",
      image: "/static/images/trainer/trainer-13.png",
      linkedin: "https://www.linkedin.com/in/william-timotius-pilipus/",
      facebook: "https://facebook.com/aries",
    },
    {
      name: "Elan Frita Sesaria Kasim",
      role: "JMeter",
      image: "/static/images/trainer/trainer-14.png",
      linkedin:
        "https://www.linkedin.com/in/elan-frita-sesaria-kasim-009388180/",
      facebook: "https://facebook.com/aries",
    },
    {
      name: "Fadhlullah Niazi Yuda",
      role: "RHCSA, AD248",
      image: "/static/images/trainer/trainer-15.png", //GAADA LINKEDINNYA
      linkedin: "https://linkedin.com/in/aries",
      facebook: "https://facebook.com/aries",
    },

    {
      name: "Graygah Roynando",
      role: "Katalon",
      image: "/static/images/trainer/trainer-16.png",
      linkedin: "https://www.linkedin.com/in/graygahroynando/",
      facebook: "https://facebook.com/aries",
    },
    {
      name: "Masagus Rayhan Bayhaqi",
      role: "DevSecOps Toolchain, DevOps Toolchain",
      image: "/static/images/trainer/trainer-17.png",
      linkedin: "https://www.linkedin.com/in/rayhanbayhaqi/",
      facebook: "https://facebook.com/aries",
    },
    {
      name: "Rama Jorizacky M",
      role: "PostgreSQL",
      image: "/static/images/trainer/trainer-18.png",
      linkedin:
        "https://www.linkedin.com/in/rama-jorizacky-mahardhika-974342140/",
      facebook: "https://facebook.com/aries",
    },
    {
      name: "Savira Rohwinasakti",
      role: "JMeter",
      image: "/static/images/trainer/trainer-19.png",
      linkedin: "https://www.linkedin.com/in/savirarohwina/",
      facebook: "https://facebook.com/aries",
    },
    {
      name: "Tobias Marsena",
      role: "WSO2",
      image: "/static/images/trainer/trainer-20.png",
      linkedin: "https://www.linkedin.com/in/tobias-marsena/",
      facebook: "https://facebook.com/aries",
    },
    {
      name: "Windio Yuliar Armanto",
      role: "PostgreSQL",
      image: "/static/images/trainer/trainer-21.png",
      linkedin: "https://www.linkedin.com/in/windioya/",
      facebook: "https://facebook.com/aries",
    },
    {
      name: "Yacob Hae",
      role: "RHCSA, RH294",
      image: "/static/images/trainer/trainer-22.png",
      linkedin: "https://www.linkedin.com/in/yakob-h-06b6a31b3/",
      facebook: "https://facebook.com/aries",
    },
    {
      name: "Yesus Cinta Leejuyo",
      role: "RHCSA, RH294, Katalon",
      image: "/static/images/trainer/trainer-23.png",
      linkedin: "https://www.linkedin.com/in/yesus-cinta-leejuyo-3b0437228/",
      facebook: "https://facebook.com/aries",
    },
    {
      name: "Cornelius Situmorang",
      role: "Katalon",
      image: "/static/images/trainer/trainer-24.png",
      linkedin: "https://www.linkedin.com/in/cornelsitumorang/",
      facebook: "https://facebook.com/aries",
    },
  ];

  return (
    <Container sx={{ py: 10 }}>
      <Grid container spacing={5}>
        {trainers.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TrainerCard
              name={item.name}
              role={item.role}
              image={item.image}
              linkedin={item.linkedin}
              facebook={item.facebook}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
