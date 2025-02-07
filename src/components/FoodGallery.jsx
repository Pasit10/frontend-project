import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FoodDetail from "./FoodDetail";

const healthyFoods = [
  {
    "id": 1,
    "name": "สลัดไก่",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80",
    "description": "สลัดไก่เพื่อสุขภาพ เมนูที่อุดมไปด้วยโปรตีน วิตามิน และไฟเบอร์ เหมาะสำหรับคนที่ต้องการอาหารเบา ๆ แต่ยังอิ่มท้อง",
    "calories": 350,
    "protein": 30,
    "carbs": 20,
    "fats": 10,
    "ingredients": [
      "อกไก่ 150 กรัม",
      "ผักสลัดรวม 1 ถ้วย",
      "มะเขือเทศเชอร์รี่ 5 ลูก",
      "แตงกวาหั่นแว่น 1/2 ลูก",
      "ขนมปังโฮลวีทอบกรอบ 1 แผ่น",
      "น้ำสลัดซีซาร์ 2 ช้อนโต๊ะ",
      "พริกไทยดำ และเกลือเล็กน้อย"
    ],
    "instructions": [
      "ปรุงอกไก่ด้วยพริกไทยดำและเกลือ แล้วนำไปย่างจนสุก",
      "ล้างและจัดเรียงผักสลัด มะเขือเทศเชอร์รี่ และแตงกวาลงจาน",
      "หั่นอกไก่เป็นชิ้นพอดีคำ วางลงบนสลัด",
      "หั่นขนมปังโฮลวีทอบกรอบเป็นชิ้นเล็ก ๆ โรยลงไป",
      "ราดน้ำสลัดซีซาร์ให้ทั่ว คลุกเคล้าเล็กน้อย",
      "เสิร์ฟทันที พร้อมรับประทาน"
    ]
  },
  {
    "id": 2,
    "name": "ข้าวผัดอกไก่เพื่อสุขภาพ",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=3544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "ข้าวผัดอกไก่แบบคลีน อุดมไปด้วยโปรตีนและไฟเบอร์ แคลอรีต่ำ เหมาะสำหรับคนรักสุขภาพ",
    "calories": 400,
    "protein": 35,
    "carbs": 45,
    "fats": 8,
    "ingredients": [
      "ข้าวกล้องหุงสุก 1 ถ้วย",
      "อกไก่หั่นเต๋า 150 กรัม",
      "ไข่ไก่ 1 ฟอง",
      "แครอทหั่นเต๋า 1/4 ถ้วย",
      "ต้นหอมซอย 1 ช้อนโต๊ะ",
      "น้ำมันมะกอก 1 ช้อนชา",
      "ซอสถั่วเหลือง 1 ช้อนโต๊ะ",
      "พริกไทยดำและเกลือเล็กน้อย"
    ],
    "instructions": [
      "ตั้งกระทะใส่น้ำมันมะกอก ใช้ไฟกลาง",
      "นำอกไก่ลงไปผัดจนสุก แล้วตักออกพักไว้",
      "ใส่ไข่ไก่ลงไปในกระทะ ใช้ตะหลิวคนให้ไข่แตกเป็นชิ้นเล็ก ๆ",
      "ใส่แครอทและข้าวกล้องลงไปผัดให้เข้ากัน",
      "ใส่อกไก่กลับลงไป ปรุงรสด้วยซอสถั่วเหลือง พริกไทยดำ และเกลือ",
      "โรยต้นหอมซอย ปิดไฟ ตักเสิร์ฟ"
    ]
  },
  {
    "id": 3,
    "name": "โยเกิร์ตผลไม้รวม",
    "image": "https://images.unsplash.com/photo-1571212515416-fef01fc43637?q=80&w=3318&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "เมนูของว่างเพื่อสุขภาพ ที่รวมความอร่อยของโยเกิร์ตและผลไม้ มีวิตามินสูงและช่วยระบบย่อยอาหาร",
    "calories": 250,
    "protein": 10,
    "carbs": 35,
    "fats": 5,
    "ingredients": [
      "โยเกิร์ตรสธรรมชาติ 1 ถ้วย",
      "กล้วยหั่นแว่น 1/2 ลูก",
      "สตรอว์เบอร์รีหั่น 3 ลูก",
      "บลูเบอร์รี 1/4 ถ้วย",
      "เมล็ดเจีย 1 ช้อนชา",
      "น้ำผึ้ง 1 ช้อนชา (ไม่ใส่ก็ได้)",
      "อัลมอนด์สไลซ์ 1 ช้อนโต๊ะ"
    ],
    "instructions": [
      "ตักโยเกิร์ตใส่ถ้วยเสิร์ฟ",
      "วางกล้วย สตรอว์เบอร์รี และบลูเบอร์รีลงบนโยเกิร์ต",
      "โรยเมล็ดเจีย และอัลมอนด์สไลซ์",
      "ราดน้ำผึ้งเล็กน้อย (ตามชอบ)",
      "พร้อมเสิร์ฟ เป็นของว่างเพื่อสุขภาพ"
    ]
  },
  {
    "id": 4,
    "name": "สมูทตี้อะโวคาโดกล้วย",
    "image": "https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=3408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "เครื่องดื่มเพื่อสุขภาพที่อุดมไปด้วยไขมันดีจากอะโวคาโดและพลังงานจากกล้วย",
    "calories": 300,
    "protein": 8,
    "carbs": 40,
    "fats": 12,
    "ingredients": [
      "อะโวคาโด 1/2 ลูก",
      "กล้วยหอม 1 ลูก",
      "นมอัลมอนด์ 1 ถ้วย",
      "เมล็ดเจีย 1 ช้อนชา",
      "น้ำผึ้ง 1 ช้อนชา (ไม่ใส่ก็ได้)",
      "น้ำแข็ง 1/2 ถ้วย"
    ],
    "instructions": [
      "นำอะโวคาโด กล้วย และนมอัลมอนด์ใส่ลงในเครื่องปั่น",
      "เติมเมล็ดเจีย และน้ำผึ้ง",
      "ใส่น้ำแข็ง แล้วปั่นจนเนียนละเอียด",
      "เทใส่แก้ว พร้อมเสิร์ฟ"
    ]
  },
  {
    "id": 5,
    "name": "ขนมปังโฮลวีทหน้าอะโวคาโดไข่ต้ม",
    "image": "https://plus.unsplash.com/premium_photo-1676106623583-e68dd66683e3?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "อาหารเช้าเพื่อสุขภาพที่มีไขมันดีจากอะโวคาโดและโปรตีนจากไข่ต้ม",
    "calories": 280,
    "protein": 15,
    "carbs": 30,
    "fats": 10,
    "ingredients": [
      "ขนมปังโฮลวีท 1 แผ่น",
      "อะโวคาโดบด 1/2 ลูก",
      "ไข่ต้ม 1 ฟอง",
      "เกลือ และพริกไทยเล็กน้อย",
      "พริกป่น (ไม่ใส่ก็ได้)",
      "มะเขือเทศเชอร์รี่ 2 ลูก (หั่นครึ่ง)"
    ],
    "instructions": [
      "นำขนมปังโฮลวีทไปปิ้งจนกรอบ",
      "ทาอะโวคาโดบดลงบนขนมปัง",
      "หั่นไข่ต้มเป็นชิ้น ๆ แล้ววางบนอะโวคาโด",
      "โรยเกลือ พริกไทย และพริกป่นเล็กน้อย",
      "ตกแต่งด้วยมะเขือเทศเชอร์รี่ พร้อมเสิร์ฟ"
    ]
  },
];

