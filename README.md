# CRUD de empleados con REACT y .NET
![Screenshot_1](https://github.com/user-attachments/assets/19810074-bcef-4434-9a0c-c21fdca302ad)
![Screenshot_2](https://github.com/user-attachments/assets/9775b4e3-4f47-477d-90af-1f8d09fc09f0)

CREATE TABLE "employee" (
  "id" serial PRIMARY KEY,
  "name" varchar(50) NOT NULL,
  "email" varchar(50) UNIQUE NOT NULL,
  "salary" int NOT NULL DEFAULT 0,
  "created_at" timestamptz NOT NULL DEFAULT (now ())
);
