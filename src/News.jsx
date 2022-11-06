import './news.css'
import React from "react";
import Element from "./Element";

export default class News extends React.Component {

    data = [
        ["/alliance","https://zerowaste.org.ua/wp-content/uploads/2022/04/277537537_5213604108703222_5143165304986691207_n-1200x800.jpeg",
            "Нуль відходів і 100% турботи",
            "Що роблять організації-члени Zero Waste Alliance Ukraine під час війни"],
        ["/korabel-dlya-sortuvannya-u-lvovi-rezultaty-roboty",
            "https://zerowaste.org.ua/wp-content/uploads/2022/10/sortuvalny_korabel_lviv.png",
            "Корабель для сортування у Львові",
            "Майже 66 кг відходів накопичив сортувальний корабель, який на початку вересня ГО Zero Waste Lviv у співпраці з Управлінням екології ЛМР встановили у Замарстинівському парку. Вперше зібрану вторсировину вивантажили 20 жовтня."],
        ["/alliance","https://zerowaste.org.ua/wp-content/uploads/2022/04/277537537_5213604108703222_5143165304986691207_n-1200x800.jpeg",
            "Нуль відходів і 100% турботи",
            "Що роблять організації-члени Zero Waste Alliance Ukraine під час війни"],
        ["/prynczypy-zero-waste-v-ukrayinskyh-shkolah",
            "https://zerowaste.org.ua/wp-content/uploads/2022/09/zero-waste-dlya-ditej.png",
            "Принципи Zero Waste в українських школах",
            "Замість яблучок рахуємо кількість компосту. Харківські екоактивісти випустили посібник для вчителів із zero waste задачами та завданнями для дітей."],
        ["https://www.defense.gov/About/Biographies/Biography/Article/2522687/lloyd-j-austin-iii/",
            "https://zerowaste.org.ua/wp-content/uploads/2022/09/project_20220919_0941304-01-1400x789.png",
            "Безкоштовна участь у міжнародному проєкті для готелів і ресторанів Львова та Львівщини",
            "Запрошуємо готелі, хостели, кафе, ресторани Львова та Львівської області до участі в міжнародному екопроєкті."],
        ["https://www.defense.gov/About/Biographies/Biography/Article/2522687/lloyd-j-austin-iii/",
            "https://zerowaste.org.ua/wp-content/uploads/2022/09/project_20220907_1042059-01-2-1400x789.png",
            "Вебінар «Екологічні сертифікації в сфері гостинності та їхній вплив на кліматичні зміни»","Види міжнародної екологічної сертифікації готельно-ресторанного бізнесу, їхні переваги і недоліки у світлі кліматичних змін, застосування до українських реалій — про це поговоримо на вебінарі «Екологічні сертифікації в сфері гостинності та їхній вплив на кліматичні зміни»."],
        ["https://www.defense.gov/About/Biographies/Biography/Article/2522687/lloyd-j-austin-iii/",
            "https://zerowaste.org.ua/wp-content/uploads/2022/08/annie-spratt-j4fv6dkt9tw-unsplash-2-964x800.jpg",
            "Компостування у містах",
            "Компостування важливе, особливо під час війни. Воно дозволяє заощаджувати на пальному, створювати корисний гумус і є найбільш екодружнім способом поводження з відходами. Розповідаємо про позитивний досвід організації компостування у Луцьку, Львові та Люботині."],
        ["https://www.defense.gov/About/Biographies/Biography/Article/2522687/lloyd-j-austin-iii/",
            "https://zerowaste.org.ua/wp-content/uploads/2022/07/razom-do-peremogy-i-vidnovlennya.png",
            "Міський город у Луцьку: як відкрився та працює острівець пермакультури","Перший луцький міський город «Сади зростання» відкрився у суботу, 23 липня. На території Луцького національного технічного університету облаштували грядки і встановили компостер. Тут кожен охочий може щось висадити, доглядати за городиною і зібрати урожай."],
        ["https://www.defense.gov/About/Biographies/Biography/Article/2522687/lloyd-j-austin-iii/",
            "https://zerowaste.org.ua/wp-content/uploads/2022/03/photo_2022-08-15_17-16-28-2.jpg",
            "Три організації увійшли до складу Українського Альянсу Нуль Відходів\n",
            "Громадські організації з Луцька, Маріуполя і Херсона увійшли до складу Zero Waste Alliance Ukraine. Наприкінці лютого 2022 року представниці ГО «Нуль відходів Луцьк», ГО «Маріуполь сортує» і ГО «Екологічні новини» (Херсон) підписали офіційні папери про вступ до складу Альянсу."]]

    constructor(props) {
        super(props);
        this.state = {
            data: this.data
        }
    }
    get list() {
        // eslint-disable-next-line no-sequences
        return this.state.data.map((_, i) => <Element reference={this.state.data[i][0]} key={i} img={this.state.data[i][1]} name={this.state.data[i][2]} desc={this.state.data[i][3]}/>);
    }

    add(el) {
        // this.data.push(el)
        this.setState(({
            ...this.state,
            data: [...this.state.data, el]
        }))
        // this.data = [...this.data, el]
        // this.data.push(el)
    }

    Generation() {
        console.log(this)
        this.add(Math.random())
    }

    render() {
        return (
            <div>
                <main className='main-news' >
                    {this.list}
                    <Element name="Додати новину" img="https://static.thenounproject.com/png/1555710-200.png" reference="/add_news">
                    </Element>
                </main>
                <button >add</button>
            </div>
        )
    }
}

