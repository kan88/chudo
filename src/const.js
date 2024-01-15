import photo1 from './assets/images/teams/1/photo.jpg';
import photo2 from './assets/images/teams/2/photo.jpeg';
import a1 from './assets/images/teams/1/1.jpg';
import a2 from './assets/images/teams/1/2.jpg';
import a3 from './assets/images/teams/1/3.jpg';
import a4 from './assets/images/teams/1/4.jpg';
import a5 from './assets/images/teams/1/5.jpg';
import a6 from './assets/images/teams/1/6.jpg';
import a7 from './assets/images/teams/1/7.jpg';
import a8 from './assets/images/teams/1/8.jpg';
import a9 from './assets/images/teams/1/9.jpg';
import a10 from './assets/images/teams/1/10.jpg';
import a11 from './assets/images/teams/1/11.jpg';
import b1 from './assets/images/teams/2/1.jpeg';
import b2 from './assets/images/teams/2/2.jpeg';
import b3 from './assets/images/teams/2/3.jpeg';
import b4 from './assets/images/teams/2/4.jpeg';
import b5 from './assets/images/teams/2/5.jpeg';
import b6 from './assets/images/teams/2/6.jpeg';
import b7 from './assets/images/teams/2/7.jpeg';
import b8 from './assets/images/teams/2/8.jpeg';
import b9 from './assets/images/teams/2/9.jpeg';
import b10 from './assets/images/teams/2/10.jpeg';
import b11 from './assets/images/teams/2/11.jpeg';
import b12 from './assets/images/teams/2/12.jpeg';
import b13 from './assets/images/teams/2/13.jpeg';
import b14 from './assets/images/teams/2/14.jpeg';
import c1 from './assets/images/teams/3/1.jpg';
import c2 from './assets/images/teams/3/2.jpg';
import c3 from './assets/images/teams/3/3.jpg';
import c4 from './assets/images/teams/3/4.jpeg';
import c5 from './assets/images/teams/3/5.jpg';
import c6 from './assets/images/teams/3/6.jpg';
import c7 from './assets/images/teams/3/7.jpg';
import c8 from './assets/images/teams/3/8.jpg';
import c9 from './assets/images/teams/3/9.jpg';
import c10 from './assets/images/teams/3/10.jpg';
import d1 from './assets/images/teams/guests/1.jpg';
import d2 from './assets/images/teams/guests/2.jpg';
import d3 from './assets/images/teams/guests/3.jpg';
import d4 from './assets/images/teams/guests/4.jpg';

const TEAMS = [{
  title: 'Первый состав',
  teacher: 'Бехтерев Михаил Валерьевич',
  photo: photo1,
  students: [{ name: 'нарышкина Катя', nickname: 'таня', image: a1 }, { name: 'данилов матвей', nickname: 'пустыхин', image: a2 }, { name: 'лычагин матвей', nickname: 'панов', image: a3 },
    { name: 'самойлова мария', nickname: 'елена михайловна', image: a4 }, { name: 'Рожко Эвелина', nickname: 'кнопочкина', image: a5 }, { name: 'Паршикова Лиза', nickname: 'зябликова', image: a6 },
    { name: 'Луканина Настя', nickname: 'гладкова', image: a7 }, { name: 'Новикова Варя', nickname: 'шептунова', image: a8 }, { name: 'Квачкова Кира', nickname: 'шаталова', image: a9 },
    { name: 'Перченко Соня', nickname: 'злобина', image: a10 }, { name: 'Иванова София', nickname: 'золотухина', image: a11 }],
  nickname: 'Играют дети из детской театральной студии В ожидании чуда',
  filial: 'Филиал Лубянка, Продвинутый уровень 1',
}, {
  title: 'Второй состав',
  teacher: 'Кулешова Ксения Леонидовна',
  photo: photo2,
  students: [{ name: 'дубовицкая лиза', nickname: 'ТАНЯ', image: b1 },
    { name: 'шкадин арсений', nickname: 'панов', image: b2 },
    { name: 'комаров иван', nickname: 'пустыхин', image: b3 },
    { name: 'гудушаури анна', nickname: 'елена михайловна', image: b4 },
    { name: 'зальцман софия', nickname: 'шаталова', image: b5 },
    { name: 'политаева настя', nickname: 'злобина', image: b6 },
    { name: 'лысых софья', nickname: 'шишкина', image: b7 },
    { name: 'гойдина алиса', nickname: 'шептунова', image: b8 },
    { name: 'неруш елизавета', nickname: 'гладкова', image: b9 },
    { name: 'архипцова рита', nickname: 'золотухина', image: b10 },
    { name: 'калмыкова дарья', nickname: 'кнопочкина', image: b11 },
    { name: 'герман софия', nickname: 'зябликова', image: b12 },
    { name: 'викулина мария', nickname: 'малышева', image: b13 },
    { name: 'улусой аделия', nickname: 'гордеева', image: b14 }],
  nickname: 'Играют дети из детской театральной студии В ожидании чуда',
  filial: 'Филиал Куркино, Продвинутый уровень',
}, {
  title: 'Третий состав',
  teacher: 'Кулешова Ксения Леонидовна',
  photo: photo2,
  students: [{ name: 'филина софия', nickname: 'таня', image: c1 },
    { name: 'пак егор', nickname: 'панов', image: c2 },
    { name: 'дулин дмитрий', nickname: 'пустыхин', image: c3 },
    { name: 'кулешова ксения', nickname: 'елена михайловна', image: c4 },
    { name: 'невзорова софия', nickname: 'шаталова', image: c5 },
    { name: 'зленко анна', nickname: 'злобина', image: c6 },
    { name: 'невзорова полина', nickname: 'зябликова', image: c7 },
    { name: 'талерко софия', nickname: 'кнопочкина', image: c8 },
    { name: 'новикова софья', nickname: 'гладкова', image: c9 },
    { name: 'майстренко марк', nickname: 'разбегаев', image: c10 },
    { name: 'литвин савва', nickname: 'гость на празднике', image: d1 },
    { name: 'мантурова вероника', nickname: 'гостья на празднике', image: d2 },
    { name: 'семочкина арина', nickname: 'гостья на празднике', image: d3 },
    { name: 'соломатина алена', nickname: 'гостья на празднике', image: d4 }],
  nickname: 'Играют дети из детской театральной студии В ожидании чуда',
  filial: 'Филиал Лубянка, Продвинутый уровень 2',
}];

export default TEAMS;
