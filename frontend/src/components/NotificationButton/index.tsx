import axios from 'axios';
import NotificationIcon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';
import './style.css'

type Props = {
  saleId: number;
}

const handleClick = (id: number) => {
  axios.get(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
      console.log('sucesso')
    })
}

const NotificationButton = ({ saleId }: Props) => {
  return (
    <>
      <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)} >
        <img src={NotificationIcon} alt="Notificar" />
      </div>
    </>
  )
}

export default NotificationButton