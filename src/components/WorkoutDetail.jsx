import React from 'react';

function WorkoutDetail({ workout }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 overflow-hidden bg-white shadow-lg">
      {/* Workout Image and Title */}
      <div className="relative mb-10">
        <img
          src={workout.image}
          alt={workout.title}
          className="w-full h-fullo object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center justify-center">
          <div className="text-white p-8 text-center">
            <h1 className="text-4xl font-bold">{workout.title}</h1>
            {workout.duration && <p className="text-lg mt-2">{workout.duration}</p>}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* If Workout has Description */}
        {workout.description && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">รายละเอียด</h2>
            <p className="text-gray-700">{workout.description}</p>
          </div>
        )}

        {/* If Workout has Benefits */}
        {workout.benefits && workout.benefits.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-gray-900">ประโยชน์</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              {workout.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}

        {/* If Workout has Instructions */}
        {workout.instructions && workout.instructions.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-gray-900">วิธีทำ</h3>
            <ol className="list-decimal list-inside text-gray-700 mt-2 space-y-1">
              {workout.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}

export default WorkoutDetail;
