## Details for Creating a User Management System:
1.Login Page Details
- Create a login page using TextField and Button components from Material-UI for the form and button.
- Use the onClickHomepage function to navigate to the /homepage when login is successful.
2. Homepage Details
- Use useState to manage data, such as the search query.
- Implement a handleSearchChange function to update the searchTerm as the user types in the search field.
- Create a filteredUsers function to calculate and filter the list of users that match the search query.
3. UI Design Details
- Use Material-UI and Tailwind CSS to design the UI.
- Include a sidebar to display user information.
- Add a modal for adding a new user, which opens when the "Add Member" button is clicked.
4. User Data Table
- Display user details such as ID, Username, Email, First Name, Last Name, and Date Joined.

## รายละเอียดการสร้างระบบจัดการผู้ใช้
1. รายละเอียดหน้า Login
- สร้างหน้า Login โดยใช้ TextField และ Button จาก Material-UI สำหรับฟอร์มและปุ่ม
- ใช้ฟังก์ชัน onClickHomepage  เพื่อไปที่หน้า /homepage เมื่อเข้าสู่ระบบสำเร็จ
2. รายละเอียดหน้า Homepage
- ใช้ useState ในการจัดการข้อมูล เช่น คำค้นหา
- มีฟังก์ชัน handleSearchChange ใช้สำหรับอัปเดตค่า searchTerm ขณะพิมพ์ค้นหา
-มีฟังก์ชัน filteredUsers ในการคำนวณรายชื่อผู้ใช้ที่ตรงกับคำค้นหา
3. รายละเอียดการออกแบบ UI
- ใช้ Material-UI และ Tailwind CSS ในการสร้าง UI
- sidebar สำหรับแสดงข้อมูลผู้ใช้
- modal สำหรับการเพิ่มผู้ใช้ใหม่ซึ่งจะเปิดขึ้นเมื่อคลิกปุ่ม Add member
4. ตารางข้อมูลผู้ใช้
- มีการแสดงข้อมูลต่างๆ เช่น ID, Username, Email, First Name, Last Name และ Date Joined
