import React from "react";
import {
    Box,
    Button,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    InputLabel,
    makeStyles,
    MenuItem, Paper,
    Radio,
    RadioGroup,
    Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
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
        borderRadius: "3px",
      width: "180px",
        height: "40px",
      backgroundColor: "#4990E2"
    },
    data: {
        fontStyle: "normal",

        fontSize: "14px",
         lineHeight: "17px",
        width : "805px",
        height: "330px",
        fontFamily: "TT Norms",
        background: "#F7F7F7",
        borderRadius: "5px",
    },
    dataDescription: {
        fontWeight: "bold",
      color: "black"
    },
    details: {
        fontWeight: "bold",
      color: "grey"
    },
    blueId: {
        fontWeight: "bold",
      color: "#2572c5"
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
          <Typography component="p" color="grey">
            Enter inventory number, guid or bims id
          </Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Button variant="contained" size="large" color="primary">
            Search
          </Button>
        </Box>
        <Grid container spacing={10}>
          <Grid item={6}>
            <Box>
              <Typography component="p" variant="h6">
                Аналитические весы
                <br />
                OHAUS Adventurer
                <br />
                AX324 (B715976163)
                <br />
              </Typography>
            </Box>
            <Box>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Month
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={month}
                  onChange={handleChange}
                  label="Month"
                >
                  <MenuItem value="">
                    <em>Не указывать</em>
                  </MenuItem>
                  <MenuItem value={1}>1 Month</MenuItem>
                  <MenuItem value={2}>2 Month</MenuItem>
                  <MenuItem value={3}>3 Month</MenuItem>
                </Select>
                <Box>
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
                    <Button variant="contained" className={classes.buttonGenerate}>
                        Generate report
                    </Button>
                </Box>
              </FormControl>
            </Box>
          </Grid>
          <Grid item={6}>
              <Paper className={classes.data} >
                  <Container>
                      <Typography className={classes.details} component="p">Тип оборудования: <Typography className={classes.dataDescription} component="span" >Весы</Typography></Typography>
                      <Typography className={classes.details} component="p">Статус: <Typography className={classes.dataDescription} component="span" > Готов к работе</Typography></Typography>
                      <Typography className={classes.details} component="p">Изготовитель: <Typography className={classes.dataDescription} component="span" >Ohaus</Typography> </Typography>
                      <Typography className={classes.details} component="p">Модель: <Typography className={classes.dataDescription} component="span" > AX-123</Typography></Typography>
                      <Typography className={classes.details} component="p">Ответственное подразделение (ремонт): <Typography className={classes.dataDescription} component="span" >Группа обслуживаниялабораторного оборудования</Typography></Typography>
                      <Typography className={classes.details} component="p">Эксплуатирующее подразделение: <Typography component="span" variant="b">Химико-аналитическая лаборатория 2.0</Typography></Typography>
                      <Typography className={classes.details} component="p">МОЛ: <Typography className={classes.dataDescription} component="span" >Иванов Иван Иванович</Typography> </Typography>
                      <Typography className={classes.details} component="p">Территория: <Typography className={classes.dataDescription} component="span" >г. Санкт-Петербург (Нойдорф)</Typography> </Typography>
                      <Typography className={classes.details} component="p">Серийный номер: <Typography className={classes.dataDescription} component="span" >B715976163</Typography> </Typography>
                      <Typography className={classes.details} component="p">GUID: <Typography  className={classes.blueId} component="span">508b2a71-662e-4983-ae0c-3cb0c1cd21c5</Typography></Typography>
                      <Typography className={classes.details} component="p">Bims ID: <Typography className={classes.blueId} component="span">49db8db1-585f-4b9e-bbf0-8a59698edc8b</Typography></Typography>
                      <Typography className={classes.details} component="p">Tam: <Typography  className={classes.blueId} component="span">А-001234</Typography> </Typography>
                  </Container>
              </Paper>
          </Grid>
        </Grid>
      <TableBox/>
      </Container>
    </>
  );
};

export default App;
