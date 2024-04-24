import {heroes, healthSort, healthValue, orderByProps, personInfo} from '../app';

test.each([
  [{health: 55}, 'healthy'],
  [{health: 20}, 'wounded'],
  [{health: 5}, 'critical'],
])(
('should determine the level of health for healthy %s'),
(health, expected) => {
  const result = healthValue(health);
  expect(result).toBe(expected);
});

test('should sort', () => {
  const result = healthSort(heroes);

  expect(result).toEqual([
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]);
});


test('should sort objext properties', () => {
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
  const listSort = ["name", "level"];
  const result = orderByProps(obj, listSort);

  expect(result).toEqual([
    {key: "name", value: "мечник"},
  {key: "level", value: 2},
  {key: "attack", value: 80},
  {key: "defence", value: 40}, 
  {key: "health", value: 10},
  ]);
});

test('should return personInfo', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
  };
  const result = personInfo(character);

  expect(result).toEqual([
    {id: 8, name: 'Двойной выстрел', description: 'Двойной выстрел наносит двойной урон', icon: 'http://...'},
    {id: 9, name: 'Нокаутирующий удар', description: 'Описание недоступно', icon: 'http://...'},
  ]);
});