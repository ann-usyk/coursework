import './home.css'
import React from "react";
import NewsTemplate from "../NewsPages/NewsTemplate";

const Header = ()=>{
    return(
        <div>
            <div className='main-home' >
        </div>
            <NewsTemplate>
                <p>
                    За перший місяць повномасштабного вторгнення Росії в Україну активісти Центру екологічних ініціатив “Екодія” нарахували більше сотні злочинів проти довкілля, які вчинили війська РФ. Вони руйнують нафтобази, бомблять підприємства і заводи, випалюють ліси, розстрілюють атомні енергоблоки. Згідно із Женевською конвенцією це є частиною воєнних злочинів. Які наслідки це матиме для довкілля, як можна фіксувати такі військові злочини та як відновлювати природу після війни — пояснює кандидатка економічних наук, доцентка кафедри екології Національного університету “Києво-Могилянська академія” Олена Маслюківська.
                </p>
                <h2>
                    Як активні військові дії впливають на довколишнє середовище?
                </h2>
                <p>
                    Із усіх видів людської діяльності війна найгірше впливає на довкілля: з одного боку військові дії негативно позначаються на довколишньому середовищі, а з іншого — ресурси, що йдуть на війну, могли б витрачатися на збереження довкілля або на ресурс-ефективні технології. Тому за умов відкритих бойових дій слід розрізняти прямі і непрямі впливи, а також втрачені можливості.
                </p>
                <blockquote>
                    Є країни, які на 90% залежать від нашого зерна. Є країни, що залежать від російських добрив, на які зараз накладені санкції
                </blockquote>
                <p>
                    До <b>прямих впливів</b> належать вибухи, які руйнують екосистему. Тим більш російсько-українська війна проходить навесні, коли тварини прокидаються, птахи повертаються, а все живе готується мати потомство. Руйнування середовища існування і шумове забруднення місць їхнього проживання негативно впливає на перебіг сезону розмноження. Ба більше, пряме потрапляння снарядів та забруднення обгорілою військовою технікою повністю руйнує екосистему. Усі набої, які розриваються, горіння неметалевих деталей військової техніки забруднюють ґрунти та воду важкими металами і токсичними елементами. Не говорячи вже про тони металобрухту, які розкидані по лісопосадках.
                </p>
                <blockquote>
                    Європа на 40% залежна від російського газу і на 28% від нафти
                </blockquote>
                <p>
                    При горінні техніки, мастила, дизелю і бензину також забруднюється повітря. Крім того, ворог спеціально бомбить нафтобази і газопроводи, промислові підприємства. Наприклад, 21 березня російські війська обстріляли ПАТ “Сумихімпром”, внаслідок чого стався витік аміаку в повітря. Крім того, в Україні більше 1000 складів небезпечних речовин і якщо випадково чи навмисно туди потраплять бомби, може відбутися забруднення повітря, водойм, ґрунтів, тощо.
                </p>
                <blockquote>
                    До 2050 року Європу планували перетворити на кліматично нейтральний континент. Тепер можна очікувати як більш амбітних цілей, так і рух у зворотному напрямку
                </blockquote>
                <p>
                    Коли внаслідок військової діяльності руйнуються міста, також страждає довкілля. Можуть не працювати очищувальні станції, або внаслідок потрапляння снаряду в будинок формуються будівельні відходи вперемішку із елементами військової техніки. Подібне сміття є дуже небезпечним, тому його не можна просто прибрати й викинути. Його небезпечно як транспортувати, так і зберігати на звалищі. Тому для поводження із таким типом відходів у містах необхідно розробити окремий протокол.
                </p>
                <img src="https://cdn4.suspilne.media/images/resize/952x1.78/6230fcffacf26b80.jpg" alt="Associated Press"/>
                <p>
                    Непрямі наслідки бойових дій на довкілля виникають не від пожеж чи розриву снарядів, а, скажімо, від знеструмлення шахти, з якої треба відкачувати воду. Без електроенергії не працюють насоси і шахта затоплюється разом із токсичними та радіоактивними відходами, які можуть проникати у ґрунтові води. Ця проблема була актуальною на Донбасі ще з 2014 року. Її ніяк не можна було вирішити, а зараз ситуація загострюється.
                </p>
                <p>
                    Іншим прикладом непрямого впливу є неконтрольовані викиди неочищених відходів підприємств у воду чи атмосферу. Зараз у зв’язку з воєнним станом держава тимчасово це не контролює. Хотілося б вірити, що усі українці чесні й відповідальні. Втім бувають недобросовісні підприємці та й очікую, що на війну спишуть і чимало екологічних правопорушень, скоєних до 24 лютого, наприклад, вирубку лісів.
                </p>
                <p>
                    Кошти, які в державі планували витратити на енергоефективність, зелену економіку, відновні джерела енергії, створення нових заповідників, збереження видів, зараз витрачають на військові дії. Власне, це і є втрачені можливості. Влітку 2021 року Україна прийняла добровільне зобов’язання по скороченню викидів парникових газів. Втім, війна все змінила і поки незрозуміло в який бік. Бо зараз горить техніка, міста і підприємства, внаслідок чого виділяється багато парникових газів, але й багато заводів на Сході зруйновані і ще довго не працюватимуть, не викидаючи у атмосферу вуглекислий газ.
                </p>
                <h2>
                    Чи війна в Україні впливає на довкілля усього світу?
                </h2>
                <p>
                    На глобальному рівні на два важливі аспекти: харчову безпеку та політику щодо змін клімату. Через військові дії українські фермери не можуть засіяти частину полів у східних та південних областях, що позначиться на кількості зернових, яку ми зможемо експортувати восени. Є країни, які на 90% залежать від нашого зерна. Є країни, що залежать від російських добрив, на які зараз накладені санкції. Ланцюжки постачання складно швидко переорієнтувати, тому ця війна матиме глобальні продовольчі наслідки.
                </p>
                <p>
                    Зараз Україна вимагає щоб Європейський союз наклав ембарго на вуглеводні і вже три Балтійські країни відмовилися від імпорту російських нафти і газу. Загалом, Європа на 40% залежна від російського газу і на 28% від нафти. Від цього залежить робота великих підприємств, тому чим більша країна, наприклад Німеччина, тим їй складніше відмовитися від російських вуглеводнів.
                </p>
            </NewsTemplate>
        </div>
    )
}

export default Header;