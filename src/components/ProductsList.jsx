import React, { useState, useEffect } from "react";
import {
  List,
  Chip,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import { productsData, commentsData } from "../dashboard";

export default function ProductList() {
  const [productsDataArr, setProductsData] = useState([]);
  const [commentsDataArr, setCommentsData] = useState([]);

  useEffect(() => {
    productsData.then((e) => setProductsData(e));
    commentsData.then((e) => setCommentsData(e));
  }, []);

  const numOfComments = (id) =>
    commentsDataArr.filter((comment) => comment.productId === id).length;

  return (
    <List>
      {productsDataArr
        .sort((a, b) => numOfComments(b.id) - numOfComments(a.id))
        .map((product) => (
          <div key={product.id}>
            <ListItem alignItems="flex-start">
              <Chip
                label={numOfComments(product.id)}
                color="primary"
                size="small"
                style={{ margin: "10px 10px 0 0" }}
              />
              <ListItemText
                primary={product.title}
                secondary={
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {product.body}
                  </Typography>
                }
              />
            </ListItem>
            <Divider
              variant="inset"
              component="li"
              style={{ maxWidth: "80%" }}
            />
          </div>
        ))}
    </List>
  );
}
