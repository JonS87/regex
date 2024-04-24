// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export let heroes = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];

export function healthValue(hero) {
  if (hero.health >= 50) {
    return 'healthy';
  }
  if (hero.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}

export function healthSort(hero) {
  return hero.sort((a, b) => b.health - a.health);
}

export function orderByProps(obj, listSort) {
  let result = [];
  for (const i in listSort) {
    result.push({
      key: listSort[i],
      value: obj[listSort[i]]
    });
  }
  const keysList = Object.keys(obj).sort(); 
  for (const i in keysList) {
    if (listSort.indexOf(keysList[i]) === -1) {
      result.push({
        key: keysList[i],
        value: obj[keysList[i]]
      });
    }
  }

  return result;
}

export function personInfo(obj) {
  let result = [];
  for (let specialAtack in obj.special) {
    const { id, name, description = 'Описание недоступно', icon } = obj.special[specialAtack];

    result.push({id, name, description, icon});
  }

  return result;
}