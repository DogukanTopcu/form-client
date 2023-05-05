import React, { useState } from 'react';
import { applicationCreate } from "../api";

import ClipLoader from "react-spinners/ClipLoader";

const FormInputs = () => {
    const [application, setApplication] = useState({
        fullName: "",
        schoolId: "",
        email: "",
        telNo: "",
    });
    const [isDone, setIsDone] = useState(false);
    const [warning, setWarning] = useState("");

    const [nameController, setNameController] = useState([false, ""]);
    const [schoolIdController, setSchoolIdController] = useState([false, ""]);
    const [emailController, setEmailController] = useState([false, ""]);
    const [telNoController, setTelNoController] = useState([false, ""]);

    const [loader, setLoader] = useState(false);

    const controlName = (name) => {
        if (name.length === 0) {
            setNameController([true, "İsim Soyisim bölümü boş bırakılamaz"]);
            return false;
        }
        else if (name.length < 4) {
            setNameController([true, "Lütfen geçerli bir isim giriniz."]);
            return false;
        }
        else if (name.split(" ")[1] == null) {
            setNameController([true, "Lütfen tam adanızı giriniz."]);
            return false;
        }
        else {
            setNameController([false, ""]);
            return true;
        }
    }

    const controlSchoolID = (schoolId) => {
        if (schoolId.length < 9) {
            setSchoolIdController([true, "Girdiğiniz okul id'si yanlış."]);
            return false;
        }
        else {
            setSchoolIdController([false, ""]);
            return true;
        }
    }

    const controlEmail = (email) => {
        if (email.split("@")[1] == null) {
            setEmailController([true, "Lütfen geçerli bir email adresi giriniz."]);
            return false;
        }
        else {
            setEmailController([false, ""]);
            return true;
        }
    } 

    const controlTelNo = (telNo) => {
        if (telNo.length !== 11) {
            setTelNoController([true, "Lütfen geçerli bir telefon numarası giriniz. 11 basamaklı olmalı."]);
            return false;
        }
        else {
            setTelNoController([false, ""]);
            return true;
        }
    }

    const handleApply = async (app) => {
        controlName(app.fullName);
        controlSchoolID(app.schoolId);
        controlEmail(app.email);
        controlTelNo(app.telNo);
        
        if (controlName(app.fullName) && controlSchoolID(app.schoolId) && controlEmail(app.email) && controlTelNo(app.telNo)) {
            setLoader(true);
            const response = await applicationCreate(app);
            setLoader(false);

            console.log(response);
            console.log(response.data);
            console.log(response.status);
            
            if (response.status === 201) {
                if (response.data.email === application.email) {
                    setIsDone(true);
                    setApplication(response.data);
                }
            }
            else if (response.status === 204) {
                setWarning("Error");
            }
            else if (response.status === 208) {
                setWarning("Exists");
                setIsDone(true);
            }
        }
    }

  return (
    <div className='flex flex-col w-full mb-5 mt-16'>

        <div className='w-full mt-3 p-2 rounded-lg'>
            <p className='font-bold text-lg font-[raleway] text-[#f0d1b8]'>İsim Soyisim:<span className='text-red-600'> *</span></p>
            {
                isDone ? (
                    <input type="text" placeholder='John Doe' disabled className='w-full px-3 py-2 rounded-md' value={application.fullName} />
                ) : (
                    <input type="text" placeholder='John Doe' className='w-full px-3 py-2 rounded-md' value={application.fullName} onChange={e => {
                        setApplication({...application, fullName: e.target.value});
                        setIsDone(false);
                    }} />
                )
            }
            <p className='text-red-700 text-xs'>{nameController[1]}</p>
        </div>
        <div className='w-full mt-3 p-2 rounded-lg'>
            <p className='font-bold text-lg font-[raleway] text-[#f0d1b8]'>Öğrenci Numarası:<span className='text-red-600'> *</span></p>
            {
                isDone ? (
                    <input type="text" placeholder='290***036' disabled className='w-full px-3 py-2 rounded-md' value={application.schoolId} />
                ) : (
                    <input type="text" placeholder='290***036' className='w-full px-3 py-2 rounded-md' value={application.schoolId} onChange={e => {
                        setApplication({...application, schoolId: e.target.value});
                        setIsDone(false);
                    }} />
                )
            }
            <p className='text-red-700 text-xs'>{schoolIdController[1]}</p>
        </div>
        <div className='w-full mt-3 p-2 rounded-lg'>
            <p className='font-bold text-lg font-[raleway] text-[#f0d1b8]'>Email:<span className='text-red-600'> *</span></p>
            {
                isDone ? (
                    <input type="text" placeholder='johndoe@example.com' disabled className='w-full px-3 py-2 rounded-md' value={application.email} />
                ) : (
                    <input type="text" placeholder='johndoe@example.com' className='w-full px-3 py-2 rounded-md' value={application.email} onChange={e => {
                        setApplication({...application, email: e.target.value});
                        setIsDone(false);
                    }} />
                )
            }
            <p className='text-red-700 text-xs'>{emailController[1]}</p>
        </div>
        <div className='w-full mt-3 p-2 rounded-lg'>
            <p className='font-bold text-lg font-[raleway] text-[#f0d1b8]'>Telefon Numarası:<span className='text-red-600'> *</span></p>
            {
                isDone ? (
                    <input type="text" placeholder='05******575' disabled className='w-full px-3 py-2 rounded-md' value={application.telNo} />
                ) : (
                    <input type="text" placeholder='05******575' className='w-full px-3 py-2 rounded-md' value={application.telNo} onChange={e => {
                        setApplication({...application, telNo: e.target.value});
                        setIsDone(false);
                    }} />
                )
            }
            <p className='text-red-700 text-xs'>{telNoController[1]}</p>
        </div>
        
        <div className='p-2'>
        {
            isDone ? (<button className='w-full text-white font-extrabold text-md py-2 bg-gray-500 cursor-default rounded-lg mt-10'>{warning === "Exists" ? "Başvurunuz bulunmaktadır" : "Başvurunuz alındı"}</button>) : 
                !loader ? <button onClick={() => handleApply(application)} className='w-full text-white font-extrabold text-md py-2 bg-blue-700 rounded-lg mt-10'>Başvur</button> : (
                    <div className='w-full text-white font-extrabold text-md py-2 mt-10 text-center flex justify-center items-center'>
                        <ClipLoader
                          color={`#ffffff`}
                          loading={loader}
                          size={50}
                          aria-label="Loading Spinner"
                          data-testid="loader"
                        />
                    </div>
                )
            
        }

        {
            isDone && warning !== "Exists" ? (
                <div className='mt-4'>
                    <p className='text-green-600 text-lg'>{application.fullName}, başvurun alınmıştır. Etkinlikte görüşmek üzere...</p>
                    <p className='text-yellow-400 text-sm'>Herhangi bir sorununuzda whatsapp, instagram (<span className='text-blue-400'>@iyte_yazilim</span>) ve mail (<span className='text-blue-400'>yazilim@iyte.edu.tr</span>) üzerinden sorularınızı iletebilirsiniz.</p>
                </div>
            ) : null
        }
        {
            warning === "Error" ? (
                <div className='mt-4'>
                    <p className='text-red-600 text-lg'>{application.fullName}, sistemde bir hata oluştu. Lütfen topluluk yöneticilerine sorununuzu bildiriniz.</p>
                    <p className='text-yellow-400 text-sm'>Herhangi bir sorununuzda whatsapp, instagram (<span className='text-blue-400'>@iyte_yazilim</span>) ve mail (<span className='text-blue-400'>yazilim@iyte.edu.tr</span>) üzerinden sorularınızı iletebilirsiniz.</p>
                </div>
            ) : warning === "Exists" ? (
                <div className='mt-4'>
                    <p className='text-green-600 text-lg'>{application.fullName}, zaten başvurunuz bulunmaktadır. Etkinlikte görüşmek üzere...</p>
                    <p className='text-yellow-400 text-sm'>Herhangi bir sorununuzda whatsapp, instagram (<span className='text-blue-400'>@iyte_yazilim</span>) ve mail (<span className='text-blue-400'>yazilim@iyte.edu.tr</span>) üzerinden sorularınızı iletebilirsiniz.</p>
                </div>
            ) : null
        }
        </div>
    </div>
  )
}

export default FormInputs