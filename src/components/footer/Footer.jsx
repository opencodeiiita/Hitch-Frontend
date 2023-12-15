const Footer=()=>
{
    return (
        <footer className='bg-primary-dark px-32 py-20 mt-2 max-sm:px-6 max-sm:pt-12 max-sm:pb-4 max-sm:min-h-[95vh] max-sm:relative'>
            <main className='flex justify-between pr-6 max-xl:grid max-xl:grid-cols-2 max-xl:gap-y-6 max-sm:grid-cols-1 max-sm:ml-8 max-sm:pr-0'>
                <section className='space-y-7 mr-[15%] max-xl:col-span-2 max-sm:col-span-1 max-sm:space-y-3 max-sm:mr-0 max-sm:mb-6'>
                    <h1 className='text-[#FFC728] text-5xl font-semibold max-sm:text-6xl max-sm:font-bold'>Hitch</h1>
                    <p className='text-lg font-medium text-text max-sm:text-sm'>Get started now try our product</p>
                    <aside className='relative w-[410px] border-2 border-text px-5 py-3 rounded-full max-sm:w-72 max-sm:border'>
                        <input className='bg-transparent placeholder-text w-3/4 text-white border-0 outline-none max-sm:text-sm' placeholder='Enter your email here'/>
                        <button className='rounded-full bg-[#FFC728] p-2 absolute right-1 top-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </button>
                    </aside>
                </section>
                <ul className='text-text text-lg font-medium grid grid-cols-1 gap-y-4 group max-sm:max-w-fit'>
                    <li className='text-white mb-2 group-hover:text-[#FFC728]'><span className="hidden max-sm:inline-block group-hover:rotate-90 transition-all ease-linear">{'>'}</span> Support</li>
                    <li className='hover:underline hover:cursor-pointer max-sm:hidden group-hover:block max-sm:ml-4'>Help centre</li>
                    <li className='hover:underline hover:cursor-pointer max-sm:hidden group-hover:block max-sm:ml-4'>Account information</li>
                    <li className='hover:underline hover:cursor-pointer max-sm:hidden group-hover:block max-sm:ml-4'>About</li>
                    <li className='hover:underline hover:cursor-pointer max-sm:hidden group-hover:block max-sm:ml-4'>Contact us</li>
                </ul>
                <ul className='text-text text-lg font-medium grid grid-cols-1 gap-y-4 group'>
                    <li className='text-white mb-2 group-hover:text-[#FFC728]'><span className="hidden max-sm:inline-block group-hover:rotate-90 transition-all ease-linear">{'>'}</span> Help and Solution</li>
                    <li className='hover:underline hover:cursor-pointer max-sm:hidden group-hover:block max-sm:ml-4'>Talk to support</li>
                    <li className='hover:underline hover:cursor-pointer max-sm:hidden group-hover:block max-sm:ml-4'>Support docs</li>
                    <li className='hover:underline hover:cursor-pointer max-sm:hidden group-hover:block max-sm:ml-4'>System status</li>
                    <li className='hover:underline hover:cursor-pointer max-sm:hidden group-hover:block max-sm:ml-4'>Covid response</li>
                </ul>
                <ul className='text-text text-lg font-medium grid grid-cols-1 gap-y-4 group'>
                    <li className='text-white mb-2 group-hover:text-[#FFC728]'><span className="hidden max-sm:inline-block group-hover:rotate-90 transition-all ease-linear">{'>'}</span> Product</li>
                    <li className='hover:underline hover:cursor-pointer max-sm:hidden group-hover:block max-sm:ml-4'>Update</li>
                    <li className='hover:underline hover:cursor-pointer max-sm:hidden group-hover:block max-sm:ml-4'>Security</li>
                    <li className='hover:underline hover:cursor-pointer max-sm:hidden group-hover:block max-sm:ml-4'>Beta test</li>
                    <li className='hover:underline hover:cursor-pointer max-sm:hidden group-hover:block max-sm:ml-4'>Pricing product</li>
                </ul>
            </main>

            <aside className='flex justify-around mt-14 max-sm:mt-8 max-sm:absolute max-sm:bottom-4'>
                <span className='text-white text-lg font-medium flex-grow max-sm:text-sm'>© 2023 Hitch Inc. Copyright and rights reserved</span>
                <span className='text-white text-lg font-medium hover:cursor-pointer hover:underline max-md:hidden'>Terms and Condtions</span>
                <span className='text-text text-lg font-medium -mt-1 px-2 max-lg:hidden'>.</span>
                <span className='text-white text-lg font-medium hover:cursor-pointer hover:underline max-md:hidden'>Privacy Policy</span>
            </aside>
        </footer>
    )
}

export default Footer;