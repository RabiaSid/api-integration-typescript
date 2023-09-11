import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button";
import Form from "../../components/form";

export default function ProductForm() {
  const params = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>({});

  const baseAPI = "https://jsonplaceholder.typicode.com/comments";

  // target single post
  const getPostById = () => {
    axios(`${baseAPI}/${params.id}`)
      .then((res) => {
        console.log("Succesfully --get Single data " , { ...res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // new post
  const newPost = () => {
    post.userId = 501;
    axios
      .post(baseAPI, post)
      .then((res) => {
        // setPost({ ...res.data });
        console.log("Successfully Add New --Post", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // new edit
  const editPost = () => {
    axios
      .put(`${baseAPI}/${params.id}`, post)
      .then((res) => {
        setPost({ ...res.data });
        console.log(" Successfully Edit(--put) New Post", { ...res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPostById();
  }, []);

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
          <Form
            valueName={post.name}
            onChangeName={(e) => setPost({ ...post, title: e.target.value })}
            valueEmail={post.email}
            onChangeEmail={(e) => setPost({ ...post, title: e.target.value })}
            valueBody={post.body}
            onChangeBody={(e) => setPost({ ...post, title: e.target.value })}
          />
          {params.id ? (
            <Button
              variant="contained"
              color="primary"
              onClick={editPost}
              label="Update"
            />
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={newPost}
              label="Submit"
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
