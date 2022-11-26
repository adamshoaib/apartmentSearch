import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ResultCard({ name, description, seeDetailsClicked }) {
  return (
    <Card sx={{ width: 345, marginRight: 5, marginTop: 5 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://picsum.photos/200/300"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <div>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            seeDetailsClicked();
          }}
          size="small"
        >
          See Details
        </Button>
      </CardActions>
    </Card>
  );
}
