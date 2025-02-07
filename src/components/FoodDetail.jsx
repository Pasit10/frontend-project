import React from "react";

function FoodDetail({ food }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 overflow-hidden bg-white shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Food Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-md">
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-80 object-cover rounded-2xl"
          />
        </div>

        {/* Food Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-900">{food.name}</h1>
          <p className="text-lg text-gray-600 mt-4">{food.description}</p>

          {/* Additional Details */}
          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-gray-700">Calories:</span>
              <span className="text-lg text-gray-800">{food.calories} kcal</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-gray-700">Protein:</span>
              <span className="text-lg text-gray-800">{food.protein}g</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-gray-700">Carbs:</span>
              <span className="text-lg text-gray-800">{food.carbs}g</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-gray-700">Fats:</span>
              <span className="text-lg text-gray-800">{food.fats}g</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ingredients Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">วัตถุดิบ</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          {food.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">วิธีทำ</h2>
        <ol className="list-decimal list-inside text-lg text-gray-700 space-y-2">
          {food.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default FoodDetail;
