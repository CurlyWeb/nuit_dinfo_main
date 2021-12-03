import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import React , {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {users} from "./_Mocks_"
import Navbar from './Navbar';


function Dashboard() {
  const [state1, setstate1] = useState(false);
  const handlestate1 = () => setstate1(true);
  const handleClose = () => setstate1(false);

  const [openBoat, setOpenBoat] = useState(false);
  const handleOpenBoat = () => setOpenBoat(true);
  const handleCloseBoat = () => setOpenBoat(false);

  const [openSauv, setOpenSauv] = useState(false);
  const handleOpenSauv = () => setOpenSauv(true);
  const handleCloseSauv = () => setOpenSauv(false);


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
    return (
        <div>
     
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Sauveteur</th>
                <th scope="col">Personne</th>
                <th scope="col">Bateau</th>
                <th scope="col">Date</th>
                <th scope="col">Location</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {
                users.map(user => {
                  return <>
                      <tr>
                <th scope="row">

                <Button variant="contained" color="primary" onClick={handleOpenSauv} >
                      Plus détails
                    </Button>
                </th>
                <td>
                    <Button variant="contained" color="primary" onClick={handlestate1} >
                      Plus détails
                    </Button>
                    <div>
 
      <Modal
        stat1={state1}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Informations sur le sauveteurs
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
       
            {user.Rescures.map(resc => {
              return <div>
                {resc.FirstName}
              </div>
            }) }
      
          </Typography>
        </Box>
      </Modal>


      <Modal
        open={openSauv}
        onClose={handleCloseSauv}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Informations sur le sauveteurs
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
       
          {users.map(user => {
                  return (<>
                  <span >{user.Saver.FirstName +" "}</span> 
                  <span>{user.Saver.LastName}</span>
                  </>
                  )
                })} 
      
          </Typography>
        </Box>
      </Modal>
    </div>
                    
                </td>
                <td>
                <Button variant="contained" color="primary" onClick={handleOpenBoat}>
                      Plus détails
                    </Button>

                    <div>
 
 <Modal
   open={openBoat}
   onClose={handleCloseBoat}
   aria-labelledby="modal-modal-title"
   aria-describedby="modal-modal-description"
 >
   <Box sx={style}>
     <Typography id="modal-modal-title" variant="h6" component="h2">
       Informations Sur le Bateau
     </Typography>
     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
     {users.map(user => {
       return (
         <div>
          Nom du bateau : <p> {user.Boat.Name} </p>
          State :<p> {user.Boat.State} </p>

        </div>
       );
     })}
     </Typography>
   </Box>
 </Modal>
</div>

                </td>
                <td>
                Date
                </td>
                <td>Location</td>
                <td>
                <Button variant="contained" color="green">
                      Accepter
                    </Button>
                    <Button variant="contained" color="primary" className="decline_btn">
                      Refuser
                    </Button>
                </td>
                </tr>
                  </>
                })
              }
              
                
            </tbody>
            </table>
        </div>
    )
}

export default Dashboard
