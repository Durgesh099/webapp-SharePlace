import React, { useEffect , useState} from 'react';
import ErrorModal from '../../shared/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/UIElements/LoadingSpinner';
import UsersList from '../components/UsersList';
import '../../shared/UIElements/LoadingSpinner.css'

const Users = () => {
  const [Loading, setLoading] =  useState(false)
  const [error, setError] = useState()
  const [loadedUsers, setLoadedUsers] = useState()

  useEffect(()=>{
    const sendRequest = async () =>{
      setLoading(true)
      try{
        const response = await fetch('http://localhost:3000/api/users')

        const responseData = await response.json()

        if(!response.ok){
          throw new Error(responseData.message)
        }

        setLoadedUsers(responseData.users)

      }catch(err){
        setError(err.message)
      }
      setLoading(false)
    }
    sendRequest()
  },[])

  const errorHandler = () =>{
    setError(null)
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={errorHandler}/>
      {Loading && (
        <div className='center'>
          <LoadingSpinner asOverlay/>
        </div>
      )}

      {!Loading && loadedUsers && <UsersList items={loadedUsers}/>}
    </React.Fragment>  
  );
};

export default Users;
