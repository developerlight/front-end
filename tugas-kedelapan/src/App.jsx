import { useEffect, useState } from 'react'
import './App.css'
import apis from './apis/mahasiswa.jsx'

function App() {
  const [mahasiswa, setMahasiswa] = useState([])
  const [error, setError] = useState(null)
  const [nim, setNim] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await apis.getAllMahasiswa()
        if(nim){
          response = await apis.getMahasiswaByNim(nim)
        }
        setMahasiswa(response.data)
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
  }, [nim])

  if(error){
    return <h1>{error.message}</h1>
  }

  return (
    <>
      <nav>
        <h1>List Mahasiswa</h1>
        <input 
          type="text" 
          placeholder='Masukan nim' 
          value={nim}
          onChange={(e) => setNim(e.target.value)}
        />
        <button
          onClick={() => setNim(nim)}
        >cari</button>
      </nav>
      <table>
        <tHead>
          <tr>
            <th>NIM</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Prodi</th>
            <th>Angkatan</th>
          </tr>
        </tHead>
        <tBody>
          {
            mahasiswa.map((mhs) => (
              <tr key={mhs.nim}>
                <td>{mhs.nim}</td>
                <td>{mhs.name}</td>
                <td>{mhs.alamat}</td>
                <td>{mhs.jurusan}</td>
                <td>{mhs.angkatan}</td>
              </tr>
            ))
          }
        </tBody>
      </table>
    </>
  )
}

export default App
