import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';
import './Orders.css'

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + '/api/order/list');
      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      toast.error('Failed to fetch orders.');
    }
  };

  const statusHandler = async (event,orderId)=>{
const response = await axios.post(url+"/api/order/status",{
  orderId,
  status:event.target.value
})
if (response.data.success) {
  await fetchAllOrders();
}
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  if (orders.length === 0) {
    return <p>Loading...</p>; // Display a loading indicator while fetching data
  }

  return (
    <div className='order add'>
      <h3>Order page</h3>
      <div className='order-list'>
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt='parcel' />
            <div>
              <p className='order-item-food'>
                {order.items.map((item, index) =>
                  index === order.items.length - 1 ? `${item.name} x${item.quantity}` : `${item.name} x${item.quantity}, `
                )}
              </p>
              <p className='order-item-name'>{order.address.firstName+" "+order.address.lastName}</p>
              <p>{order.address.street+","}</p>
              <p>{order.address.city+","}</p>
              <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            
            <p> Items : {order.items.length}</p>
            <p>₹{order.amount}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Orders;
