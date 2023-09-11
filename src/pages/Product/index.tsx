import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomizedCard from "../../components/card";
import Button from  "../../components/button"

export default function AppProduct() {
  const navigate = useNavigate();
  const [post, setPost] = useState<any>([]);

  const baseAPI = "https://jsonplaceholder.typicode.com/comments";

  const getPost = () => {
    axios
      .get(`${baseAPI}`)
      .then((res) => {
        setPost([...res.data]);
        console.log("Succesfully --get all data " , [...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePost = (id: any) => {
    axios
      .delete(`${baseAPI}/${id}`)
      .then((res) => {
        console.log("Succesfully card --delete");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Box
      sx={{ flexGrow: 1, padding: "5px", marginY: "5px", marginX: "15px" }}
      justifyContent="center"
    >
      <Grid container>
        <Grid
          item
          xs={10}
          sm={6}
          md={4}
          sx={{ padding: "5px", marginY: "5px" }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/product-form")}
            label="Add"
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={2}>
        {post.map((x: any, i: any) => (
          <Grid
            item
            xs={11}
            sm={6}
            md={4}
            lg={3}
            sx={{ padding: "5px", marginY: "5px" }}
            key={i}
          >
            <CustomizedCard name={x.name} email={x.email} body={x.body}
            onEditClick={() => {
              navigate(`product-form/${x.id}`)}
            } 
            onDeleteClick={() => deletePost(x.id)}
            // onEditClick={updatepost} 
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
