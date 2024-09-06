import styles from "./Button.module.css"
import MuiButton from "@mui/material/Button"

export const Button = ({children,img,link}) => {
  return <MuiButton variant="contained"> {children} </MuiButton>
  
}
