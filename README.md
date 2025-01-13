### **README.md สำหรับ Backend**

---

# **Taski Backend**

โปรเจกต์ **Taski Backend** เป็นระบบ API สำหรับจัดการงาน (**Task Management System**) พัฒนาด้วย **NestJS** และใช้ฐานข้อมูล **PostgreSQL** โดยเชื่อมต่อผ่าน **Prisma ORM**

---

## **การติดตั้งโปรเจกต์**

### **1. ดาวน์โหลดโปรเจกต์**
- Clone โปรเจกต์จาก GitHub:
  ```bash
  git clone https://github.com/Fernlizer/task-back-meeSolutions
  ```

- เปลี่ยน Directory ไปยังโฟลเดอร์โปรเจกต์:
  ```bash
  cd taski-backend
  ```

---

### **2. ติดตั้ง Dependencies**
- ใช้คำสั่ง:
  ```bash
  npm install
  ```

---

### **3. ตั้งค่า Database**
- สร้างไฟล์ **`.env`** ใน root directory:
  ```plaintext
  DATABASE_URL="postgresql://taskdb_user:taskdb_password@localhost:5432/taskdb?schema=public"
  ```

- **รายละเอียด:**
  - **taskdb_user**: ชื่อผู้ใช้งานฐานข้อมูล (ตามที่กำหนดใน Docker)
  - **taskdb_password**: รหัสผ่านของผู้ใช้งาน
  - **taskdb**: ชื่อฐานข้อมูล
  - **localhost:5432**: Host และ Port ของ PostgreSQL

---

### **4. รันการ Migrate Database**
- ใช้คำสั่ง:
  ```bash
  npx prisma migrate dev --name init
  ```
- คำสั่งนี้จะสร้างตารางในฐานข้อมูลตาม schema ที่กำหนดไว้ใน `prisma/schema.prisma`

---

### **5. รันโปรเจกต์**
- ใช้คำสั่ง:
  ```bash
  npm run start:dev
  ```
- API จะพร้อมใช้งานที่:
  ```
  http://localhost:4000
  ```

---

## **การใช้งาน API**

### **Endpoint หลัก**

1. **ดึงข้อมูล Task ทั้งหมด**
   - **Method**: `GET`
   - **URL**: `/tasks`
   - **Response ตัวอย่าง**:
     ```json
     [
       {
         "id": 1,
         "title": "Task 1",
         "description": "This is the first task.",
         "dueDate": "2025-01-15T12:00:00.000Z",
         "status": "Pending"
       }
     ]
     ```

2. **สร้าง Task ใหม่**
   - **Method**: `POST`
   - **URL**: `/tasks`
   - **Request Body ตัวอย่าง**:
     ```json
     {
       "title": "New Task",
       "description": "Details of the task.",
       "dueDate": "2025-01-20T10:00:00.000Z",
       "status": "Pending"
     }
     ```
   - **Response ตัวอย่าง**:
     ```json
     {
       "id": 2,
       "title": "New Task",
       "description": "Details of the task.",
       "dueDate": "2025-01-20T10:00:00.000Z",
       "status": "Pending"
     }
     ```

3. **แก้ไข Task**
   - **Method**: `PATCH`
   - **URL**: `/tasks/:id`
   - **Request Body ตัวอย่าง**:
     ```json
     {
       "title": "Updated Task",
       "status": "Completed"
     }
     ```
   - **Response ตัวอย่าง**:
     ```json
     {
       "id": 2,
       "title": "Updated Task",
       "description": "Details of the task.",
       "dueDate": "2025-01-20T10:00:00.000Z",
       "status": "Completed"
     }
     ```

4. **ลบ Task**
   - **Method**: `DELETE`
   - **URL**: `/tasks/:id`

---

## **การพัฒนาเพิ่มเติม**

### **1. การอัปเดต Schema**
- แก้ไขไฟล์ `prisma/schema.prisma` เพื่อเพิ่ม/แก้ไขโครงสร้างฐานข้อมูล
- ใช้คำสั่ง:
  ```bash
  npx prisma migrate dev --name update-schema
  ```

### **2. การตรวจสอบข้อมูลในฐานข้อมูล**
- ใช้ Prisma Studio:
  ```bash
  npx prisma studio
  ```
- เปิดเบราว์เซอร์ที่ `http://localhost:5555` เพื่อจัดการข้อมูล

---

## **Dependencies หลัก**
- **NestJS**: Framework สำหรับสร้าง Backend
- **Prisma**: ORM สำหรับเชื่อมต่อ PostgreSQL
- **PostgreSQL**: ฐานข้อมูลที่ใช้ในโปรเจกต์

---
