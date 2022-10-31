import React from 'react';
import './test.css';

import Loader from '../../components/Loader';

const Test = () => {

    const [item, setItem] = React.useState({ name: '', city: '' });
    const [items, setItems] = React.useState([]);
	const [isLoading, setLoading] = React.useState(true);


    const addItem = (e) => {
        e.preventDefault();
        if (item.name && item.city) {
            getMaster(item)
            //console.log(item)
            setItem({ name: '', city: '' });
        }
    }

    const getMaster = async (item) => {
        let response = await fetch('/api/createMaster', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(item)
        });

        let result = await response.json();
        console.log(result);

        getItems();
    }


    const removeMaster = async (id) => {
        let response = await fetch(`/api/deleteMaster/${String(id)}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            // body: String(id)
        });

        let result = await response.json();
        console.log(result);

        getItems();
    }

    const Master = ({ props }) => {

        return (
            <div className='test__master'>
                <div className='test__item'>{props.name}</div>
                <div className='test__item'>{props.city}</div>
                <button className='test__btn' onClick={() => removeMaster(props.id)}>Delete master</button>
            </div>
        )
    }
    const getItems = async () => {
		
		setLoading(true);
        await fetch('/api/masters')
            .then(res => res.json())
            .then(data => setItems(data));
			setLoading(false);
			
    }

    React.useEffect(() => {		
		
        getItems()		
		
    }, []);
	
    return (
        <div className='test'>
            <h2>Таблица мастеров</h2>
            <form className='test__form' onSubmit={addItem}>
                <input value={item.name}
                    onChange={e => setItem({ ...item, name: e.target.value })}
                    type='text'
                    placeholder='введите имя мастера'>

                </input>
                <input value={item.city} onChange={e => setItem({ ...item, city: e.target.value })} type='text' placeholder='введите город мастера'></input>
                <button>Add master</button>
            </form>
			{
				isLoading ? <Loader /> : 
				
					items.map((el, index) =>
						<Master props={el} key={index} />
					)
				
			}
        </div>
    )


}

export default Test;
