import React from 'react'
import styles from '../../styles/styles'
import location from "../../assets/images/placeholder.png"
import payment from "../../assets/images/pay.png"
import box from "../../assets/images/box.png"

const CheckoutSteps = ({active}) => {
    console.log(active);
  return (
    <div className='w-full flex justify-center'>
        <div className="w-[80%] 800px:w-[50%] flex items-center flex-wrap ml-80">
              <div className={`${styles.noramlFlex}`}>
                  <div className={`${styles.pay_button}`}>
                      <img src={location} alt="Your Image" className="w-10 h-10 mr-1" />
                  </div>
                  <div className={`${active > 1 ? "w-[30px] 800px:w-[70px] h-[4px] !bg-[#f63b60]"
                      : "w-[30px] 800px:w-[70px] h-[4px] !bg-[#FDE1E6]"
                      }`} />
              </div>

              <div className={`${styles.noramlFlex}`}>
                
                <div className={`${active > 1 ? `${styles.pay_button}` : `${styles.pay_button} !bg-[#FDE1E6]`}`}>
                    <img src={payment} alt="payment" className="w-10 h-10 mr-1" />
                </div>
               </div>

              <div className={`${styles.noramlFlex}`}>
                  <div className={`${active > 3 ? "w-[30px] 800px:w-[70px] h-[4px] !bg-[#f63b60]"
                      : "w-[30px] 800px:w-[70px] h-[4px] !bg-[#FDE1E6]"
                      }`} />
                  <div className={`${active > 2 ? `${styles.pay_button}` : `${styles.pay_button} !bg-[#FDE1E6]`}`}>
                      <img src={box} alt="payment" className="w-10 h-10 mr-1" />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default CheckoutSteps