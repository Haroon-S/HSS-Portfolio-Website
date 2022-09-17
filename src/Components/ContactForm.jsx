import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2'


export default function ContactForm ()
{


   const encode = (data) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    }
    
    return (
        <Formik
       initialValues={{ uName: '', email: '', subject: '', message: '' }}
       validationSchema={Yup.object({
        uName: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required(<div>Required
            <span className="text-[#FF0000] ml-2 text-xl mt-2 font-bold">*</span></div>),
         email: Yup.string().email(<div>Invalid email address
         <span className="text-[#FF0000] ml-2 text-xl mt-2 font-bold">*</span></div>)
         .required(<div>Required
            <span className="text-[#FF0000] ml-2 text-xl mt-2 font-bold">*</span></div>),
         subject: Yup.string().required(<div>Required
            <span className="text-[#FF0000] ml-2 text-xl mt-2 font-bold">*</span></div>),
         message: Yup.string().required(<div>Required
            <span className="text-[#FF0000] ml-2 text-xl mt-2 font-bold">*</span></div>),
         
       })}
       onSubmit={(values, actions) => {
         //   alert(encode({ "form-name": "contact", ...values }));
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "contact", ...values })
            })
            .then(() => {
              Swal.fire(
                'Submitted Successfuly',
                '',
                'success'
              );
              actions.resetForm()
            })
            .catch((error) => {
              alert(error);
            })
            .finally(() => actions.setSubmitting(false))
       }}
     >
       <Form className=" flex flex-col gap-10 justify-center md:justify-start"
       name="contact" netlify data-netlify={true} >

        <div className=" flex flex-col">
         <Field className=" outline-none pl-5 placeholder:text-sm placeholder:text-[#a0a0a0] border-2 rounded-lg border-[#d4d4d4] dark:border-[hsla(0,0%,100%,.2)] text-base font-normal h-[50px] bg-white dark:bg-[#101010]" name="uName" type="text" placeholder="Name"/>
         <div className=" pl-3 text-black dark:text-white mt-2 font-semibold">
             <ErrorMessage name="uName" />
         </div>
        </div>

        <div className=" flex flex-col">
         <Field className=" outline-none pl-5 placeholder:text-sm placeholder:text-[#a0a0a0] border-2 rounded-lg border-[#d4d4d4] dark:border-[hsla(0,0%,100%,.2)] text-base font-normal h-[50px] bg-white dark:bg-[#101010]" name="email" type="email" placeholder="Email"/>
         <div className="pl-3  text-black dark:text-white mt-2 font-semibold">
            <ErrorMessage name="email" />
         </div>
        </div>

        <div className=" flex flex-col">
         <Field className=" outline-none pl-5 placeholder:text-sm placeholder:text-[#a0a0a0] border-2 rounded-lg border-[#d4d4d4] dark:border-[hsla(0,0%,100%,.2)] text-base font-normal h-[50px] bg-white dark:bg-[#101010]" name="subject" type="text" placeholder="Subject"/>
         <div className="pl-3  text-black dark:text-white mt-2 font-semibold">
            <ErrorMessage name="subject" />
         </div>
        </div>

        <div className=" flex flex-col">
         <Field className=" outline-none pl-5 placeholder:text-sm placeholder:text-[#a0a0a0] pt-4 border-2 rounded-lg border-[#d4d4d4] dark:border-[hsla(0,0%,100%,.2)] text-base font-normal h-[120px] bg-white dark:bg-[#101010]" name="message" as="textarea" placeholder="Message"/>
         <div className="pl-3  text-black dark:text-white mt-2 font-semibold">
            <ErrorMessage name="message" />
         </div>
        </div>
 
        <div className=" mx-auto md:mx-2">
            <button className=" bg-sky-500 px-16 py-3 text-white text-lg font-bold rounded-2xl hover:bg-sky-600" type="submit">Submit</button>
        </div>
       </Form>
     </Formik>

    )
}