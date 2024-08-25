import { Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  fontWeight: theme.typography.body2.fontWeight[5],
  letterSpacing: theme.typography.body2.letterSpacing,
  color: theme.palette.text.secondary,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.text.secondary,
    color: theme.palette.primary.light,
    transition: "0.3s ease-in-out",
  },
}));

export default Item;
