import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen } from '@fortawesome/free-solid-svg-icons';

export default function Modal({setItem, editOrCreate, item}) {

  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [quantity, setQuantity] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSetItem = () => {
      if (name === "" || quantity <= 0 ) return;
      if (!item) {
          setItem({name: name, quantity: quantity});
          handleClose();
      }
      if (item) {
          setItem({...item, name: name, quantity: quantity});
          handleClose();
      }
  }


  return (
    <div>
        {editOrCreate=== "create" &&
            <button
                onClick={handleClickOpen}
                style={{height: "25px",
                    width:"26px",
                    borderRadius:"50%",
                    backgroundColor:"#2fa129",
                    color:"#fff",
                    border:"none",
                    outline:"none"}}> <FontAwesomeIcon icon={faPlus}/>
            </button>
        }
        {editOrCreate=== "edit" &&
            <button
                onClick={handleClickOpen}
                style={{height: "25px",
                    width:"26px",
                    borderRadius:"50%",
                    backgroundColor:"#2fa129",
                    color:"#fff",
                    border:"none",
                    outline:"none"}}> <FontAwesomeIcon icon={faPen}/>
            </button>
        }
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{editOrCreate==="create" ? "Create new item?" : "Edit this item?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Set name and desirible quantity in requared field.
                    </DialogContentText>
                    <TextField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        color={name === "" ? "secondary" : "primary"}
                        autoFocus
                        defaultValue={item ? item.name : ""}
                        margin="dense"
                        required={true}
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        value={quantity}
                        color={quantity <= 0 ? "secondary" : "primary"}
                        onChange={(e) => setQuantity(e.target.value)}
                        margin="dense"
                        id="quantity"
                        label="Quantity"
                        type="number"
                        fullWidth
                    />
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={() => onSetItem()} style={{color:"green"}}>
                    Save
                </Button>
            </DialogActions>

        </Dialog>
    </div>
  );
}
