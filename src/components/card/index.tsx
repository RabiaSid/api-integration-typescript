import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "../button";

type CardProps = {
  onClick?: (...args: any[]) => any;
  name: string;
  email: string;
  body: string;
};

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function CustomizedCard(props: CardProps) {
  const { name, email, body, onClick } = props;

  return (
    <Card sx={{ minWidth: 275, background: "#ebeeef" }} onClick={onClick}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {email}
        </Typography>
        <Typography variant="body2">{body}</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" variant="outlined" label="Edit" />
        <Button color="primary" variant="outlined" label="Delete" />
      </CardActions>
    </Card>
  );
}
