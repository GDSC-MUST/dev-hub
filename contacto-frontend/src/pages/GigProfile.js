import { Button, Grid, Input, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Dropdown from "../components/Dropdown";
import axios from "axios";

const initialGigData = {
    devName: '',
    expertise: '',
    category: '',
    rate: '',
}

export default function GigProfile() {

    const [gigData, setGigData] = useState(initialGigData)

    let handleInputChange = (event) => {
        const { name, value } = event.target;
        setGigData({
            ...gigData,
            [name]: value
        })
    }

    let submitForm = function (event) {
        console.log(gigData);
        axios.post("http://localhost:5000/submit", gigData).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }


    return (
        <Grid container p={5}>
            <Grid item xs={12} p={4}>
                <Typography variant="h5">CREATE A GIG</Typography>
                <Grid container p={4} sx={{ textAlign: 'left' }}>
                    <Grid item xs={12} px={4} mx={2} py={2}>
                        <Typography variant="body1">Name of Developer</Typography>
                        <TextField fullWidth
                            id="standard-basic"
                            name='devName'
                            value={gigData.devName}
                            onChange={handleInputChange}
                            size="small"
                            placeholder="Name"
                        />
                    </Grid>
                    <Grid item xs={12} px={4} mx={2} py={2}>
                        <Typography variant="body1">Add gig photo:</Typography>
                        <Input accept="file/*" id="contained-button-file" multiple type="file" placeholder="Add a photo" />
                    </Grid>
                    <Grid item xs={12} px={4} mx={2} py={2}>
                        <Typography variant="body1">Expertise</Typography>
                        <TextField fullWidth multiline
                            id="standard-basic"
                            name='expertise'
                            value={gigData.expertise}
                            onChange={handleInputChange}
                            size="small"
                            placeholder="Explain your expertise in one line"
                        />
                    </Grid>
                    <Grid item xs={12} px={4} mx={2} py={2}>
                        <Typography variant="body1">Select a category:</Typography>
                        <Dropdown />
                    </Grid>
                    <Grid item xs={12} px={4} mx={2} py={2}>
                        <Typography variant="body1">Rate</Typography>
                        <TextField fullWidth multiline
                            id="standard-basic"
                            name='rate'
                            value={gigData.rate}
                            onChange={handleInputChange}
                            size="small"
                            placeholder="Enter rate in INR"
                        />
                    </Grid>
                </Grid>

                <Button variant="contained" onClick={submitForm}>Save</Button>
            </Grid>

        </Grid>

    )
}