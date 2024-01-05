import React, {useState} from 'react'
import AvatarGroup from '@mui/material/AvatarGroup';
import { Avatar } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
import { useDeleteWorkspaces } from '@/utils/api';
import EditWorkspace from './EditWorkspace';
import { useRouter } from 'next/navigation';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;


const Card = ({val}) => {

  const deleteWorkspaceMutation = useDeleteWorkspaces();
  const workspaceData=val;

  const [loadingOverlay, setLoadingOverlay] = useState(false);
  const router = useRouter()

  const deleteCard = async () => {
    try {
      setLoadingOverlay(true);
      const { data } = await deleteWorkspaceMutation.mutateAsync({
        workspaceData
      });
      console.log(data);
      toast.success('Deleted successful!');
      router.push('/workspace');
    } catch (error) {
      // Handle registration failure
      console.log(error);
      console.error('Error:', error.message);
      toast.error(error.message || 'An error occurred.');
    }
    finally {
      // Hide loading overlay after the mutation is complete
      setLoadingOverlay(false);
    }
  }

  const [showModal, setShowModal] = useState(false);

  return (
    <div className='flex flex-col w-full items-center border-gray-100 border-b-4  bg-white pt-1 px-4 sm:pb-0 pb-5'>
        {loadingOverlay && (
          <Overlay>
            <p>Loading...</p>
          </Overlay>
        )}

        <ToastContainer />

        {showModal && <EditWorkspace setShowModal={setShowModal} val={val} />}
        <div className='flex flex-row w-full items-center justify-start sm:justify-between  '>
          <div className='flex items-center'>
            <img src="./images/logo.svg" className=' w-24 h-24 sm:w-30 sm:h-30' />

            <div className='flex-col text-lg sm:text-xl font-extrabold mx-3 '>

              {val.name}

              <div className='flex flex-row items-center justify-start my-1'>
                <section className='hidden sm:flex'>

               
                <AvatarGroup
                  max={7}
                  
                >
                  <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="./images/1.jpg" />
                  <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="./images/2.jpg" />
                  <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="./images/3.jpg" />
                  <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="./images/4.jpg" />
                  <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="./images/5.jpg" />
                  <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="./images/6.jpg" />
                  <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="./images/7.jpg" />
                  
                </AvatarGroup>
                </section>
                <text className='sm:ml-2 text-gray-400 text-sm font-semibold'>
                  1,423 members
                </text>
              </div>
            </div>
          </div>
          <button onClick={() => setShowModal(true)} className='hidden sm:flex bg-[#390A75] text-md sm:text-sm font-semibold text-white rounded-lg px-6 py-3 mr-3'>
            EDIT HITCH
          </button>
          <button onClick={()=>{deleteCard()}} className='hidden sm:flex bg-[#390A75] text-md sm:text-sm font-semibold text-white rounded-lg px-6 py-3 mr-3'>
            DELETE HITCH
          </button>
        </div>
        <button onClick={() => setShowModal(true)} className='flex sm:hidden w-full justify-center bg-[#390A75] text-md sm:text-xl sm:font-semibold text-white rounded-md mx-8 py-3 mt-2 '>
          EDIT HITCH
        </button>
        <button onClick={()=>{deleteCard()}} className='flex sm:hidden w-full justify-center bg-[#390A75] text-md sm:text-xl sm:font-semibold text-white rounded-md mx-8 py-3 mt-2 '>
          DELETE HITCH
        </button>


      </div>
  )
}

export default Card
