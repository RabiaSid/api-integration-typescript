import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from  "../../components/button"
import Form from "../../components/form";

export default function ProductForm() {
  // const navigate = useNavigate();
  // const [post, setPost] = useState<any>([]);

  // const baseAPI = "https://jsonplaceholder.typicode.com/comments";

  // const getPost = () => {
  //   axios
  //     .get(`${baseAPI}`)
  //     .then((res) => {
  //       setPost([...res.data]);
  //       console.log([...res.data]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   getPost();
  // }, []);

  return (
    <Box
      sx={{ flexGrow: 1, padding: "5px", marginY: "5px", marginX: "15px" }}
      justifyContent="center"
    >
      <Grid container justifyContent="center" spacing={2}>
          <Grid
            item
            xs={11}
            sm={6}
            md={4}
            lg={3}
            sx={{ padding: "5px", marginY: "5px" }}
          >
            <Form></Form>
          </Grid>
      </Grid>
    </Box>
  );
}

