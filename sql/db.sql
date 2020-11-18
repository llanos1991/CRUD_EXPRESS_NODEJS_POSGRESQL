CREATE TABLE IF NOT EXISTS projects(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    priority integer NOT NULL,
    description text,
    deliverydate date NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    done BOOLEAN,
    projectId integer REFERENCES projects(id)
);


INSERT INTO projects (name,priority,description,deliverydate) VALUES ('MAKE A WEB APP',1,'USANDO JAVASCRIPT','2020-05-12'),('WEB APP',2,'USANDO PHP','2020-09-12'),('ANDROID',3,'USANDO JAVA','2020-09-14');


INSERT INTO tasks (name,done,projectId) VALUES ('VUE JS',false,1),('LARAVEL',true,2);
INSERT INTO tasks (name,done,projectId) VALUES ('create UI',false,1),('DESING',true,2);