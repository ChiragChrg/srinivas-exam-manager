import PaymentsList from "../PaymentsList";
import {useOutletContext} from "react-router-dom";
import Modal from "../../../UI/Modal/Modal";
import {HiDownload} from "react-icons/hi";
import {IoMdClose} from "react-icons/io";
import FilterSearch from "../../../UI/FilterSearch/FilterSearch";

const  PaymentsRegularApproved = () => {
    const [handleCloseModal,handleOpenModal,showModal,closeSubjectModal,openSubjectModal,showSubjectModal] = useOutletContext();
     return (
          <>
            <FilterSearch className="mt-1"/>
            <table className="payments-wrapper">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Registration</th>
                        <th>Course</th>
                        <th>Subject Details</th>
                        <th>Payment Details</th>
                        <th>Reciept</th>
                    </tr>
                </thead>    
                <tbody>
                    <PaymentsList 
                    approved 
                    handleOpenModal={handleOpenModal}
                    openSubjectModal={openSubjectModal}
                    />
                    <PaymentsList 
                    approved 
                    handleOpenModal={handleOpenModal}
                    openSubjectModal={openSubjectModal}
                    />
                    <PaymentsList 
                    approved 
                    handleOpenModal={handleOpenModal}
                    openSubjectModal={openSubjectModal}
                    />
                    <PaymentsList 
                    approved 
                    handleOpenModal={handleOpenModal}
                    openSubjectModal={openSubjectModal}
                    />
                </tbody>
            </table>
            {showModal && <Modal width="40%" onClose={handleCloseModal}>
            <IoMdClose className="payment-details-close-icon" onClick={handleCloseModal}/>
                <h3 className="payment-details-hdng">Payment Details</h3>
                <table className="payment-modal-content">
                    <tbody>
                        <tr className="payment-content ">
                            <td className="strong">Student</td>
                            <td>John Doe</td>
                        </tr>
                        <tr className="payment-content ">
                            <td className="strong">Register No.</td>
                            <td>3SU19SA001</td>
                        </tr>
                        <tr className="payment-content ">
                            <td className="strong">Bank Name</td>
                            <td>State Bank of India</td>
                        </tr>
                        <tr className="payment-content ">
                            <td className="strong">Account No.</td>
                            <td>456458743586</td>
                        </tr>
                        <tr className="payment-content ">
                            <td className="strong">Transaction ID</td>
                            <td>FDG6FKJHK97YT7</td>
                        </tr>
                        <tr className="payment-content ">
                            <td className="strong">Date of Payment</td>
                            <td>20-02-2022</td>
                        </tr>
                        <tr className="payment-content ">
                            <td className="strong">Reciept</td>
                            <td><button className="btn-outlined download-btn flex">
                                <HiDownload size={18}/>
                                <span>Download</span>
                            </button></td>
                        </tr>
                    </tbody>
                </table>
            </Modal>}
            {showSubjectModal && <Modal width="40%" onClose={closeSubjectModal}>
            <IoMdClose className="payment-details-close-icon" onClick={closeSubjectModal}/>
                <h3 className="payment-details-hdng">Subject Details</h3>
                <table className="payment-modal-content">
                    <tbody>
                        <tr className="payment-content ">
                            <td className="strong">Student</td>
                            <td>John Doe</td>
                        </tr>
                        <tr className="payment-content ">
                            <td className="strong">Register No.</td>
                            <td>3SU19SA001</td>
                        </tr>
                        <tr className="payment-content ">
                            <td className="strong">Bank Name</td>
                            <td>State Bank of India</td>
                        </tr>
                        <tr className="payment-content ">
                            <td className="strong">Account No.</td>
                            <td>456458743586</td>
                        </tr>
                        <tr className="payment-content ">
                            <td className="strong">Transaction ID</td>
                            <td>FDG6FKJHK97YT7</td>
                        </tr>
                        <tr className="payment-content ">
                            <td className="strong">Date of Payment</td>
                            <td>20-02-2022</td>
                        </tr>
                    </tbody>
                </table>
            </Modal>}
         </>
     )
}

export default PaymentsRegularApproved;