const itemsPerPage = 3;

function FoodGallery({ setActiveTab, setSelectedFood }) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(healthyFoods.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full overflow-visible">
      <div className="relative flex items-center gap-4">
        {/* ปุ่มย้อนกลับ */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="p-2 disabled:opacity-50"
        >
          <ChevronLeft />
        </button>

        {/* ส่วนแสดงรายการอาหาร */}
        <div className="overflow-hidden w-full pl-4">
          <div
            className="flex transition-transform duration-300 gap-4"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {healthyFoods.map((food) => (
              <div
                key={food.id}
                className="min-w-[33.333%] p-2 bg-white rounded-lg shadow-lg overflow-visible cursor-pointer"
                onClick={() => {
                  setSelectedFood(food);
                  setActiveTab("foodDetail");
                }}
              >
                <div className="relative h-48">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 pb-4">
                  <h3 className="text-center font-medium text-gray-800">
                    {food.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <br></br>
        </div>

        {/* ปุ่มไปหน้า next */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className="p-2 disabled:opacity-50"
        >
          <ChevronRight />
        </button>
      </div>

      {/* แสดงหน้าปัจจุบัน */}
      <div className="text-center mt-4">
        Page {currentPage + 1} of {totalPages}
      </div>
    </div>
  );
}

export default FoodGallery;

// function FoodGallery() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       {healthyFoods.map((food) => (
//         <div key={food.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="relative h-48">
//             <img
//               src={food.image}
//               alt={food.name}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="p-4">
//             <h3 className="text-center font-medium text-gray-800">{food.name}</h3>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }