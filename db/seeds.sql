


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('James', 'Franco', 1, 1 ),
    ('John', 'Snow', 2, 1),
    ('Darth', 'Vader', 3, 1),
    ('Anakin', 'Skywalker', 4, 1),
    ('Wedge', 'Antilles', 1, NULL)
;

INSERT INTO department (name)
VALUES 
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal')
;

INSERT INTO role (title, salary, department_id)
VALUES
    ('Lead Sales', 45000, 1),
    ('Lead Engineer', 90000, 2),
    ('CFO', 50000, 3),
    ('Vampire', 2, 4)
;

