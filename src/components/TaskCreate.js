//  onChange: Bir form elemanının değeri değiştiğinde tetiklenir.
// event inputun içine girdiğin değeri temsil ediyor.

/*onCreate'i props olarak App.js componentine gönderiyoruz.
Sonuç olarak, bu <input> elementi, kullanıcının bir başlık girmesine
 olanak tanır ve girilen değeri basket durum değişkeni ile senkronize eder.
 ** value özelliği, <input> elementinin mevcut değerini basket durum değişkenine bağlar.
  Bu sayede, basket değişkenindeki değer her güncellendiğinde, <input> alanının görüntülenen
   değeri de otomatik olarak güncellenir.
 */

import { useState } from 'react';
function TaskCreate({onCreate}) {
    const[basket, setBasket] = useState("");
    const[task, setTask] = useState("");
    
const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(basket,task);
    setTask("");
    setBasket("");
} 
    return(
        <div className="taskcreate">
  <h3>Lütfen task ekleyiniz!</h3>
  <label className="baslik">Başlık</label>
  <input value={basket} onChange={e => setBasket(e.target.value)} className="baslik-input"type="text"/>
  <label className="baslik">Task Giriniz!</label>
  <textarea value={task} onChange={e => setTask(e.target.value)} className="olustur-input" rows={5}/>
  <button onClick={handleSubmit}className="olustur">Oluştur</button>
        </div>
    );
}

export default TaskCreate;