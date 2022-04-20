import { useForm } from 'react-hook-form';
import axios from 'axios';
import './addcss.css'

const ADD_CONDITION = [
  
  {
    tag: "Book Name",
    name: 'bookName',
  },
  {
    tag: "Edition",
    name: 'edition',
  },
  {
    tag: "Date of Publish",
    name: 'publishAt',
    type: 'date',
  },
  {
    tag: "Cost",
    name: 'cost',
    type: 'number',
  },
  {
    tag: "Seller Name",
    name: 'sellerName',
  },
  {
    tag: 'Author',
    name: 'author',
  },
  {
    tag: 'Origin Cost',
    name: 'orginCost',
    type: 'number'
  }

]

export default function AddBook() {

  const { register, handleSubmit, setValue, watch } = useForm();

  const bookImg = watch("bookImg");

  const imageChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setValue('bookImg', event.target.files[0]);
    }
  };
  const onSubmit = (data) => {
    console.log(data);
    const result = axios.post('/api/book/add', data);
    console.log(result);
    alert(result.message);
  }
  return (
    <div className="add-page">
      <form className='add-form' onSubmit={handleSubmit(onSubmit)}>
        <p className='title'>Add Book</p>
        {ADD_CONDITION.map((item, index) =>
          <div key={index} className='input-wrap'>
            <p className=''>{item.tag}</p>
            <input type={item?.type} {...register(item.name)} className='input-field' />
          </div>
        )}
        <div className="input-image-wrap">
          <input type="file" accept="image/*" onChange={imageChange} className='input-img' />
          {bookImg &&
            <img width={'350px'} height="auto"
              src={typeof bookImg === 'string' ? bookImg : URL.createObjectURL(bookImg)}
            />
          }
        </div>
        <button className='btn-submit' type="submit">Add Book</button>
      </form>
    </div>
  )
}