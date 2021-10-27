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
import ClearIcon from '@material-ui/icons/Clear';
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    title: {
        fontSize: "17px",
        color: "grey"
    },
    checkMark: {
        marginLeft: "20px",
        color: "white",
        backgroundColor: "#6BAE45",
        borderRadius: "15px",
        height: "19px",
        fontSize: "19px"
    },
    cross: {
        marginLeft: "20px",
        borderRadius: "11px",
        color: "white",
        width: "20px",
        height: "20px",
        backgroundColor: "#D10000"
    },
    OneRow: {
        fontSize: "19px",
       lineHeight: "19px"
},
    nomer: {
        fontSize: "17px",
        lineHeight: "29px",

    },
    user: {
        fontSize: "16px",
        lineHeight: "14px",
}
})

const TableBox = () => {
    const classes = useStyles();



        return (
        <>
            <>
                <Paper style={{marginTop: "50px"}} elevation={10}>
                    <TableContainer>
                        <Typography component="p" variant="h6" style={{padding: "20px"}}>Calibration report</Typography>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead style={{marginBottom: "30px"}}>
                                <TableRow>
                                    <TableCell className={classes.title}>Data</TableCell>
                                    <TableCell className={classes.title} align="right">Used buffer solutions</TableCell>
                                    <TableCell className={classes.title} align="right">Slope, %<br/> Norm 95-105</TableCell>
                                    <TableCell className={classes.title} align="right">Offset, mV<br/> Norm ±(0-20)</TableCell>
                                    <TableCell className={classes.title} align="center">User</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableRow >
                                    <TableCell className={classes.OneRow} align="right">04.10.19<br/>10:23</TableCell>
                                    <TableCell   className={classes.nomer}  align="right">
                                        В1: № 2000460789536: pH 1.09<br/>
                                        В2: № 2000460789536: pH 2.00<br/>
                                        В3: № 2000460789536: pH 4.01<br/>
                                        В4: № 2000460789536: pH 7.00<br/>
                                        В5: № 2000460789536: pH 9.21<br/>
                                    </TableCell>
                                    <TableCell align="right"><Typography component="span" variant="h6">98.7</Typography>  <CheckCircleOutlineIcon  className={classes.checkMark}/></TableCell>
                                    <TableCell align="right"><Typography component="span" variant="h6">-0.3</Typography>    <CheckCircleOutlineIcon  className={classes.checkMark}/> </TableCell>
                                    <TableCell className={classes.user}  align="right">Иванов Генадий Петрович</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell  className={classes.OneRow}  align="right">04.10.19<br/>10:23</TableCell>
                                    <TableCell  className={classes.nomer}   align="right">
                                        В1: № 2000460789536: pH 1.09<br/>
                                        В2: № 2000460789536: pH 2.00<br/>
                                        В3: № 2000460789536: pH 4.01<br/>
                                        В4: № 2000460789536: pH 7.00<br/>
                                        В5: № 2000460789536: pH 9.21<br/>
                                    </TableCell>
                                    <TableCell align="right"><Typography component="span" variant="h6">98.7</Typography>   <CheckCircleOutlineIcon  className={classes.checkMark}/> </TableCell>
                                    <TableCell align="right"><Typography component="span" variant="h6">-0.3 </Typography>  <CheckCircleOutlineIcon  className={classes.checkMark}/> </TableCell>
                                    <TableCell  className={classes.user} align="right">Иванов Генадий Петрович</TableCell>
                                </TableRow>

                                <TableRow>

                                    <TableCell className={classes.OneRow}  align="right">04.10.19<br/>10:23</TableCell>
                                    <TableCell  className={classes.nomer}   align="right">
                                        В1: № 2000460789536: pH 1.09<br/>
                                        В2: № 2000460789536: pH 2.00<br/>
                                        В3: № 2000460789536: pH 4.01<br/>
                                        В4: № 2000460789536: pH 7.00<br/>
                                        В5: № 2000460789536: pH 9.21<br/>
                                    </TableCell>
                                    <TableCell align="right"><Typography component="span" variant="h6">98.7</Typography>   <CheckCircleOutlineIcon  className={classes.checkMark}/> </TableCell>
                                    <TableCell align="right"><Typography component="span" variant="h6">-0.3</Typography>   <CheckCircleOutlineIcon  className={classes.checkMark}/> </TableCell>
                                    <TableCell className={classes.user}  align="right">Иванов Генадий Петрович</TableCell>
                                </TableRow>

                                <TableRow>

                                    <TableCell className={classes.OneRow}  align="right">04.10.19<br/>10:23</TableCell>
                                    <TableCell   className={classes.nomer}   align="right">
                                        В1: № 2000460789536: pH 1.09<br/>
                                        В2: № 2000460789536: pH 2.00<br/>
                                        В3: № 2000460789536: pH 4.01<br/>
                                        В4: № 2000460789536: pH 7.00<br/>
                                        В5: № 2000460789536: pH 9.21<br/>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography component="span" variant="h6"> 98.7</Typography>   <CheckCircleOutlineIcon  className={classes.checkMark}/> </TableCell>
                                    <TableCell align="right"><Typography component="span" variant="h6">-0.3</Typography><CheckCircleOutlineIcon  className={classes.checkMark}/> </TableCell>
                                    <TableCell className={classes.user}  align="right">Иванов Генадий Петрович</TableCell>
                                </TableRow>

                                <TableRow>

                                    <TableCell className={classes.OneRow}  align="right">04.10.19<br/>10:23</TableCell>
                                    <TableCell    className={classes.nomer}   align="right">
                                        В1: № 2000460789536: pH 1.09<br/>
                                        В2: № 2000460789536: pH 2.00<br/>
                                        В3: № 2000460789536: pH 4.01<br/>
                                        В4: № 2000460789536: pH 7.00<br/>
                                        В5: № 2000460789536: pH 9.21<br/>
                                    </TableCell>
                                    <TableCell align="right"><Typography component="span" variant="h6">90.1</Typography>    < ClearIcon className={classes.cross}/></TableCell>
                                    <TableCell align="right"><Typography component="span" variant="h6"> -0.5 </Typography> <CheckCircleOutlineIcon  className={classes.checkMark}/> </TableCell>
                                    <TableCell  className={classes.user} align="right">Иванов Генадий Петрович</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>

            </>
        </>
    );
};

export default TableBox;