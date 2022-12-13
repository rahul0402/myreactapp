import React from "react";
import { Grid, Typography, Box, Link, TableCell, TableContainer, TableHead, TableRow, TableBody, Button , } from "@mui/material";
import { Style } from "./Style";
import {InsertDriveFile } from "@mui/icons-material";
import PrintIcon from '@mui/icons-material/Print';
import DeleteIcon from '@mui/icons-material/Delete';
import GetAppIcon from '@mui/icons-material/GetApp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Table } from "react-bootstrap";



export default  function Sample(){
    return(
<Box sx={Style.totContainer}>
        
        <Typography sx={Style.users}>Users <Typography sx={Style.subHeading}>Manage Users </Typography> </Typography>
        {/* Start of inner grid-1 */}
    <Box sx={{background:'white'}}>
            {/* Dividing the grid into two parts */}
            <Grid container >
                <Grid items xs={10}>
                    <Typography sx={Style.secondRowHead}>All your users</Typography>
                </Grid>
                <Grid items xs={2}>
                    <Link To="#"><Button sx={Style.secondRowButton}>ADD</Button></Link>
                </Grid>
              
            </Grid><br/>
            {/* start of 3rd row buttons  */}
             <Grid container sx={Style.buttonGrid}>
                <Grid>
                    <Button sx={Style.buttons}><InsertDriveFile sx={Style.icons}/>Export to CSV</Button>
                    <Button sx={Style.buttons}><InsertDriveFile sx={Style.icons}/>Export to Excel</Button>
                    <Button sx={Style.buttons}><PrintIcon sx={Style.icons}/>Print</Button>
                    <Button sx={Style.buttons}><InsertDriveFile sx={Style.icons}/>Export to Pdf</Button>
                </Grid>
            </Grid>

            {/* Start of 4th Row */}
        <Box>
            <TableContainer sx={Style.tableContainer}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow >
                            {/* Table Headings */}
                            <TableCell sx={{fontWeight:'600'}}>UserName</TableCell>
                            <TableCell sx={{fontWeight:'600'}}>Name</TableCell>
                            <TableCell sx={{fontWeight:'600'}}>Role</TableCell>
                            <TableCell sx={{fontWeight:'600'}}>Email</TableCell>
                            <TableCell sx={{fontWeight:'600'}}>Action</TableCell> 
                        </TableRow>
                   
                    </TableHead>
                    {/* table Data's for all */}
                    <TableBody sx={Style.tableRow}>
                        <TableRow >
                            <TableCell>Ponmana Selvan </TableCell>
                            <TableCell>Selvan</TableCell>
                            <TableCell>Admin</TableCell>
                            <TableCell>ponmanaselvan@gmail.com</TableCell>
                            <TableCell >
                                <Link To="#"><Button sx={Style.buttonGroup}><DeleteIcon /></Button></Link>
                                <Link To="#"><Button sx={Style.buttonGroup}><GetAppIcon/></Button></Link>
                                <Link To="#"><Button sx={Style.buttonGroup}><VisibilityIcon/></Button></Link>
                        
                            </TableCell>
                        

                        </TableRow>
                        <TableRow sx={{background:'lightgrey'}}>
                            <TableCell>Muthu Manikandan</TableCell>
                            <TableCell>Muthu</TableCell>
                            <TableCell>Director</TableCell>
                            <TableCell>muthu@gmail.com</TableCell>
                            <TableCell>
                                <Link To="#"><Button><DeleteIcon/></Button></Link>
                                <Link To="#"><Button><GetAppIcon/></Button></Link>
                                <Link To="#"><Button><VisibilityIcon/></Button></Link>
                                </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Kamaleshwari </TableCell>
                            <TableCell>kamaleshwari </TableCell>
                            <TableCell>Manager</TableCell>
                            <TableCell>kamaleshwari@gmail.com</TableCell>
                            <TableCell>
                                <Link To="#"><Button><DeleteIcon/></Button></Link>
                                <Link To="#"><Button><GetAppIcon/></Button></Link>
                                <Link To="#"><Button><VisibilityIcon/></Button></Link>
                            </TableCell>
                        </TableRow>
                        <TableRow sx={{background:'lightgrey'}}>
                            <TableCell>Rahul</TableCell>
                            <TableCell>Rahul</TableCell>
                            <TableCell>Employee</TableCell>
                            <TableCell>vrahuldgl1998@gmail.com</TableCell>
                            <TableCell>
                                <Link To="#"><Button><DeleteIcon/></Button></Link>
                                <Link To="#"><Button><GetAppIcon/></Button></Link>
                                <Link To="#"><Button><VisibilityIcon/></Button></Link>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
     </Box>
        
       
</Box>

    )

}
