import Image from 'next/image';
import React, {useState} from 'react'
import Logo from "../../../public/Logo.svg";
import ModalBg1 from "../../../public/ModalBg1.svg";
import ModalBg2 from "../../../public/ModalBg2.svg";

const CreateWorkspace = ({setShowModal}) => {
    const [input,setInput] = useState({workspaceName:"",workspaceid:""});
    const [flag, setFlag] = useState(false);

    const changeHandler=(inputField,text)=>
    {
        setInput(prev=>({...prev,[inputField]:text}));
    }

    const clickHandler=()=>
    {
        if(flag)
        {


            // Enter the actual function here to call workspace api
            console.log(input);
            setShowModal(false);
        }
        setFlag(true);
    }

  return (
    <div className='fixed bg-black/30 w-screen h-screen z-40 top-0 flex justify-center items-center'>
        <main className='relative flex flex-col items-center bg-white min-w-1/3 min-h-1/2 max-h-max max-w-max rounded-lg shadow-lg pt-7 pl-5 pr-7 pb-16'>
            <svg className="w-6 h-6 absolute right-5 top-5 hover:text-red-500 hover:cursor-pointer" onClick={()=>setShowModal(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <section className='w-full grid auto-cols-auto grid-flow-col items-center justify-center'>
                <Image src={ModalBg1} className='-mt-1'/>
                <Image src={Logo} className='justify-self-center self-start'/>
                <Image src={ModalBg2} className='-mb-[10%]'/>
            </section>
            <h1 className='text-2xl font-semibold -mt-5'>Create a Workspace</h1>
            <p className='text-[#525252] text-[19px] mt-3 mb-6'>Start creating a workspace to manage your teams</p>
            <input className='py-3 px-2.5 border border-[#DED2D9] rounded-md placeholder:text-xl w-[85%]'
             placeholder={flag?'Enter a Workspace ID':'Enter a workspace name'}
             value={flag?input.workspaceid:input.workspaceName}
             onChange={(e)=>flag?changeHandler("workspaceid",e.target.value):changeHandler("workspaceName",e.target.value)}
            />
            <button className='bg-primary text-white text-xl py-4 mt-5 w-[85%] rounded-full hover:shadow-sm hover:shadow-primary disabled:brightness-75 disabled:hover:cursor-not-allowed'
             disabled={flag?input.workspaceid==="":input.workspaceName===""}
             onClick={clickHandler}>
                {flag?"Create Workspace":"Next"}
            </button>
        </main>
    </div>
  )
}

export default CreateWorkspace
