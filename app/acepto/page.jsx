'use client'

import { useRouter } from "next/navigation";
import fetchForm from "../libs/fetchForm";

// import Redirect from "../libs/Redirect";
const Form = () => {
  const router = useRouter()
  const onSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    let newTarget = {};

    for (let i = 0; i < target.length; i++) {
        const element = target[i];
        element.type === 'radio' 
          ? element.checked 
            ? newTarget = {
              ...newTarget,
              [element.name]: element.value
            } 
            : null
          : newTarget = {
            ...newTarget,
            [element.name]: element.value
          }
      }
    
    const response = await fetchForm(newTarget);
    console.log(response);
    response === 200 ? router.push('/confirmacion') : router.push('/acepto');
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>¿Qué día lo festejamos?</label>
      <label className="aclaration">Por festejar me refiero a vernos, no a los regalos.</label>
      <ul className="form__date">
        <li>
          <input type="radio" name="date" value="14" id="miercoles"/>
          <label htmlFor="miercoles">Miércoles (14)</label>
        </li>
        <li>
          <input type="radio" name="date" value="16" id="viernes"/>
          <label htmlFor="viernes">Viernes (16)</label>
        </li>
        <li>
          <input type="radio" name="date" value="18" id="domingo"/>
          <label htmlFor="domingo">Domingo (18)</label>
        </li>
      </ul>
      <label>¿Cómo querés que vaya tu señor?</label>
      <ul className="form__outfit">
        <li>
          <input type="radio" name="outfit" value="deportivo" id="deportivo"/>
          <label htmlFor="deportivo">Deportivo</label>
        </li>
        <li>
          <input type='radio' name="outfit" value="normal" id="normal"/>
          <label htmlFor="normal">Normal</label>
        </li>
        <li>
          <input type="radio" name="outfit" value="formal" id="formal"/>
          <label htmlFor="formal">Lo más formal que se pueda</label>
        </li>
      </ul>
      <button type="submit">Enviar</button>
    </form>
  )

}

const page = () => {
  return (
    <>
      <Form />
    </>
  )
}

export default page
