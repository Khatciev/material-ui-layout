import React from 'react';
import {
    Checkbox,
    Container, FormControlLabel, IconButton,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Typography, withStyles
} from "@material-ui/core"
import {green} from "@material-ui/core/colors";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    title: {
        color: "grey"
    },
    checkMark: {

        color: "white",
        backgroundColor: "#6BAE45",
        borderRadius: "15px",
        fontSize: "20px"
    }
})

const TableBox = () => {
    const classes = useStyles();


    const GreenCheckbox = withStyles({
        root: {
            color: green[900],
            '&$checked': {
                color: green[1000],
            },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />);

        const [state, setState] = React.useState({checkedR: true, checkedG: true,});

        const handleChange = (event) => {
            setState({ ...state, [event.target.name]: event.target.checked });
        };


        return (
        <>
            <Container style={{ marginTop: "50px",}}>
                <TableContainer component={Paper}>
                   <Typography component="p" variant="h6">Calibration report</Typography>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.title}>Data</TableCell>
                                <TableCell className={classes.title} align="right">Used buffer solutions</TableCell>
                                <TableCell className={classes.title} align="right">Slope, % Norm 95-105</TableCell>
                                <TableCell className={classes.title} align="right">Offset, mV Norm ±(0-20)</TableCell>
                                <TableCell className={classes.title} align="right">User</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                                <TableRow>
                                    <TableCell align="right">04.10.19<br/>10:23</TableCell>
                                    <TableCell align="right">
                                        В1: № 2000460789536: pH 1.09<br/>
                                        В2: № 2000460789536: pH 2.00<br/>
                                        В3: № 2000460789536: pH 4.01<br/>
                                        В4: № 2000460789536: pH 7.00<br/>
                                        В5: № 2000460789536: pH 9.21<br/>
                                    </TableCell>
                                    <TableCell align="right"><Typography component="span">98.7</Typography> <CheckCircleOutlineIcon  className={classes.checkMark}/></TableCell>
                                    <TableCell align="right">-0.3  <CheckCircleOutlineIcon  className={classes.checkMark}/> </TableCell>
                                    <TableCell align="right">Иванов Генадий Петрович</TableCell>
                                </TableRow>

                            <TableRow>

                                <TableCell align="right">04.10.19<br/>10:23</TableCell>
                                <TableCell align="right">
                                    В1: № 2000460789536: pH 1.09<br/>
                                    В2: № 2000460789536: pH 2.00<br/>
                                    В3: № 2000460789536: pH 4.01<br/>
                                    В4: № 2000460789536: pH 7.00<br/>
                                    В5: № 2000460789536: pH 9.21<br/>
                                </TableCell>
                                <TableCell align="right">98.7 <CheckCircleOutlineIcon  className={classes.checkMark}/> </TableCell>
                                <TableCell align="right">-0.3 <CheckCircleOutlineIcon  className={classes.checkMark}/> </TableCell>
                                <TableCell align="right">Иванов Генадий Петрович</TableCell>
                            </TableRow>

                            <TableRow>

                                <TableCell align="right">04.10.19<br/>10:23</TableCell>
                                <TableCell align="right">
                                    В1: № 2000460789536: pH 1.09<br/>
                                    В2: № 2000460789536: pH 2.00<br/>
                                    В3: № 2000460789536: pH 4.01<br/>
                                    В4: № 2000460789536: pH 7.00<br/>
                                    В5: № 2000460789536: pH 9.21<br/>
                                </TableCell>
                                <TableCell align="right">98.7 <CheckCircleOutlineIcon  className={classes.checkMark}/> </TableCell>
                                <TableCell align="right">-0.3 <CheckCircleOutlineIcon  className={classes.checkMark}/> </TableCell>
                                <TableCell align="right">Иванов Генадий Петрович</TableCell>
                            </TableRow>

                            <TableRow>

                                <TableCell align="right">04.10.19<br/>10:23</TableCell>
                                <TableCell align="right">
                                    В1: № 2000460789536: pH 1.09<br/>
                                    В2: № 2000460789536: pH 2.00<br/>
                                    В3: № 2000460789536: pH 4.01<br/>
                                    В4: № 2000460789536: pH 7.00<br/>
                                    В5: № 2000460789536: pH 9.21<br/>
                                </TableCell>
                                <TableCell align="right">
                                  98.7 <CheckCircleOutlineIcon  className={classes.checkMark}/> </TableCell>
                                <TableCell align="right">-0.3 <CheckCircleOutlineIcon  className={classes.checkMark}/> </TableCell>
                                <TableCell align="right">Иванов Генадий Петрович</TableCell>
                            </TableRow>

                            <TableRow>

                                <TableCell align="right">04.10.19<br/>10:23</TableCell>
                                <TableCell align="right">
                                    В1: № 2000460789536: pH 1.09<br/>
                                    В2: № 2000460789536: pH 2.00<br/>
                                    В3: № 2000460789536: pH 4.01<br/>
                                    В4: № 2000460789536: pH 7.00<br/>
                                    В5: № 2000460789536: pH 9.21<br/>
                                </TableCell>
                                <TableCell align="right">90.1</TableCell>
                                <TableCell align="right">-0.5 <CheckCircleOutlineIcon  className={classes.checkMark}/> </TableCell>
                                <TableCell align="right">Иванов Генадий Петрович</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
};

export default TableBox;