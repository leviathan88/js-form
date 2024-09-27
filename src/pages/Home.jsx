import '../style/pages/home.css'
import { Nav } from "../components/Nav"

export const Home = () => {
  const submit = (e) => {
    e.preventDefault()

    const data = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      birthday: e.target.birthday.value,
      city: e.target.city.value,
      experience: e.target.answer.value,
      company: e.target.company.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      notFinished: e.target.check.checked,
    };

    localStorage.setItem('userData', JSON.stringify(data));

    e.target.name.value = '';
    e.target.surname.value = '';
    e.target.birthday.value = '';
    e.target.city.value = '';
    e.target.company.value = '';
    e.target.startDate.value = '';
    e.target.endDate.value = '';
    e.target.check.checked = false;

    document.getElementById('yes').checked = false;
    document.getElementById('no').checked = true;
    document.getElementById('company').disabled = true;
    document.getElementById('startDate').disabled = true;
    document.getElementById('endDate').disabled = true;
    document.getElementById('check').disabled = true;
  };

  const answer = (e) => {
    const isYes = e.target.id === 'yes'
    document.getElementById('company').disabled = !isYes;
    document.getElementById('startDate').disabled = !isYes;
    document.getElementById('endDate').disabled = !isYes;
    document.getElementById('check').checked = false
    document.getElementById('check').disabled = !isYes;
    document.getElementById('company').required = isYes;
    document.getElementById('startDate').required = isYes;
    document.getElementById('endDate').required = isYes;
  };

  const unFinished = (e) => {
    const endDate = document.getElementById('endDate')
    e.target.checked ? endDate.disabled = true : endDate.disabled = false
  }


  const ignore = (e) => {
    const value = e.target.value;
    let next = '';

    for (let i of value) {
      if ((i >= 'A' && i <= 'Z') || (i >= 'a' && i <= 'z')) {
        next += i;
      }
    }

    e.target.value = next;
  };

  const today = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString();
    const day = date.getDate().toString();
    let value = '';

    const mm = month.length < 2 ? '0' + month : month;
    const dd = day.length < 2 ? '0' + day : day;
    value = `${year}-${mm}-${dd}`;
    return value
  }

  return (
    <div>
      <Nav />
      <form onSubmit={submit} className='homeForm'>
        <div className='baseDiv'>
          <label htmlFor="name"> Name : </label>
          <input type="text" name="name" id="name" required onChange={ignore} />

          <label htmlFor="surname"> Surname : </label>
          <input type="text" name="surname" id="surname" required onChange={ignore} />
        </div>

        <div className='baseDiv'>
          <label htmlFor="birthday"> Birthday : </label>
          <input type="date" name="birthday" id="birthday" required />

          <label htmlFor="city"> City : </label>
          <input type="text" name="city" id="city" required onChange={ignore} />
        </div>

        <div className='baseDiv'>
          <label> Work experience </label>
          <div className='radioDiv'>
            <label htmlFor="yes"> yes </label>
            <input type="radio" name='answer' id='yes' value='yes' onChange={answer} />

            <label htmlFor="no"> no </label>
            <input type="radio" name='answer' id='no' value='no' onChange={answer} defaultChecked />
          </div>

          <label htmlFor="company"> Name of company </label>
          <input type="text" name='company' id='company' disabled />
        </div>

        <div className='baseDiv'>
          <label htmlFor="startDate"> Start date : </label>
          <input type="date" name="startDate" id="startDate" disabled />

          <label htmlFor="endDate"> End Date : </label>
          <input type="date" name="endDate" id="endDate" disabled max={today()} />
        </div>

        <div className='baseDiv sc'>
          <div>
            <label htmlFor="check"> Not finished yet </label>
            <input type="checkbox" name="check" id="check" disabled onChange={unFinished} />
          </div>

          <button type="submit"> Submit </button>
        </div>
      </form>
    </div>
  )
}