import { Alert, Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { apis } from "../apis/mahasiswa";
import { useNavigate } from "react-router-dom";

export function ModalWarning({ warn, setWarn, p}) {
  const [error, setError] = useState('');
  const Navigate = useNavigate();
    const deleteEvent = async (id) => {
        try {
            const response = await apis.delete(id);
            console.log(response);
            setWarn(false);
            Navigate('/');
        } catch (error) {
            setError(error.message);
            Alert(error);
        }
    }
  return (
    <>
      
      <Modal show={warn} size="md" onClose={() => setWarn(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => deleteEvent(p)}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setWarn(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}