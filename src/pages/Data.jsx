import { Nav } from "../components/Nav"
import '../style/pages/data.css'

export const Data = () => {
    setTimeout(() => {
        const data1 = localStorage.getItem('userData')
        const data2 = localStorage.getItem('userFeed')
        const data3 = JSON.parse(data1)
        const data4 = JSON.parse(data2)
        const div = document.getElementById('div')

        for (let i in data3) {
            const p = document.createElement('p')
            p.innerHTML = `${i} : ${data3[i]}`
            div.appendChild(p)
        }

        for (let i in data4) {
            const p = document.createElement('p')
            p.innerHTML = `${i} : ${data4[i]}`
            div.appendChild(p)
        }

        if (data3 || data4) {
            const div2 = document.createElement('div')
            div.appendChild(div2)

            const clear = () => {
                localStorage.clear()
                div.innerHTML = ''
            }

            const remove = () => div.innerHTML = ''
            const btn1 = document.createElement('button')
            btn1.innerHTML = 'remove'
            btn1.addEventListener('click', () => remove())
            div2.appendChild(btn1)
            const btn2 = document.createElement('button')
            btn2.innerHTML = 'clear'
            btn2.addEventListener('click', () => clear())
            div2.appendChild(btn2)
        }
    }, 0)

    return (
        <div id="main">
            <Nav />
            <div id="div"></div>
        </div>
    )
}