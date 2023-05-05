import React from 'react'
import FormInputs from './FormInputs'

const Form = () => {
  return (
    <div className='mx-4'>
        <div className='px-2'>
            <h1 className='font-bold font-[raleway] text-[#f0d1b8] text-3xl'>Code Night Başvuru Formu:</h1>
            <br />

            <p className='container text-xs text-[#f0d1b8] md:text-sm'>
              9 Mayıs Salı gününü 10 Mayıs çarşamba gününe bağlayan gece saat 19.00'da başlayacak olan Code Night etkinliğimizde bu hafta ülkemizin geçmiş seçimlerinin verilerini analiz ederek her bir ilimizin siyasi sıkaladaki yerlerini ve seçmen tiplerini inceleyecek ve 14 Mayıs Cumhurbaşkanlığı ve genel seçimleri için elimizdeki veriler ışığında tahminde bulunacağız.
            </p>

            <br />
            <p className='container text-xs text-[#f0d1b8] md:text-sm'>
              Veri analizi, makine öğrenmesi üzerine olan Code Night etkinliğimize aşağıdaki formu doldurarak kaydını yaparak bu eğlenceli gecede sen de aramıza katılabilirsin.
            </p>

            <br />
            <p className='container text-xs text-[#f0d1b8] md:text-sm'>
              📍 Yer: Makine Mühendisliğ / D14 dersliği
            </p>
            <p className='container text-xs text-[#f0d1b8] md:text-sm'>
              📅 Gün: 9 Mayıs - 10 Mayıs
            </p>
            <p className='container text-xs text-[#f0d1b8] md:text-sm'>
              ⏰ Saat: 19.00 - 06.00
            </p>
        </div>

        <FormInputs />
    </div>
  )
}

export default Form