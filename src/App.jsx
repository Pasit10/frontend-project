import React, { useState } from 'react';
import { Bike } from 'lucide-react';
import CalorieCalculator from './components/CalorieCalculator';
import FoodGallery from './components/FoodGallery';
import WorkoutGallery from './components/WorkoutGallery';
import Navbar from './components/Navbar';
import FoodDetail from './components/FoodDetail';
import WorkoutDetail from './components/WorkoutDetail'; // New WorkoutDetail component

function App() {
  // State for managing active tab, selected food, and selected workout
  const [activeTab, setActiveTab] = useState('home');
  const [selectedFood, setSelectedFood] = useState(null);
  const [selectedWorkout, setSelectedWorkout] = useState(null); // New state for selected workout

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Home Section */}
      {activeTab === 'home' && (
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Image Section */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden mb-12">
            <img
              src="https://i0.wp.com/www.rukrun.com/wp-content/uploads/2019/03/7.10-ประโยชน์-ของ-การ-วิ่ง-ที่หลายคนอาจคาดไม่ถึง.jpg"
              alt="Runner at beach"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="text-white p-12">
                <h1 className="text-5xl font-bold mb-4">
                  เริ่มต้นสุขภาพดีง่าย ๆ
                </h1>
                <p className="text-2xl">
                  แค่เปลี่ยนวันนี้ให้ดีกว่าเมื่อวาน
                </p>
              </div>
            </div>
          </div>

          {/* Workout Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">บทความเกี่ยวกับสุขภาพและการออกกำลังกาย</h2>
            {/* Pass setSelectedWorkout to WorkoutGallery */}
            <WorkoutGallery setActiveTab={setActiveTab} setSelectedWorkout={setSelectedWorkout} />
          </section>

          {/* Healthy Food Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">อาหารเพื่อสุขภาพ</h2>
            {/* Pass setActiveTab and setSelectedFood to FoodGallery */}
            <FoodGallery setActiveTab={setActiveTab} setSelectedFood={setSelectedFood} />
          </section>
        </div>
      )}

      {/* Calorie Calculator Tab */}
      {activeTab === 'calculator' && <CalorieCalculator />}

      {/* Food Detail Tab */}
      {activeTab === 'foodDetail' && selectedFood && (
        <div>
          <br></br>
          <FoodDetail food={selectedFood} setActiveTab={setActiveTab} />
          <br></br>
        </div>
      )}

      {/* Workout Detail Tab */}
      {activeTab === 'workoutDetail' && selectedWorkout && (
        <div>
          <br></br>
          <WorkoutDetail workout={selectedWorkout} setSelectedWorkout={setSelectedWorkout} />
          <br></br>
        </div>
      )}
    </div>
  );
}

export default App;
