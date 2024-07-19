import { useEffect, useState } from "react";
import { Alert, Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { apis } from "../apis/mahasiswa";
import { useNavigate } from "react-router-dom";

const Component = ({openModal, setOpenModal, title, p}) => {
    const Navigate = useNavigate();
    const [nim, setNim] = useState('');
    const [nama, setNama] = useState('');
    const [angkatan, setAngkatan] = useState('');
    const [jurusan, setJurusan] = useState('');
    const [alamat, setAlamat] = useState('');
    const [error, setError] = useState('');
    const btn = title === 'Tambah data' ? 'Tambah data' : 'Edit data';
    useEffect(() => {
        const getByNim = async () => {
            try {
                
                const response = await apis.getOne(p);
                setNim(response.data[0].nim);
                setNama(response.data[0].name);
                setAngkatan(response.data[0].angkatan);
                setJurusan(response.data[0].jurusan);
                setAlamat(response.data[0].alamat);
            } catch (error) {
                setError(error.message);
            }
        }
        getByNim();
    }, [p]);
    
    const createData = async (data) => {
        try {
            const response = await apis.create(data);
            if (response.data.message === 'Data added successfully'){
                Navigate('/');
            }
            console.log(response.data);
        } catch (error) {
            setError(error.message);
        }
    }

    const updateData = async (id, data) => {
        try {
            const response = await apis.update(id, data);
            console.log(response.data);
        } catch (error) {
            setError(error.message);
        }
    }

    function onCloseModal() {
        setOpenModal(false);
        setNim('');
        setNama('');
        setAngkatan('');
        setJurusan('');
        setAlamat('');
    }

    const submit = () => {
        if (!nim || !nama || !angkatan || !jurusan){
            Alert('Data tidak boleh kosong');
            return;
        }
        const data = {
            nim: nim,
            name: nama,
            angkatan: angkatan,
            jurusan: jurusan,
            alamat: alamat
        }

        if (title === 'Tambah data'){
            createData(data);
            setOpenModal(false);

        } else {
            updateData(p, data);
            setOpenModal(false);
        }
    }
    
    return (
      <>
        
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">{title}</h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Nim" value="Your nim" />
                </div>
                <TextInput
                  id="nim"
                  placeholder="masukan nim"
                  value={nim}
                  onChange={(event) => setNim(event.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="nama" value="Your nama" />
                </div>
                <TextInput
                  id="nama"
                  placeholder="masukan nama"
                  value={nama}
                  onChange={(event) => setNama(event.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="angkatan" value="Your angkatan" />
                </div>
                <TextInput
                  id="angkatan"
                  placeholder="masukan angkatan"
                  value={angkatan}
                  onChange={(event) => setAngkatan(event.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="jurusan" value="Your jurusan" />
                </div>
                <TextInput
                  id="jurusan"
                  placeholder="masukan jurusan"
                  value={jurusan}
                  onChange={(event) => setJurusan(event.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="jurusan" value="Your alamat" />
                </div>
                <TextInput
                  id="alamat"
                  placeholder="masukan alamat"
                  value={alamat}
                  onChange={(event) => setAlamat(event.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <Button onClick={submit}>{btn}</Button>
              </div>
              
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }

export default Component;