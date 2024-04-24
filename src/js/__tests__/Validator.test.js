import { Validator} from '../class/Validator';

test.each([
  [{name: 'archer1', type: 'Bowerman'}],
  [{name: '1archer', type: 'Bowerman'}],
  [{name: 'лучник', type: 'Bowerman'}],
  [{name: 'arc1234her', type: 'Bowerman'}],
  [{name: 'arc?her', type: 'Bowerman'}],
])(
('should check the person name'),
(person) => {
  const checkPerson = new Validator(person.name);
  const result = checkPerson.validateUsername()

  expect(result).toBeFalsy();
});