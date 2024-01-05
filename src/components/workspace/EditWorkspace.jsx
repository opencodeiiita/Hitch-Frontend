import Image from 'next/image';
import React, {useState,useEffect} from 'react'
import Logo from "../../../public/Logo.svg";
import ModalBg1 from "../../../public/ModalBg1.svg";
import ModalBg2 from "../../../public/ModalBg2.svg";
import { useEditWorkspace } from '@/utils/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
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
`

const EditWorkspace = ({setShowModal,val}) => {
    const [input,setInput] = useState({workspaceName:val.name,workspaceDescription:val.description,workspaceid:val.workspaceId});
    const [flag, setFlag] = useState({currentField:"workspaceName",next:{currentField:"workspaceDescription",next:{currentField:"workspaceid"}}});

    const changeHandler=(inputField,text)=>
    {
        setInput(prev=>({...prev,[inputField]:text}));
    }

    const router = useRouter()

    const editWorkspaceMutation = useEditWorkspace();

    const [loadingOverlay, setLoadingOverlay] = useState(false);

    const textPicker = (currentField)=>
    {
        switch(currentField)
        {
            case "workspaceName":
                return "Enter a Workspace Name";

            case "workspaceDescription":
                return "Enter a Workspace Description";

            case "workspaceid":
                return "Enter a Workspace ID";
        }
    }

    const clickHandler = async ()=>
    {
        if(flag.next)
        {
            setFlag(flag.next);
        }
        else
        {
            // Enter actual function to call create workspace API
            try {
                setLoadingOverlay(true);
                console.log(val);
                const { workspaceName, workspaceDescription, workspaceid } = input;
                const { data } = await editWorkspaceMutation.mutateAsync({
                    name: workspaceName, 
                    description: workspaceDescription, 
                    workspaceId: workspaceid,
                    id: val.id 
                });
                console.log(data);
                toast.success('Workspace Updated successful!');
                router.push('/workspace');

              } catch (error) {
                console.log(error);
                console.error('Workspace error:', error.message);
                alert(error.message || 'An error occurred during workspace creation.');
              }
              finally {
                setLoadingOverlay(false);
                setShowModal(false);
              }
        }
        
    }

  return (
    <div className='fixed bg-black/30 w-screen h-screen z-40 top-0 flex justify-center items-center'>
        {loadingOverlay && (
        <Overlay>
          <p>Loading...</p>
        </Overlay>
      )}

      <ToastContainer />
        <main className='relative flex flex-col items-center bg-white  min-h-1/2 max-h-max max-w-max rounded-lg shadow-lg pt-7 pl-5 pr-7 pb-14 max-sm:h-screen max-sm:justify-center'>
            <svg className="w-6 h-6 absolute right-5 top-5 hover:text-red-500 hover:cursor-pointer" onClick={()=>setShowModal(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <section className='w-full grid auto-cols-auto grid-flow-col items-center justify-center'>
                <Image src={ModalBg1} alt="Primary background" className='-mt-1'/>
                <Image src={Logo} alt="Hitch Logo" className='justify-self-center self-start'/>
                <Image src={ModalBg2} alt="Secondary background" className='-mb-[10%]'/>
            </section>
            <h1 className='text-2xl font-semibold -mt-5 max-sm:mt-0'>Edit a Workspace</h1>
            <p className='text-[#525252] text-[19px] mt-3 mb-6 max-sm:text-xs'>Start creating a workspace to manage your teams</p>
            <input className='py-3 px-2.5 border border-[#DED2D9] rounded-md placeholder:text-xl w-10/12 max-sm:placeholder:text-base'
             placeholder={textPicker(flag.currentField)}
             value={input[flag.currentField]}
             onChange={(e)=>changeHandler(flag.currentField,e.target.value)}
            />
            <button className='bg-primary text-white text-xl max-sm:text-sm py-4 mt-5 w-10/12 rounded-full hover:shadow-sm hover:shadow-primary disabled:brightness-75 disabled:hover:cursor-not-allowed'
             disabled={input[flag.currentField]===""}
             onClick={clickHandler}>
                {flag.next?"Next":"Edit Workspace"}
            </button>

            <section className='w-10/12 mt-8 flex items-center h-6'>
                {flag.currentField!=="workspaceName"
                ?(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>)
                :(
                    <aside className='w-3 h-3 mx-1.5 bg-text rounded-full'></aside>
                )
                }
                <aside className={`h-1 ${flag.currentField!=="workspaceName"?"bg-primary":"bg-text"} flex-grow ml-1  rounded-full`}></aside>

                {flag.currentField==="workspaceid"
                ?(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>)
                :(
                    <aside className='w-3 h-3 mr-1.5 ml-3 bg-text rounded-full'></aside>
                )
                }

                <aside className={`h-1 ${flag.currentField==="workspaceid"?"bg-primary":"bg-text"} flex-grow mx-2 rounded-full`}></aside>
                <aside className='w-3 h-3 bg-text rounded-full'></aside>
            </section>
            <section className='w-11/12 flex justify-between mt-6'>
                <p className={`${flag.currentField==="workspaceName"?"text-text":"text-primary"} font-medium`}>Add Name</p>
                <p className={`${flag.currentField!=="workspaceid"?"text-text":"text-primary"} font-medium -ml-3`}>Description</p>
                <p className={`text-text font-medium`}>Create!</p>
            </section>
        </main>
        
    </div>
  )
}

export default EditWorkspace
