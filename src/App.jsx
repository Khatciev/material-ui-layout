import React from "react";
import logo from "./img/scale.svg";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import TableBox from "./TableBox";

const useStyles = makeStyles({
  formControl: {
    width: "208px",
    height: "30px",
  },
  buttonGenerate: {
    fontSize: "12px",
    borderRadius: "3px",
    color: "white",
    backgroundColor: "#4990E2",
  },
  data: {
    fontStyle: "normal",
    fontSize: "14px",
    width: "805px",
    height: "400px",
    fontFamily: "TT Norms",
    background: "#F7F7F7",
    borderRadius: "5px",
  },
  dataDescription: {
    fontWeight: "bold",
    color: "black",
  },
  details: {
    lineHeight: "33px",
    fontWeight: "bold",
    color: "grey",
  },
  blueId: {
    fontWeight: "bold",
    color: "#2572c5",
  },
  searchBtn: {
    marginLeft: "35px",
    width: "120px",
    height: "60px",
    color: "white",
    backgroundColor: "#353535",
  },
  supTitle: {
    margin: "20px 0px 20px 0px",
    color: "#8C8C8C",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "24px",
  },
  marginBottom: {
    marginBottom: "35px",
  },
  subTitle: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "24px",
    letterSpacing: "0.5px",
  },
});

const App = () => {
  const [month, setMonth] = React.useState("");
  const classes = useStyles();
  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <>
      <Container>
        <Box>
          <Box className={classes.marginBottom}>
            <Typography component="p" className={classes.supTitle}>
              Enter inventory number, guid or bims id
            </Typography>
            <TextField variant="outlined" placeholder="Search.." />
            <Button variant="contained" className={classes.searchBtn}>
              Search
            </Button>
          </Box>

          <Grid container spacing={10}>
            <Grid xs={12} sm={6} md={4} item={6}>
              <Box className={classes.marginBottom}>
                <Grid container spacing={4}>
                  <Grid item={6}>
                    <Typography component="img" src={logo} />
                  </Grid>
                  <Grid item={6}>
                    <Typography
                      component="p"
                      className={classes.subTitle}
                      variant="h6"
                    >
                      ?????????????????????????? ????????
                      <br />
                      OHAUS Adventurer
                      <br />
                      AX324 (B715976163)
                      <br />
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              <Box className={classes.marginBottom}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Month
                  </InputLabel>
                  <Select
                    className={classes.marginBottom}
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={month}
                    onChange={handleChange}
                    label="Month"
                  >
                    <MenuItem value="">
                      <em>???? ??????????????????</em>
                    </MenuItem>
                    <MenuItem value={1}>1 Month</MenuItem>
                    <MenuItem value={2}>2 Month</MenuItem>
                    <MenuItem value={3}>3 Month</MenuItem>
                  </Select>
                  <Box className={classes.marginBottom}>
                    <FormControl component="fieldset">
                      <RadioGroup>
                        <FormControlLabel
                          value="female"
                          control={<Radio color="primary" />}
                          label="Calibration"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio color="primary" />}
                          label="Measuring"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio color="primary" />}
                          label="Using"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Box>
                  <Button
                    variant="contained"
                    size="large"
                    className={classes.buttonGenerate}
                  >
                    Generate report
                  </Button>
                </FormControl>
              </Box>
            </Grid>
            <Grid xs={12} sm={6} md={4} item={6}>
              <Paper elevation={0} className={classes.data}>
                <Container>
                  <Typography className={classes.details} component="p">
                    ?????? ????????????????????????:{" "}
                    <Typography
                      className={classes.dataDescription}
                      component="span"
                    >
                      ????????
                    </Typography>
                  </Typography>
                  <Typography className={classes.details} component="p">
                    ????????????:{" "}
                    <Typography
                      className={classes.dataDescription}
                      component="span"
                    >
                      {" "}
                      ?????????? ?? ????????????
                    </Typography>
                  </Typography>
                  <Typography className={classes.details} component="p">
                    ????????????????????????:{" "}
                    <Typography
                      className={classes.dataDescription}
                      component="span"
                    >
                      Ohaus
                    </Typography>{" "}
                  </Typography>
                  <Typography className={classes.details} component="p">
                    ????????????:{" "}
                    <Typography
                      className={classes.dataDescription}
                      component="span"
                    >
                      {" "}
                      AX-123
                    </Typography>
                  </Typography>
                  <Typography className={classes.details} component="p">
                    ?????????????????????????? ?????????????????????????? (????????????):{" "}
                    <Typography
                      className={classes.dataDescription}
                      component="span"
                    >
                      ???????????? ?????????????????????????????????????????????????? ????????????????????????
                    </Typography>
                  </Typography>
                  <Typography className={classes.details} component="p">
                    ?????????????????????????????? ??????????????????????????:{" "}
                    <Typography component="span" variant="b">
                      ????????????-?????????????????????????? ?????????????????????? 2.0
                    </Typography>
                  </Typography>
                  <Typography className={classes.details} component="p">
                    ??????:{" "}
                    <Typography
                      className={classes.dataDescription}
                      component="span"
                    >
                      ???????????? ???????? ????????????????
                    </Typography>{" "}
                  </Typography>
                  <Typography className={classes.details} component="p">
                    ????????????????????:{" "}
                    <Typography
                      className={classes.dataDescription}
                      component="span"
                    >
                      ??. ??????????-?????????????????? (??????????????)
                    </Typography>{" "}
                  </Typography>
                  <Typography className={classes.details} component="p">
                    ???????????????? ??????????:{" "}
                    <Typography
                      className={classes.dataDescription}
                      component="span"
                    >
                      B715976163
                    </Typography>{" "}
                  </Typography>
                  <Typography className={classes.details} component="p">
                    GUID:{" "}
                    <Typography className={classes.blueId} component="span">
                      508b2a71-662e-4983-ae0c-3cb0c1cd21c5
                    </Typography>
                  </Typography>
                  <Typography className={classes.details} component="p">
                    Bims ID:{" "}
                    <Typography className={classes.blueId} component="span">
                      49db8db1-585f-4b9e-bbf0-8a59698edc8b
                    </Typography>
                  </Typography>
                  <Typography className={classes.details} component="p">
                    Tam:{" "}
                    <Typography className={classes.blueId} component="span">
                      ??-001234
                    </Typography>{" "}
                  </Typography>
                </Container>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <TableBox />
      </Container>
    </>
  );
};

export default App;
