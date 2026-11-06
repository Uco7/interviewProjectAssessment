import React,{useState} from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const ContactUs = () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        subject:"",
        message:""
    })
    const [error,setError]=useState({});
    const [isSubmiting,setIsSubmiting]=useState(false);
    const [success,setSuccess]=useState(false)
    const handleChange=(e)=>{
     const   {name,value}=e.target
        setFormData((prevData)=>({
            ...prevData,[name]:value
        }))
        setError((prevError)=>({
            ...prevError,[name]:''
        }

        ))
        setSuccess(false)
    }
    const validateForm=()=>{
        const newError={};
        const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!formData.name.trim()){
            newError.name="name field is required";

        }
         if(!formData.email.trim()){
            newError.email="email field is required";

        }else if(!emailRegex.test(formData.email)){
            newError.email="valide email address is required"
        }
        if(!formData.message.trim()){
            newError.message="message field is required"
        }
        setError(newError)
        return Object.keys(newError).length===0
       
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const isValide=validateForm();
        if(!isValide){
            return
        }
        setIsSubmiting(true);
        setSuccess(false);
        setTimeout(()=>{
            setIsSubmiting(false)
            setSuccess(true)
            setFormData({
                 name:"",
                email:"",
                subject:"",
                message:""
                
            })
        },1000)
    }
    return (
        <div id='contact' className='container mx-auto'>
            <div className='lg:flex lg:px-32 gap-x-10 '>
                <div className=' flex-grow'>
                    <section className="w-full bg-gradient-to-l  from-[#110D2E]/30  to-[#fc466a4a]/10  rounded-md shadow-md  p-16">
                        <div className='flex flex-col mb-10 justify-center items-center'>
                            <h2 className="text-2xl font-semibold  capitalize text-white">Drop Us Your Message</h2>
                            <p className='text-gray-400 '>Freely contact with us anytime. We're available here for you.</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-2">
                                <div className='col-span-2 lg:col-span-1'>
                                    <input id="username" type="text" 
                                    className=" w-full px-4 py-2 mt-2 text-blue-600  rounded-full bg-transparent formBorder-gradient 
                                     focus:outline-none focus:ring-0" placeholder='Full Name'
                                     name='name'
                                     value={formData.name}
                                     onChange={handleChange}
                                     
                                     />
                                     {error.name&&(
                                        <p   className="mt-2 text-sm text-red-400">
                                            {error.name}
                                        </p>
                                     )}
                                </div>

                                <div className='col-span-2 lg:col-span-1'>
                                    <input id="username" type="email" className=" w-full px-4 py-2 mt-2 text-blue-600  rounded-full bg-transparent formBorder-gradient  
                                    focus:outline-none focus:ring-0" placeholder='Your Email'  
                                    name='email'
                                    value={formData.email}
                                     onChange={handleChange} />
                                      {error.email&&(
                                        <p   className="mt-2 text-sm text-red-400">
                                            {error.email}
                                        </p>
                                     )}
                                </div>

                                <div className='col-span-2'>
                                    <input id="username" type="text" className=" w-full px-4 py-2 mt-2 text-blue-600  rounded-full bg-transparent formBorder-gradient  
                                    focus:outline-none focus:ring-0"
                                     placeholder='Select Subject' 
                                     name='subject'
                                     value={formData.subject}
                                     onChange={handleChange}
                                     
                                     
                                     />
                                </div> 
                                <div className='col-span-2 '>
                                    <textarea id="username" type="text" className=" w-full px-6 py-2 mt-2 text-blue-600
                                      rounded-full bg-transparent formBorder-gradient 
                                       focus:outline-none focus:ring-0" placeholder='Message...' rows={5}
                                       name='message'
                                        value={formData.message}
                                     onChange={handleChange}
                                       
                                       />
                                        {error.message&&(
                                        <p   className="mt-2 text-sm text-red-400">
                                            {error.message}
                                        </p>
                                     )}
                                </div>
                                <div className='col-span-2 '>
                                <input type="email" className="form-input rounded-full px-4 py-3 hidden" placeholder='Email' />
                                </div>
                            </div>
                               {success&&(
                                        <p className="mb-4 text-center text-sm text-green-400">
                                            Your message have been sent successfully
                                        </p>
                                     )}


                            <div className="flex justify-start mt-6">
                                <button className="px-6 py-2 rounded-full bg-[#6318F1] 
                                text-white  hover:shadow-lg hover:bg-gradient-to-r 
                                hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 hover:scale-105 duration-200"
                                type='submit'
                                disabled={isSubmiting}
                                
                                >
                                    {isSubmiting?"sending...":"Send Message"}


                                </button>
                            </div>
                        </form>
                    </section>
                </div>


                <div className='  lg:w-[22%] flex flex-col items-center justify-center mx-16 formBorder-gradient border'>

                    <div className='flex flex-1 flex-col items-center justify-around '>      
                      <div className='flex flex-col justify-center items-center py-4'>
                      <FaPhoneAlt size={44} className='text-blue-700 my-4'/>
                        <div className='text-white text-lg py-1'>Phone</div>
                        <div className='text-gray-400 text-lg'>0310 - 7756294</div>
                      </div>
                        <hr className='w-32 align-bottom bg-gradient-to-r h-[1px] from-[#FC466B] to-[#3F5EFB] '/>
                    </div>

                   
                    <div className='flex flex-1 flex-col items-center justify-around '>      
                      <div className='flex flex-col justify-center items-center py-4'>
                      <MdMarkEmailUnread size={44} className='text-blue-700 my-4'/>
                        <div className='text-white text-lg py-1'>Email</div>
                        <div className='text-gray-400 text-lg'>0310 - 7756294</div>
                      </div>
                        <hr className='w-32 align-bottom bg-gradient-to-r h-[1px] from-[#FC466B] to-[#3F5EFB] '/>
                    </div>

                    
                    <div className='flex flex-1 flex-col items-center justify-around '>      
                      <div className='flex flex-col justify-center items-center py-4'>
                      <FaLocationDot size={44} className='text-blue-700 my-4'/>
                        <div className='text-white text-lg py-1'>Location</div>
                        <div className='text-gray-400 text-lg'>0310 - 7756294</div>
                      </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default ContactUs