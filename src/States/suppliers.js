import React, { useState, useEffect } from "react";
import { Box, Typography, FormControlLabel, Grid, TextField, Checkbox, Paper, Table, TableBody, TableHead, TableContainer, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { userStyle } from '../../PageStyle';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { StyledTableRow, StyledTableCell } from '../../../components/Table';
import axios from 'axios';
import jsPDF from "jspdf";
import { FaPrint, FaFilePdf, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ExportXL, ExportCSV } from '../../Export';
import autoTable from 'jspdf-autotable';
import { toast } from 'react-toastify';
import Headtitle from '../../../components/header/Headtitle';
import { OutlinedInput } from "@material-ui/core";

function Supplierlisttable() {

    const [suppliers, setSuppliers] = useState([]);
    const [dateFilter, setDateFilter] = useState({startdate:"",enddate:""})
    const[nameSearch , setNameSearch]=useState([])
    const[citySearch , setCitySearch]=useState([])
    

    // Suppliers
    const fetchSuppliers = async () => {
        try {
            let req = await axios.get("http://192.168.85.6:8000/api/suppliers");
            let getDatawithFilter = req.data.suppliers.filter((data)=>{
                let startdatefromsupplier = dateFilter.startdate;
                let enddatefromsupplier = dateFilter.enddate;

                return startdatefromsupplier <= data.createdAt && (dateFilter.enddate+1) >= data.createdAt
            })
            setSuppliers(getDatawithFilter);
        } catch (err) {
            const messages = err.response.data.message;
            toast.error(messages);
        }
    };

    useEffect(
        ()=>{
            console.log(dateFilter.startdate, 'start date')
        },[dateFilter]
    )


//name wise filtering the suppliers list 
const fetchNameSupplier = async () => {
    try {
        let req = await axios.get("http://192.168.85.6:8000/api/suppliers");
        let getNamewithFilter = req.data.suppliers.filter((data)=>{

            return nameSearch.suppliernames === data.suppliername
        })
        setSuppliers(getNamewithFilter);
    } catch (err) {
        const messages = err.response.data.message;
        toast.error(messages);
    }
};



//City wise filtering the suppliers list 
const fetchCityWiseSupplier = async () => {
    try {
        let req = await axios.get("http://192.168.85.6:8000/api/suppliers");
        let getCitywithFilter = req.data.suppliers.filter((data)=>{

            return citySearch.suppliercity === data.city
        })
        setSuppliers(getCitywithFilter);
    } catch (err) {
        const messages = err.response.data.message;
        toast.error(messages);
    }
};


    return (
        <Box>
           
            <Headtitle title={'Suppliers'} />
            { /* ****** Header Content ****** */}
            <Typography sx={userStyle.HeaderText}>Suppliers  <Typography sx={userStyle.SubHeaderText}>Manage your Suppliers</Typography></Typography>

            <Box>
                <TextField 
                type="date"
                value={dateFilter.startdate}
                onChange={(e) => {setDateFilter({...dateFilter, startdate: e.target.value})}}
                />
                <TextField 
                type="date"
                value={dateFilter.enddate}
                onChange={(e) => {setDateFilter({...dateFilter, enddate: e.target.value})}}
                />
                <Button onClick={fetchSuppliers}  variant="contained">Filter</Button>


                {/* Name Wise Filter */}
                <TextField 
                type="text"
                value={nameSearch.suppliernames}
                onChange={(e) => {setNameSearch({...nameSearch, suppliernames: e.target.value})}}
                />
                <Button onClick={fetchNameSupplier}  variant="contained">Filter Name</Button>

                {/* City Wise Filter */}
                <TextField 
                type="text"
                value={nameSearch.suppliercity}
                onChange={(e) => {setCitySearch({...nameSearch, suppliercity: e.target.value})}}
                />
                <Button onClick={fetchCityWiseSupplier}  variant="contained">Filter City</Button>
            </Box>


            { /* ****** Table Start ****** */}
            <>
                <Box sx={userStyle.container} >
                    { /* ****** Header Content ****** */}
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Typography sx={userStyle.importheadtext}>All your Suppliers</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Link to={'/contact/supplier/create'} style={{ textDecoration: 'none', color: '#fff', minWidth: '0px' }}><Button variant="contained" sx={userStyle.buttonadd}>ADD</Button></Link>
                        </Grid>
                    </Grid><br />
                    { /* ****** Header Buttons ****** */}
                    <Grid container sx={{ justifyContent: "center" }}> 

                        {/* ****** Table Grid Container ****** */}
                        <Grid container>
                            <Grid md={4} sm={2} xs={1}></Grid>
                            <Grid md={8} sm={10} xs={10} sx={{ align: "center" }}></Grid>
                        </Grid>
                    </Grid><br />
                    { /* ****** Table start ****** */}
                    <TableContainer component={Paper} >
                        <Table sx={{}} aria-label="simple table" id="suppliertable">
                            <TableHead sx={{ fontWeight: "600" }} >
                                <StyledTableRow >
                                    <StyledTableCell>Actions</StyledTableCell>
                                    <StyledTableCell>Supplier Code</StyledTableCell>
                                    <StyledTableCell>Supplier Name</StyledTableCell>
                                    <StyledTableCell>Address1</StyledTableCell>
                                    <StyledTableCell>Address2</StyledTableCell>
                                    <StyledTableCell>Country</StyledTableCell>
                                    <StyledTableCell>State</StyledTableCell>
                                    <StyledTableCell>City</StyledTableCell>
                                    <StyledTableCell>Pincode</StyledTableCell>
                                    <StyledTableCell>Email</StyledTableCell>
                                    <StyledTableCell>GSTN</StyledTableCell>
                                    <StyledTableCell>Mobile</StyledTableCell>
                                    <StyledTableCell>Landline</StyledTableCell>
                                    <StyledTableCell>Whatsapp</StyledTableCell>
                                    <StyledTableCell>Contact Person Name</StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                            { suppliers && (suppliers.map((row,index) =>
                               
                                        <StyledTableRow key={index}>
                                            <StyledTableCell align="left">{row.autogenerate}</StyledTableCell>
                                            <StyledTableCell align="left">{row.suppliername}</StyledTableCell>
                                            <StyledTableCell align="left">{row.addressone}</StyledTableCell >
                                            <StyledTableCell align="left">{row.addresstwo}</StyledTableCell>
                                            <StyledTableCell align="left">{row.country}</StyledTableCell>
                                            <StyledTableCell align="left">{row.state}</StyledTableCell>
                                            <StyledTableCell align="left">{row.city}</StyledTableCell>
                                            <StyledTableCell align="left">{row.pincode}</StyledTableCell>
                                            <StyledTableCell align="left">{row.email}</StyledTableCell>
                                            <StyledTableCell align="left">{row.gstn}</StyledTableCell>
                                            <StyledTableCell align="left">{row.phoneone}</StyledTableCell>
                                            <StyledTableCell align="left">{row.landline}</StyledTableCell>
                                            <StyledTableCell align="left">{row.whatsapp}</StyledTableCell>
                                            <StyledTableCell align="left">{row.contactperson}</StyledTableCell>
                                        </StyledTableRow>
                                   ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    { /* ****** Table End ****** */}
                </Box>
            </>
            { /* ****** Table End ****** */}
        </Box>
    );
}

function Supplierlist() {
    return (
        <Box sx={{ display: 'flex', }} >
            <Sidebar />
            <Box sx={{ width: '100%', overflowX: 'hidden' }}>
                <Box component="main" sx={{ padding: '30px', }}><br /><br />
                    <Supplierlisttable /><br /><br /><br /><br />
                    <Footer />
                </Box>
            </Box>
        </Box>
    );
}
export default Supplierlist;