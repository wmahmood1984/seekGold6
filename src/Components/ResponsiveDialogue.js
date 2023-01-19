import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import spinner from "../Images/Loading_icon.gif"



function ResponsiveDialog({open,setOpen}) {




    return (
        <div>
          <Dialog
        open={open}
  
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
         Transaction in process...
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
                    <img src={spinner}></img>    
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
  
  
        </DialogActions>
      </Dialog>
          
        </div>
     
    );
  }


  export default ResponsiveDialog