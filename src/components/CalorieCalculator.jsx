import React, { useState } from 'react';

function CalorieCalculator() {
  const [foodInput, setFoodInput] = useState('');
  const [foodInputArray, setFoodInputArray] = useState([]);
  const [activityInput, setActivityInput] = useState('');
  const [calories, setCalories] = useState(0);
  const [distance, setDistance] = useState(1.5);
  const [speed, setSpeed] = useState(3);
  const [duration, setDuration] = useState(12);

  const foodCalories = {
    "ข้าวมันไก่": 600,
    "ข้าวผัด": 500,
    "ต้มยำกุ้ง": 350,
    "ผัดไทย": 550,
    "ส้มตำ": 150,
    "ก๋วยเตี๋ยว": 600
  };

  const handleFoodSubmit = (e) => {
    e.preventDefault();

    if (!foodInput.trim()) return;

    setFoodInputArray((prevArray) => [...prevArray, foodInput]);
    let sum = foodCalories[foodInput]
    foodInputArray.forEach((food) => {
      sum += foodCalories[food]
    })
    setCalories(sum);
    setFoodInput('');
  };

  const calculateCalories = (e) => {
    const input = e.target.value;
    setActivityInput(input);
    const cal = parseFloat(input);

    if (!isNaN(cal) && cal > 0) {
      setDistance((cal / 100).toFixed(2));
      setSpeed((cal / 50).toFixed(2));
      setDuration((cal / 5).toFixed(2));
    } else {
      setDistance(0);
      setSpeed(0);
      setDuration(0);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">ค้นหาแคลอรี่จากชื่ออาหาร</h2>
        <form onSubmit={handleFoodSubmit} className="space-y-4">
          <input
            type="text"
            list="food-list"
            value={foodInput}
            onChange={(e) => setFoodInput(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="ใส่อาหารที่รับประทาน"
          />
          <datalist id="food-list">
            <option value="ข้าวผัด" />
            <option value="ก๋วยเตี๋ยว" />
            <option value="ส้มตำ" />
            <option value="ต้มยำกุ้ง" />
          </datalist>
          <button type="submit" className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-md hover:bg-emerald-200 w-full sm:w-auto">
            ใส่
          </button>
        </form>
        {foodInputArray.length > 0 && (
          <div className="mt-4 space-y-2">
            {foodInputArray.map((item, index) => (
              <div key={index} className="bg-gray-100 p-2 rounded-md">{item}</div>
            ))}
          </div>
        )}
        <div className="mt-6">
          <h3 className="font-medium">ผลลัพธ์</h3>
          <div className="bg-emerald-50 p-4 rounded-md mt-2">
            <p>แคลอรี่ที่ได้</p>
            <p className="text-2xl font-bold">{calories} kcal</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">ค้นหาแคลอรี่จากการออกกำลังกาย</h2>
        <input
          type="text"
          value={activityInput}
          onChange={calculateCalories}
          className="w-full p-2 border rounded-md"
          placeholder="ใส่แคลอรี่ที่ต้องการ"
        />
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-emerald-50 p-4 rounded-md">
            <p>วิ่ง</p>
            <p className="text-xl font-bold">{distance} km</p>
          </div>
          <div className="bg-emerald-50 p-4 rounded-md">
            <p>เดิน</p>
            <p className="text-xl font-bold">{speed} km</p>
          </div>
          <div className="bg-emerald-50 p-4 rounded-md">
            <p>ปั่นจักรยาน</p>
            <p className="text-xl font-bold">{duration} minute</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalorieCalculator;
